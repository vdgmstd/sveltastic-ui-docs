import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Tabs behavioral parity — mirrors bits-ui v2's tabs tests (roving focus, selection,
// keyboard map, tab↔panel ARIA cross-link), adapted to the kit's doc page.
test.describe('Tabs', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/tabs', { waitUntil: 'networkidle' });
	});

	test('roving tabindex: exactly one tab is in the page tab sequence', async ({ page }) => {
		const list = page.locator('[role="tablist"]').first();
		await expect(list.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);
		const inactive = list.locator('[role="tab"][tabindex="-1"]');
		expect(await inactive.count()).toBeGreaterThan(0);
	});

	test('click selects a tab and reveals its panel', async ({ page }) => {
		const sink = collectErrors(page);
		const list = page.locator('[role="tablist"]').first();
		const tabs = list.locator('[role="tab"]');
		const second = tabs.nth(1);
		await second.click();
		await expect(second).toHaveAttribute('aria-selected', 'true');
		await expect(second).toHaveAttribute('data-state', 'active');
		const panelId = await second.getAttribute('aria-controls');
		await expect(page.locator(`#${panelId}[role="tabpanel"]`)).toBeVisible();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowRight / ArrowLeft move focus between tabs', async ({ page }) => {
		const tabs = page.locator('[role="tablist"]').first().locator('[role="tab"]');
		await tabs.first().focus();
		await page.keyboard.press('ArrowRight');
		await expect(tabs.nth(1)).toBeFocused();
		await page.keyboard.press('ArrowLeft');
		await expect(tabs.first()).toBeFocused();
	});

	test('Home / End jump to the first and last tab', async ({ page }) => {
		const tabs = page.locator('[role="tablist"]').first().locator('[role="tab"]');
		const last = (await tabs.count()) - 1;
		await tabs.first().focus();
		await page.keyboard.press('End');
		await expect(tabs.nth(last)).toBeFocused();
		await page.keyboard.press('Home');
		await expect(tabs.first()).toBeFocused();
	});

	test('tab ↔ panel ARIA cross-link is wired both ways', async ({ page }) => {
		const tab = page.locator('[role="tablist"]').first().locator('[role="tab"]').first();
		const tabId = await tab.getAttribute('id');
		const panelId = await tab.getAttribute('aria-controls');
		expect(tabId).toBeTruthy();
		expect(panelId).toBeTruthy();
		const panel = page.locator(`#${panelId}`);
		await expect(panel).toHaveAttribute('role', 'tabpanel');
		await expect(panel).toHaveAttribute('aria-labelledby', tabId!);
	});
});
