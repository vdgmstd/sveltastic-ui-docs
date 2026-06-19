import { test, expect, type Locator, type Page } from '@playwright/test';
import { collectErrors } from './_helpers';

// Combobox behavioral matrix (bits-ui v2 parity) against /docs/combobox.
//  BasicCombobox    — name "Fruit"; apple/banana/cherry/grape/mango/orange; built-in filter.
//  GroupedCombobox  — name "Produce"; Fruits + Vegetables groups.
//  MultipleCombobox — name "Frameworks"; value [svelte].
//  ManualFilterCombobox — name "Country"; filter={false}, consumer narrows items.
//  CustomItemCombobox   — name "Favorite fruit"; hand-authored rows; value cherry.
const BASIC = 'Fruit';
const GROUPED = 'Produce';
const MULTI = 'Frameworks';
const MANUAL = 'Country';

async function activeLabel(page: Page, combo: Locator): Promise<string | null> {
	const id = await combo.getAttribute('aria-activedescendant');
	if (!id) return null;
	return (await page.locator(`[id="${id}"]`).textContent())?.trim() ?? null;
}

test.describe('Combobox', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/combobox', { waitUntil: 'networkidle' });
	});

	test('the input carries the combobox ARIA contract', async ({ page }) => {
		const sink = collectErrors(page);
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await expect(combo).toHaveAttribute('aria-autocomplete', 'list');
		await expect(combo).toHaveAttribute('aria-expanded', 'false');
		await combo.click();
		await expect(combo).toHaveAttribute('aria-expanded', 'true');
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		const listboxId = await listbox.getAttribute('id');
		await expect(combo).toHaveAttribute('aria-controls', listboxId!);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('opens a listbox and highlights the first option on open', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		await expect(listbox.locator('[role="option"]')).toHaveCount(6);
		expect(await activeLabel(page, combo)).toBe('Apple');
	});

	test('typing filters the options and re-seats the active row', async ({ page }) => {
		const sink = collectErrors(page);
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		await combo.fill('an');
		// "an" matches Banana, Mango, Orange
		await expect(page.locator('[role="option"]')).toHaveCount(3);
		expect(await activeLabel(page, combo)).toBe('Banana');
		await combo.fill('');
		await expect(page.locator('[role="option"]')).toHaveCount(6);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowDown then Enter selects the active option, closes, and the field reflects it', async ({
		page
	}) => {
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		await page.keyboard.press('ArrowDown'); // Apple -> Banana
		await page.keyboard.press('Enter');
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toHaveValue('Banana');
	});

	test('clicking a filtered option selects it and closes', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		await combo.fill('gr');
		await page.locator('[role="option"]', { hasText: 'Grape' }).click();
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toHaveValue('Grape');
	});

	test('Escape closes the panel and restores focus to the input', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		await expect(page.locator('[role="listbox"]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator('[role="listbox"]')).toHaveCount(0);
		await expect(combo).toBeFocused();
	});

	test('grouped items render section headings and filter within groups', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: GROUPED });
		await combo.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox.getByText('Fruits')).toBeVisible();
		await expect(listbox.getByText('Vegetables')).toBeVisible();
		await combo.fill('car');
		await expect(listbox.locator('[role="option"]')).toHaveCount(1);
		await expect(listbox.locator('[role="option"]').first()).toHaveText(/Carrot/);
	});

	test('multiple mode toggles values, keeps the panel open, and is aria-multiselectable', async ({
		page
	}) => {
		const combo = page.getByRole('combobox', { name: MULTI });
		await combo.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toHaveAttribute('aria-multiselectable', 'true');
		await expect(listbox.locator('[role="option"][aria-selected="true"]')).toHaveCount(1);
		await listbox.locator('[role="option"]', { hasText: 'React' }).click();
		await expect(listbox).toBeVisible();
		await expect(listbox.locator('[role="option"][aria-selected="true"]')).toHaveCount(2);
	});

	test('manual filter (filter={false}) narrows via the consumer-owned items', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: MANUAL });
		await combo.click();
		await expect(page.locator('[role="option"]')).toHaveCount(6);
		await combo.fill('united');
		await expect(page.locator('[role="option"]')).toHaveCount(2);
		await combo.fill('z');
		await expect(page.locator('[role="listbox"] [role="option"]')).toHaveCount(0);
	});

	test('single mode is not aria-multiselectable', async ({ page }) => {
		const combo = page.getByRole('combobox', { name: BASIC, exact: true });
		await combo.click();
		const listbox = page.locator('[role="listbox"]');
		await expect(listbox).toBeVisible();
		await expect(listbox).not.toHaveAttribute('aria-multiselectable', 'true');
	});
});
