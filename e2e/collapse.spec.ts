import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Collapse behavioral parity — mirrors bits-ui v2's accordion/collapsible tests:
// trigger aria-expanded toggle + aria-controls cross-link, click + Enter + Space disclosure,
// the controlled region appears/disappears, and single-open group collapses the prior item.
test.describe('Collapse', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/collapse', { waitUntil: 'networkidle' });
	});

	// A closed standalone trigger captured by its visible title (stable across the toggle it drives).
	const closedTrigger = (page: import('@playwright/test').Page) =>
		page.locator('button.collapse__header', { hasText: 'Flat' }).first();

	test('trigger exposes aria-expanded and aria-controls a region by matching id', async ({ page }) => {
		const trigger = closedTrigger(page);
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		const controls = await trigger.getAttribute('aria-controls');
		expect(controls).toBeTruthy();
		// aria-controls points at the region whose aria-labelledby points back at the trigger.
		const triggerId = await trigger.getAttribute('id');
		expect(triggerId).toBeTruthy();
		await trigger.click();
		const region = page.locator(`#${controls}`);
		await expect(region).toHaveAttribute('role', 'region');
		await expect(region).toHaveAttribute('aria-labelledby', triggerId!);
	});

	test('click toggles aria-expanded false -> true -> false and the region visibility', async ({ page }) => {
		const sink = collectErrors(page);
		const trigger = closedTrigger(page);
		const controls = await trigger.getAttribute('aria-controls');

		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(page.locator(`#${controls}`)).toHaveCount(0);

		await trigger.click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(trigger).toHaveAttribute('data-state', 'open');
		await expect(page.locator(`#${controls}`)).toBeVisible();

		await trigger.click();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toHaveAttribute('data-state', 'closed');
		// region unmounts after the close transition settles
		await expect(page.locator(`#${controls}`)).toHaveCount(0);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Enter on the focused trigger toggles the region', async ({ page }) => {
		const trigger = closedTrigger(page);
		const controls = await trigger.getAttribute('aria-controls');
		await trigger.focus();
		await page.keyboard.press('Enter');
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(page.locator(`#${controls}`)).toBeVisible();
		await page.keyboard.press('Enter');
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	test('Space on the focused trigger toggles the region', async ({ page }) => {
		const trigger = closedTrigger(page);
		const controls = await trigger.getAttribute('aria-controls');
		await trigger.focus();
		await page.keyboard.press('Space');
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(page.locator(`#${controls}`)).toBeVisible();
		await page.keyboard.press('Space');
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	test('disabled trigger is non-interactive (button disabled + not focusable, region closed)', async ({ page }) => {
		// The States example ships an always-disabled item titled "Always disabled flat".
		const trigger = page
			.locator('button.collapse__header', { hasText: 'Always disabled flat' })
			.first();
		await expect(trigger).toBeDisabled();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toHaveAttribute('data-state', 'closed');
		const controls = await trigger.getAttribute('aria-controls');
		if (controls) await expect(page.locator(`#${controls}`)).toHaveCount(0);
		// A native disabled button is out of the tab order — falsifiable: drop `disabled` and focus lands.
		await trigger.focus().catch(() => {});
		await expect(trigger).not.toBeFocused();
	});

	test('single-open group: opening one item collapses the previously-open item', async ({ page }) => {
		const sink = collectErrors(page);
		// The GroupSingle example is an accordion starting with "What is sveltastic-ui?" open.
		const openTrigger = page
			.locator('button.collapse__header', { hasText: 'What is sveltastic-ui?' })
			.first();
		const otherTrigger = page
			.locator('button.collapse__header', { hasText: 'How do I sign in?' })
			.first();

		await expect(openTrigger).toHaveAttribute('aria-expanded', 'true');
		await expect(otherTrigger).toHaveAttribute('aria-expanded', 'false');

		await otherTrigger.click();
		await expect(otherTrigger).toHaveAttribute('aria-expanded', 'true');
		// the previously-open sibling is now collapsed (single-open contract)
		await expect(openTrigger).toHaveAttribute('aria-expanded', 'false');

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('group: ArrowDown / ArrowUp rove focus between item triggers (vertical orientation)', async ({ page }) => {
		const triggers = page
			.locator('[data-testid="collapse-group"]')
			.first()
			.locator('button.collapse__header');
		await expect(triggers.first()).toBeVisible();
		await triggers.first().focus();
		await page.keyboard.press('ArrowDown');
		await expect(triggers.nth(1)).toBeFocused();
		await page.keyboard.press('ArrowUp');
		await expect(triggers.first()).toBeFocused();
	});
});
