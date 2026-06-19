import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// RatingGroup (bits-ui v2 parity) against /docs/rating-group.
//  BasicRating    — name "Rate this"; value 3, max 5.
//  HalfRating     — name "Rate with halves"; allowHalf, value 3.5.
//  ReadonlyRating — name "Average rating"; readonly, value 4.5.
//  CustomRating   — name "Favorite level"; hearts, value 2.

test.describe('RatingGroup', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/rating-group', { waitUntil: 'networkidle' });
	});

	test('the root is a slider with the value ARIA contract', async ({ page }) => {
		const sink = collectErrors(page);
		const slider = page.getByRole('slider', { name: 'Rate this' });
		await expect(slider).toHaveAttribute('aria-valuemin', '0');
		await expect(slider).toHaveAttribute('aria-valuemax', '5');
		await expect(slider).toHaveAttribute('aria-valuenow', '3');
		await expect(slider).toHaveAttribute('aria-valuetext', '3 out of 5');
		await expect(slider.locator('[data-rating-group-item]')).toHaveCount(5);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('clicking a star sets the value', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Rate this' });
		await slider.locator('[data-value="5"]').click();
		await expect(slider).toHaveAttribute('aria-valuenow', '5');
		await slider.locator('[data-value="2"]').click();
		await expect(slider).toHaveAttribute('aria-valuenow', '2');
	});

	test('keyboard: arrows step, Home/End jump to the bounds', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Rate this' });
		await slider.focus();
		await page.keyboard.press('ArrowRight');
		await expect(slider).toHaveAttribute('aria-valuenow', '4');
		await page.keyboard.press('ArrowLeft');
		await expect(slider).toHaveAttribute('aria-valuenow', '3');
		await page.keyboard.press('End');
		await expect(slider).toHaveAttribute('aria-valuenow', '5');
		await page.keyboard.press('Home');
		await expect(slider).toHaveAttribute('aria-valuenow', '0');
	});

	test('allowHalf steps by 0.5 from the keyboard', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Rate with halves' });
		await expect(slider).toHaveAttribute('aria-valuenow', '3.5');
		await slider.focus();
		await page.keyboard.press('ArrowRight');
		await expect(slider).toHaveAttribute('aria-valuenow', '4');
		await page.keyboard.press('ArrowLeft');
		await expect(slider).toHaveAttribute('aria-valuenow', '3.5');
	});

	test('readonly does not accept input', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Average rating' });
		await expect(slider).toHaveAttribute('aria-readonly', 'true');
		await expect(slider).toHaveAttribute('aria-valuenow', '4.5');
		await slider.locator('[data-value="2"]').click();
		await expect(slider).toHaveAttribute('aria-valuenow', '4.5');
		await slider.focus();
		await page.keyboard.press('Home');
		await expect(slider).toHaveAttribute('aria-valuenow', '4.5');
	});

	test('item fill state is published via data-state', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Rate this' });
		// value 3 → items 1-3 full, 4-5 empty
		await expect(slider.locator('[data-value="3"]')).toHaveAttribute('data-state', 'full');
		await expect(slider.locator('[data-value="4"]')).toHaveAttribute('data-state', 'empty');
	});

	test('custom icons render and remain interactive', async ({ page }) => {
		const slider = page.getByRole('slider', { name: 'Favorite level' });
		await expect(slider.locator('svg')).toHaveCount(5);
		await slider.locator('[data-value="4"]').click();
		await expect(slider).toHaveAttribute('aria-valuenow', '4');
	});
});
