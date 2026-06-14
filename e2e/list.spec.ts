import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// List behavioral parity. The /docs/list page renders many lists; selection tests scope to the
// single-select listbox (role=listbox, not multiselectable), multi tests to the multiselectable one.
test.describe('List', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/list', { waitUntil: 'networkidle' });
	});

	const singleListbox = '[role="listbox"]:not([aria-multiselectable="true"])';
	const multiListbox = '[role="listbox"][aria-multiselectable="true"]';

	test('listbox surface renders role=option rows with exactly one selected initially', async ({ page }) => {
		const box = page.locator(singleListbox).first();
		const options = box.locator('[role="option"]');
		await expect(options.first()).toBeVisible();
		// Single-select example pre-selects "blue" — exactly one option is aria-selected.
		await expect(box.locator('[role="option"][aria-selected="true"]')).toHaveCount(1);
	});

	test('clicking an option selects it and deselects the previous (single)', async ({ page }) => {
		const sink = collectErrors(page);
		const box = page.locator(singleListbox).first();
		const options = box.locator('[role="option"]');
		const count = await options.count();

		// Capture a stable index of the first currently-unselected option; a live aria-selected
		// filter would re-resolve once the click flips the attribute.
		let targetIdx = 0;
		for (let i = 0; i < count; i += 1) {
			if ((await options.nth(i).getAttribute('aria-selected')) === 'false') {
				targetIdx = i;
				break;
			}
		}
		const target = options.nth(targetIdx);
		await target.click();

		await expect(target).toHaveAttribute('aria-selected', 'true');
		await expect(box.locator('[role="option"][aria-selected="true"]')).toHaveCount(1);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('roving tabindex: exactly one option is in the page tab sequence', async ({ page }) => {
		const box = page.locator(singleListbox).first();
		await expect(box.locator('[role="option"][tabindex="0"]')).toHaveCount(1);
		// The anchored tab-stop is the pre-selected option.
		await expect(box.locator('[role="option"][tabindex="0"]')).toHaveAttribute('aria-selected', 'true');
	});

	test('ArrowDown / ArrowUp move focus between options', async ({ page }) => {
		const box = page.locator(singleListbox).first();
		const options = box.locator('[role="option"]');
		await options.first().focus();
		await expect(options.first()).toBeFocused();
		await page.keyboard.press('ArrowDown');
		await expect(options.nth(1)).toBeFocused();
		await page.keyboard.press('ArrowUp');
		await expect(options.first()).toBeFocused();
	});

	test('Home / End jump to the first / last option', async ({ page }) => {
		const box = page.locator(singleListbox).first();
		const options = box.locator('[role="option"]');
		const last = await options.count();
		await options.nth(1).focus();
		await page.keyboard.press('End');
		await expect(options.nth(last - 1)).toBeFocused();
		await page.keyboard.press('Home');
		await expect(options.first()).toBeFocused();
	});

	test('multiselect listbox toggles options independently (aria-multiselectable)', async ({ page }) => {
		const sink = collectErrors(page);
		const box = page.locator(multiListbox).first();
		await expect(box).toHaveAttribute('aria-multiselectable', 'true');
		const options = box.locator('[role="option"]');
		const count = await options.count();

		// Pick a stable unselected option by index, select it — selection count must grow, not replace.
		let addIdx = 0;
		for (let i = 0; i < count; i += 1) {
			if ((await options.nth(i).getAttribute('aria-selected')) === 'false') {
				addIdx = i;
				break;
			}
		}
		const before = await box.locator('[role="option"][aria-selected="true"]').count();
		const target = options.nth(addIdx);
		await target.click();
		await expect(target).toHaveAttribute('aria-selected', 'true');
		await expect(box.locator('[role="option"][aria-selected="true"]')).toHaveCount(before + 1);

		// Clicking it again toggles it back off.
		await target.click();
		await expect(target).toHaveAttribute('aria-selected', 'false');
		await expect(box.locator('[role="option"][aria-selected="true"]')).toHaveCount(before);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('interactive list rows render as buttons and clicking sets aria-current', async ({ page }) => {
		// The basic example is role=list: rows are <button> with active → aria-current="page".
		const body = page.locator('[data-testid="list"] .list__body').first();
		const rows = body.locator('[data-testid="list-item"]');
		await expect(rows.first()).toBeVisible();
		const tag = await rows.first().evaluate((el) => el.tagName.toLowerCase());
		expect(tag).toBe('button');

		// Capture a stable handle to a non-active row by text, then activate it.
		const second = rows.nth(1);
		await second.click();
		await expect(second).toHaveAttribute('aria-current', 'page');
		await expect(body.locator('[data-testid="list-item"][aria-current="page"]')).toHaveCount(1);
	});
});
