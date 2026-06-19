import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Popover (public component over the shared floating engine) against /docs/popover.
//  BasicPopover      — trigger "Open popover"; content "Dimensions" + Close "Done".
//  ControlledPopover — external "Open externally" + trigger "Trigger"; content "Bound to".
//  FormPopover       — trigger "Edit profile"; focus-trap form (input + Cancel/Save).
//  HoverPopover      — trigger "@sveltastic"; opens on hover; content "Sveltastic UI".

test.describe('Popover', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/popover', { waitUntil: 'networkidle' });
	});

	test('the trigger carries the dialog ARIA contract and toggles state', async ({ page }) => {
		const sink = collectErrors(page);
		const trigger = page.getByRole('button', { name: 'Open popover' });
		await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toHaveAttribute('data-state', 'closed');
		await trigger.click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		const panel = page.locator('[role="dialog"]');
		await expect(panel).toBeVisible();
		await expect(trigger).toHaveAttribute('aria-controls', (await panel.getAttribute('id'))!);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('clicking the trigger opens a panel with content', async ({ page }) => {
		await page.getByRole('button', { name: 'Open popover' }).click();
		const panel = page.locator('[role="dialog"]');
		await expect(panel).toBeVisible();
		await expect(panel.getByText('Dimensions')).toBeVisible();
		await expect(panel.locator('[data-popover-content]')).toHaveAttribute('data-state', 'open');
	});

	test('Popover.Close dismisses the panel', async ({ page }) => {
		await page.getByRole('button', { name: 'Open popover' }).click();
		await expect(page.locator('[role="dialog"]')).toBeVisible();
		await page.locator('[data-popover-close]').click();
		await expect(page.locator('[role="dialog"]')).toHaveCount(0);
	});

	test('Escape closes the panel and restores focus to the trigger', async ({ page }) => {
		const trigger = page.getByRole('button', { name: 'Open popover' });
		await trigger.click();
		await expect(page.locator('[role="dialog"]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator('[role="dialog"]')).toHaveCount(0);
		await expect(trigger).toBeFocused();
	});

	test('an outside click closes the panel', async ({ page }) => {
		await page.getByRole('button', { name: 'Open popover' }).click();
		await expect(page.locator('[role="dialog"]')).toBeVisible();
		await page.locator('h2').first().click({ position: { x: 5, y: 5 } });
		await expect(page.locator('[role="dialog"]')).toHaveCount(0);
	});

	test('controlled: an external button drives open and the trigger reflects it', async ({ page }) => {
		const ext = page.getByRole('button', { name: 'Open externally' });
		const trigger = page.getByRole('button', { name: 'Trigger' });
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await ext.click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(page.locator('[role="dialog"]').getByText('Bound to')).toBeVisible();
		await page.getByRole('button', { name: 'Close externally' }).click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	test('keyboard-opening a dialog popover moves focus into the panel (focus trap)', async ({
		page
	}) => {
		const trigger = page.getByRole('button', { name: 'Edit profile' });
		await trigger.focus();
		await page.keyboard.press('Enter');
		const panel = page.locator('[role="dialog"]');
		await expect(panel).toBeVisible();
		// modality gate: keyboard-driven open auto-focuses the first focusable inside the panel
		await expect(panel.locator(':focus')).toHaveCount(1);
	});

	test('hover trigger opens a non-modal hover card', async ({ page }) => {
		await page.getByRole('button', { name: '@sveltastic' }).hover();
		await expect(page.locator('[role="dialog"]').getByText('Sveltastic UI')).toBeVisible();
	});
});
