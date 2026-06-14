import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// BasicTooltip is the first instance on /docs/tooltip: trigger="hover", delay=0,
// a presentation wrapper [data-testid="tooltip-trigger"] around a real <button>.
test.describe('Tooltip', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/tooltip', { waitUntil: 'networkidle' });
	});

	test('shows on hover and hides on pointer-leave', async ({ page }) => {
		const sink = collectErrors(page);
		const trigger = page.getByTestId('tooltip-trigger').first();
		const bubble = page.getByRole('tooltip').first();

		await expect(bubble).toHaveCount(0);

		await trigger.hover();
		await expect(bubble).toBeVisible();

		// Move the pointer well away from both the trigger and the bubble.
		await page.mouse.move(0, 0);
		await expect(page.getByRole('tooltip')).toHaveCount(0);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('shows on keyboard focus of the trigger and hides on blur', async ({ page }) => {
		const trigger = page.getByTestId('tooltip-trigger').first();
		const button = trigger.locator('button').first();
		const bubble = page.getByRole('tooltip').first();

		await expect(bubble).toHaveCount(0);

		await button.focus();
		await expect(bubble).toBeVisible();

		await button.blur();
		await expect(page.getByRole('tooltip')).toHaveCount(0);
	});

	test('Escape hides the open tooltip', async ({ page }) => {
		const trigger = page.getByTestId('tooltip-trigger').first();
		const bubble = page.getByRole('tooltip').first();

		await trigger.hover();
		await expect(bubble).toBeVisible();

		await page.keyboard.press('Escape');
		await expect(page.getByRole('tooltip')).toHaveCount(0);
	});

	test('visible bubble has role=tooltip and data-state=open', async ({ page }) => {
		const trigger = page.getByTestId('tooltip-trigger').first();
		const bubble = page.getByRole('tooltip').first();

		await trigger.hover();
		await expect(bubble).toBeVisible();
		await expect(bubble).toHaveAttribute('data-state', 'open');
		await expect(bubble).toHaveAttribute('data-testid', 'tooltip');
	});

	test('open links the focusable trigger to the bubble via aria-describedby', async ({ page }) => {
		const trigger = page.getByTestId('tooltip-trigger').first();
		const button = trigger.locator('button').first();
		const bubble = page.getByRole('tooltip').first();

		// Closed: no describedby wiring.
		await expect(button).not.toHaveAttribute('aria-describedby', /.+/);

		await trigger.hover();
		await expect(bubble).toBeVisible();

		const bubbleId = await bubble.getAttribute('id');
		expect(bubbleId, 'bubble must carry an id to be referenced').toBeTruthy();
		await expect(button).toHaveAttribute('aria-describedby', bubbleId!);

		// Closing removes the link again.
		await page.mouse.move(0, 0);
		await expect(page.getByRole('tooltip')).toHaveCount(0);
		await expect(button).not.toHaveAttribute('aria-describedby', /.+/);
	});

	test('bubble joins the top layer via the popover API', async ({ page }) => {
		const trigger = page.getByTestId('tooltip-trigger').first();
		const bubble = page.getByRole('tooltip').first();

		await trigger.hover();
		await expect(bubble).toBeVisible();
		// position:fixed + manual popover so it paints above modal dialogs.
		await expect(bubble).toHaveAttribute('popover', 'manual');
	});

	test('click trigger toggles open and outside click closes', async ({ page }) => {
		// TriggersTooltip exposes a trigger="click" instance; scope by its button text.
		const trigger = page
			.getByTestId('tooltip-trigger')
			.filter({ has: page.getByRole('button', { name: 'Click', exact: true }) })
			.first();
		const bubble = page.getByRole('tooltip').first();

		await expect(bubble).toHaveCount(0);

		await trigger.click();
		await expect(bubble).toBeVisible();

		// Outside pointerdown dismisses the click tooltip.
		await page.mouse.click(2, 2);
		await expect(page.getByRole('tooltip')).toHaveCount(0);
	});
});
