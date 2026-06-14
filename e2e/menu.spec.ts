import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Menu behavioral parity — mirrors bits-ui v2's dropdown-menu tests (trigger ARIA,
// open/close, Escape + focus restore, roving arrow nav, Home/End, checkbox/radio
// item roles), adapted to the kit's doc page. Menu is built on the Popover primitive
// (role=menu); the trigger is delegated to Button.Root via the child snippet.
test.describe('Menu', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/menu', { waitUntil: 'networkidle' });
	});

	// The first example (BasicMenu) — its trigger is the only menu-anchor button labelled
	// "Open menu" (ManualMenu reuses that label on a plain non-anchor button).
	const basicTrigger = (page: import('@playwright/test').Page) =>
		page.locator('button[aria-haspopup="menu"]').filter({ hasText: 'Open menu' }).first();

	// The open popup the basic trigger controls (portalled to body); scoped by aria-controls.
	async function openBasicMenu(page: import('@playwright/test').Page) {
		const trigger = basicTrigger(page);
		await trigger.click();
		const menuId = await trigger.getAttribute('aria-controls');
		expect(menuId).toBeTruthy();
		const menu = page.locator(`#${menuId}[role="menu"]`);
		await expect(menu).toBeVisible();
		return { trigger, menu };
	}

	test('trigger exposes aria-haspopup=menu and aria-expanded flips false->true on open', async ({
		page
	}) => {
		const sink = collectErrors(page);
		const trigger = basicTrigger(page);
		await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toHaveAttribute('data-state', 'closed');

		await trigger.click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(trigger).toHaveAttribute('data-state', 'open');
		const menuId = await trigger.getAttribute('aria-controls');
		await expect(page.locator(`#${menuId}[role="menu"]`)).toBeVisible();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('clicking the trigger opens a role=menu with menuitem rows', async ({ page }) => {
		const sink = collectErrors(page);
		const { menu } = await openBasicMenu(page);
		await expect(menu).toHaveAttribute('aria-orientation', 'vertical');
		expect(await menu.getByRole('menuitem').count()).toBeGreaterThanOrEqual(4);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Escape closes the menu AND restores focus to the trigger', async ({ page }) => {
		const sink = collectErrors(page);
		const { trigger, menu } = await openBasicMenu(page);
		await page.keyboard.press('Escape');
		await expect(menu).toBeHidden();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toBeFocused();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowDown / ArrowUp move roving focus among menuitems', async ({ page }) => {
		const sink = collectErrors(page);
		const { trigger, menu } = await openBasicMenu(page);
		const items = menu.getByRole('menuitem');
		// Capture stable handles by label so state-flips don't re-resolve the locator.
		const first = items.nth(0);
		const second = items.nth(1);

		// Keyboard-driven open auto-focuses the first row; click-open does not — focus it.
		await first.focus();
		await expect(first).toBeFocused();
		await trigger.page().keyboard.press('ArrowDown');
		await expect(second).toBeFocused();
		await page.keyboard.press('ArrowUp');
		await expect(first).toBeFocused();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Home / End jump roving focus to the first and last menuitem', async ({ page }) => {
		const sink = collectErrors(page);
		const { menu } = await openBasicMenu(page);
		const items = menu.getByRole('menuitem');
		const count = await items.count();
		const first = items.nth(0);
		const last = items.nth(count - 1);

		await first.focus();
		await page.keyboard.press('End');
		await expect(last).toBeFocused();
		await page.keyboard.press('Home');
		await expect(first).toBeFocused();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('roving tabindex: exactly one menuitem is in the tab sequence at a time', async ({
		page
	}) => {
		const { menu } = await openBasicMenu(page);
		await expect(menu.locator('[role="menuitem"][tabindex="0"]')).toHaveCount(1);
		const inactive = menu.locator('[role="menuitem"][tabindex="-1"]');
		expect(await inactive.count()).toBeGreaterThan(0);
	});

	test('clicking a menuitem closes the menu', async ({ page }) => {
		const sink = collectErrors(page);
		const { trigger, menu } = await openBasicMenu(page);
		// Pick a stable item by its visible label, not a state-filtered locator.
		await menu.getByRole('menuitem', { name: 'Edit' }).click();
		await expect(menu).toBeHidden();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('CheckboxItem exposes role=menuitemcheckbox + aria-checked and toggles on click', async ({
		page
	}) => {
		const sink = collectErrors(page);
		// The CheckboxRadioMenu example — trigger text "View"; closeOnSelect=false keeps it open.
		const trigger = page.getByRole('button', { name: 'View' });
		await trigger.click();
		const menuId = await trigger.getAttribute('aria-controls');
		const menu = page.locator(`#${menuId}[role="menu"]`);
		await expect(menu).toBeVisible();

		const statusBar = menu.getByRole('menuitemcheckbox', { name: 'Status bar' });
		await expect(statusBar).toHaveAttribute('aria-checked', 'true');
		await statusBar.click();
		await expect(menu).toBeVisible();
		await expect(statusBar).toHaveAttribute('aria-checked', 'false');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('RadioItem exposes role=menuitemradio and single-selects within its group', async ({
		page
	}) => {
		const sink = collectErrors(page);
		const trigger = page.getByRole('button', { name: 'View' });
		await trigger.click();
		const menuId = await trigger.getAttribute('aria-controls');
		const menu = page.locator(`#${menuId}[role="menu"]`);
		await expect(menu).toBeVisible();

		const bottom = menu.getByRole('menuitemradio', { name: 'Bottom' });
		const top = menu.getByRole('menuitemradio', { name: 'Top' });
		await expect(bottom).toHaveAttribute('aria-checked', 'true');
		await top.click();
		await expect(top).toHaveAttribute('aria-checked', 'true');
		await expect(bottom).toHaveAttribute('aria-checked', 'false');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});
});
