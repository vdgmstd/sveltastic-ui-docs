import { test, expect, type Locator, type Page } from '@playwright/test';
import { collectErrors } from './_helpers';

// Toggle + ToggleGroup (bits-ui v2 parity) against /docs/toggle.
//  Basic toggle  — [data-toggle-root], the "Bold" button (starts off).
//  group[0]      — single-select alignment (left/center/right, icon-only).
//  group[1]      — multiple-select B/I/U (bold on initially).
//  group[2]      — vertical single-select (list/grid/board).
const groups = (page: Page) => page.locator('[data-toggle-group-root]');
const items = (group: Locator) => group.locator('[data-toggle-group-item]');
const states = async (group: Locator): Promise<string[]> =>
	items(group).evaluateAll((els) => els.map((e) => `${e.getAttribute('data-value')}:${e.getAttribute('data-state')}`));

test.describe('Toggle', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/toggle', { waitUntil: 'networkidle' });
	});

	test('a standalone toggle flips pressed on click (aria-pressed + data-state)', async ({ page }) => {
		const sink = collectErrors(page);
		const toggle = page.locator('[data-toggle-root]').first();
		await expect(toggle).toHaveAttribute('aria-pressed', 'false');
		await expect(toggle).toHaveAttribute('data-state', 'off');

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-pressed', 'true');
		await expect(toggle).toHaveAttribute('data-state', 'on');

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-pressed', 'false');
		await expect(toggle).toHaveAttribute('data-state', 'off');

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a standalone toggle activates with the keyboard (Enter / Space)', async ({ page }) => {
		const toggle = page.locator('[data-toggle-root]').first();
		await toggle.focus();
		await page.keyboard.press('Enter');
		await expect(toggle).toHaveAttribute('data-state', 'on');
		await page.keyboard.press(' ');
		await expect(toggle).toHaveAttribute('data-state', 'off');
	});

	test('single group: selecting one item, and toggling the active item off (allows none)', async ({ page }) => {
		const group = groups(page).nth(0);
		const it = items(group);
		await it.nth(1).click();
		expect(await states(group)).toEqual(['left:off', 'center:on', 'right:off']);
		// click the active item again → deselects (ToggleGroup single, unlike a radiogroup)
		await it.nth(1).click();
		expect(await states(group)).toEqual(['left:off', 'center:off', 'right:off']);
	});

	test('single group: only one item on at a time', async ({ page }) => {
		const group = groups(page).nth(0);
		const it = items(group);
		await it.nth(1).click();
		expect(await states(group)).toEqual(['left:off', 'center:on', 'right:off']);
		await it.nth(2).click();
		expect(await states(group)).toEqual(['left:off', 'center:off', 'right:on']);
	});

	test('single group items expose role=button + aria-pressed', async ({ page }) => {
		const first = items(groups(page).nth(0)).first();
		await expect(first).toHaveJSProperty('tagName', 'BUTTON');
		await expect(first).toHaveAttribute('aria-pressed', /true|false/);
	});

	test('multiple group: items toggle independently into a set', async ({ page }) => {
		const group = groups(page).nth(1);
		const it = items(group);
		expect(await states(group)).toEqual(['bold:on', 'italic:off', 'underline:off']);
		await it.nth(1).click();
		expect(await states(group)).toEqual(['bold:on', 'italic:on', 'underline:off']);
		await it.nth(0).click();
		expect(await states(group)).toEqual(['bold:off', 'italic:on', 'underline:off']);
	});

	test('roving tabindex: one tab-stop, arrows move focus, Home/End jump', async ({ page }) => {
		const group = groups(page).nth(0);
		const it = items(group);
		const tabindexes = await it.evaluateAll((els) => els.map((e) => e.getAttribute('tabindex')));
		expect(tabindexes.filter((t) => t === '0')).toHaveLength(1);

		await it.nth(0).focus();
		await page.keyboard.press('ArrowRight');
		await expect(it.nth(1)).toBeFocused();
		await page.keyboard.press('ArrowLeft');
		await expect(it.nth(0)).toBeFocused();
		await page.keyboard.press('End');
		await expect(it.nth(2)).toBeFocused();
		await page.keyboard.press('Home');
		await expect(it.nth(0)).toBeFocused();
	});

	test('vertical group: data-orientation + Up/Down arrow navigation', async ({ page }) => {
		const group = groups(page).nth(2);
		await expect(group).toHaveAttribute('data-orientation', 'vertical');
		const it = items(group);
		await it.nth(0).focus();
		await page.keyboard.press('ArrowDown');
		await expect(it.nth(1)).toBeFocused();
		await page.keyboard.press('ArrowUp');
		await expect(it.nth(0)).toBeFocused();
	});
});
