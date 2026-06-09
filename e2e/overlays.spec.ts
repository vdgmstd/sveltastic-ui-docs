import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Dialog lifecycle must work in every engine: open, Escape closes, focus returns to trigger.
test('dialog opens, Escape closes, focus restores', async ({ page }) => {
	const sink = collectErrors(page);
	await page.goto('/docs/dialog', { waitUntil: 'networkidle' });

	const trigger = page.getByRole('button', { name: 'Open dialog' }).first();
	await trigger.click();

	const dialog = page.locator('dialog[open]');
	await expect(dialog).toBeVisible();

	await page.keyboard.press('Escape');
	await expect(dialog).toHaveCount(0);
	await expect(trigger).toBeFocused();

	expect(sink.errors, sink.errors.join('\n')).toEqual([]);
});

// TimeWheel must be scroll-centered on its value in every engine — Firefox dropped a one-shot
// scrollTop set while hidden, leaving the wheel pinned at 0 (blank above the digits).
test('time wheel centers on its value (Firefox scroll regression)', async ({ page }) => {
	await page.goto('/docs/datetime-picker', { waitUntil: 'networkidle' });

	const field = page.getByTestId('datetime-picker').first();
	await field.click();

	const wheel = page.locator('[data-testid="time-wheel"]').first();
	await expect(wheel).toBeVisible();

	const scrollTop = await wheel
		.locator('.time-wheel__scroll')
		.first()
		.evaluate((el) => el.scrollTop);
	expect(scrollTop, 'wheel should be centered on its value, not pinned at top').toBeGreaterThan(0);

	await page.keyboard.press('Escape');
});
