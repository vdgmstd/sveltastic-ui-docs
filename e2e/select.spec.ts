import { test, expect, type Locator, type Page } from '@playwright/test';
import { collectErrors } from './_helpers';

// Select behavioral matrix (bits-ui v2 parity) against /docs/select.
//  BasicSelect (single)  — name "Pick a fruit"; items apple/banana/cherry/date(disabled); value apple.
//  MultiSelect           — name "Pick multiple fruits"; value [apple, cherry].
//  FilterSelect (filter) — name "Search…"; Fruits(apple/banana/cherry) + Veggies(carrot/spinach).
const BASIC = 'Pick a fruit';
const FILTER = 'Search…';

async function activeLabel(page: Page, combo: Locator): Promise<string | null> {
	const id = await combo.getAttribute('aria-activedescendant');
	if (!id) return null;
	return (await page.locator(`[id="${id}"]`).textContent())?.trim() ?? null;
}

test.describe('Select', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/select', { waitUntil: 'networkidle' });
	});

	test('opens a listbox and marks the selected value active on open', async ({ page }) => {
		const sink = collectErrors(page);
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		await expect(listbox.locator('[role="option"]')).toHaveCount(4);
		expect(await activeLabel(page, combo)).toBe('Apple');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowDown / ArrowUp move the active option, skip disabled, and wrap', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await page.keyboard.press('ArrowDown');
		expect(await activeLabel(page, combo)).toBe('Banana');
		await page.keyboard.press('ArrowDown');
		expect(await activeLabel(page, combo)).toBe('Cherry');
		// Date is disabled → ArrowDown skips it and wraps to Apple (loop defaults on).
		await page.keyboard.press('ArrowDown');
		expect(await activeLabel(page, combo)).toBe('Apple');
		await page.keyboard.press('ArrowUp');
		expect(await activeLabel(page, combo)).toBe('Cherry');
	});

	test('Home / End jump to the first and last enabled option', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await page.keyboard.press('End');
		expect(await activeLabel(page, combo)).toBe('Cherry');
		await page.keyboard.press('Home');
		expect(await activeLabel(page, combo)).toBe('Apple');
	});

	test('Enter selects the active option, closes, and the trigger reflects it', async ({ page }) => {
		const sink = collectErrors(page);
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await page.keyboard.press('ArrowDown');
		await page.keyboard.press('Enter');
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toHaveValue('Banana');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Escape closes the listbox and restores focus to the trigger', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await expect(page.locator('[role="listbox"]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toBeFocused();
	});

	test('type-ahead moves the active option to the matching label', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await page.keyboard.press('b');
		expect(await activeLabel(page, combo)).toBe('Banana');
		// The type-ahead buffer accumulates within ~1s, so wait for it to reset before the next jump.
		await page.waitForTimeout(1100);
		await page.keyboard.press('c');
		expect(await activeLabel(page, combo)).toBe('Cherry');
	});

	test('clicking an option selects it and closes the listbox', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await page.locator('[role="option"]', { hasText: 'Cherry' }).click();
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toHaveValue('Cherry');
	});

	test('a disabled option is marked aria-disabled and not selected', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await expect(page.locator('[role="listbox"]')).toBeVisible();
		const date = page.locator('[role="option"]', { hasText: 'Date' });
		await expect(date).toHaveAttribute('aria-disabled', 'true');
		await expect(date).not.toHaveAttribute('aria-selected', 'true');
	});

	test('Select.Content publishes a data-state=open hook on its panel body', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC });
		await combo.click();
		await expect(page.locator('.popover__body[data-state="open"]')).toBeVisible();
	});

	test('filter mode narrows the options to the typed query and restores on clear', async ({
		page
	}) => {
		const sink = collectErrors(page);
		const combo = page.getByRole('combobox', { name: FILTER });
		await combo.click();
		await expect(page.locator('[role="listbox"]')).toBeVisible();
		expect(await page.locator('[role="option"]').count()).toBe(5);
		await combo.fill('ap');
		await expect(page.locator('[role="option"]')).toHaveCount(1);
		await expect(page.locator('[role="option"]').first()).toHaveText(/Apple/);
		await combo.fill('');
		await expect(page.locator('[role="option"]')).toHaveCount(5);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('multiple mode toggles several values and keeps the listbox open', async ({ page }) => {
		// The multiple trigger is a nameless chips host — scope to the first Select wrapper that renders chips.
		const multi = page
			.locator('[data-testid="select"]')
			.filter({ has: page.getByTestId('chip') })
			.first()
			.getByRole('combobox');
		await multi.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		await expect(listbox.locator('[role="option"][aria-selected="true"]')).toHaveCount(2);
		await listbox.locator('[role="option"]', { hasText: 'Banana' }).click();
		await expect(listbox).toBeVisible();
		await expect(listbox.locator('[role="option"][aria-selected="true"]')).toHaveCount(3);
	});

	test('aria-multiselectable is set on a multiple-mode listbox only', async ({ page }) => {
		const single = page.getByRole('combobox', { name: BASIC });
		await single.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		await expect(listbox).not.toHaveAttribute('aria-multiselectable', 'true');
		await page.keyboard.press('Escape');
		await expect(listbox).toHaveCount(0);

		const multi = page
			.locator('[data-testid="select"]')
			.filter({ has: page.getByTestId('chip') })
			.first()
			.getByRole('combobox');
		await multi.click();
		await expect(page.locator('[role="listbox"]')).toHaveAttribute('aria-multiselectable', 'true');
	});
});
