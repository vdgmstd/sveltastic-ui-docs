import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Chip behavioral parity — toggle chips flip aria-pressed on click + keyboard, and an
// interactive chip is a single focusable button with no nested interactive descendant (M25).
test.describe('Chip', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/chip', { waitUntil: 'networkidle' });
	});

	test('toggle chip flips aria-pressed on click', async ({ page }) => {
		const sink = collectErrors(page);
		const chip = page.locator('.chip[aria-pressed]').first();
		const before = await chip.getAttribute('aria-pressed');
		await chip.click();
		await expect(chip).not.toHaveAttribute('aria-pressed', before!);
		await chip.click();
		await expect(chip).toHaveAttribute('aria-pressed', before!);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('toggle chip activates with the Space key', async ({ page }) => {
		const chip = page.locator('.chip[aria-pressed]').first();
		const before = await chip.getAttribute('aria-pressed');
		await chip.focus();
		await expect(chip).toBeFocused();
		await page.keyboard.press(' ');
		await expect(chip).not.toHaveAttribute('aria-pressed', before!);
	});

	test('interactive chip is a single tab stop with no nested interactive (M25)', async ({ page }) => {
		const chip = page.locator('.chip[role="button"]').first();
		await expect(chip).toHaveAttribute('tabindex', '0');
		const nestedInteractive = chip.locator('button, a[href], [role="button"], [tabindex="0"]');
		await expect(nestedInteractive).toHaveCount(0);
	});
});
