import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// First root (Basic) is unbounded, step 1, value 3.
// The StepBounds section's first root is bounded min=0 max=10 value=5.
// The States section holds a disabled (value 2) then a readonly (value 7).

test.describe('InputNumber', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/input-number', { waitUntil: 'networkidle' });
	});

	test('field is a spinbutton exposing the committed value', async ({ page }) => {
		const field = page.locator('[data-testid="input-number"]').first().getByRole('spinbutton');
		await expect(field).toHaveAttribute('aria-valuenow', '3');
	});

	test('increment button raises the value by step', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('[data-testid="input-number"]').first();
		const field = root.getByRole('spinbutton');
		const inc = root.getByRole('button', { name: 'Increment' });
		await expect(field).toHaveAttribute('aria-valuenow', '3');
		await inc.click();
		await expect(field).toHaveAttribute('aria-valuenow', '4');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('decrement button lowers the value by step', async ({ page }) => {
		const root = page.locator('[data-testid="input-number"]').first();
		const field = root.getByRole('spinbutton');
		const dec = root.getByRole('button', { name: 'Decrement' });
		await expect(field).toHaveAttribute('aria-valuenow', '3');
		await dec.click();
		await expect(field).toHaveAttribute('aria-valuenow', '2');
	});

	test('ArrowUp / ArrowDown on the focused field step the value', async ({ page }) => {
		const field = page.locator('[data-testid="input-number"]').first().getByRole('spinbutton');
		await field.focus();
		await expect(field).toHaveAttribute('aria-valuenow', '3');
		await page.keyboard.press('ArrowUp');
		await expect(field).toHaveAttribute('aria-valuenow', '4');
		await page.keyboard.press('ArrowDown');
		await page.keyboard.press('ArrowDown');
		await expect(field).toHaveAttribute('aria-valuenow', '2');
	});

	test('max clamps the value and disables the increment button at the ceiling', async ({ page }) => {
		const sink = collectErrors(page);
		// Bounded root: min=0 max=10, starts at 5.
		const root = page
			.locator('[data-testid="input-number"]')
			.filter({ has: page.locator('[role="spinbutton"][aria-valuemax="10"]') })
			.first();
		const field = root.getByRole('spinbutton');
		const inc = root.getByRole('button', { name: 'Increment' });
		await expect(field).toHaveAttribute('aria-valuenow', '5');
		await field.focus();
		// PageUp adds 10*step (=10), which clamps to max 10.
		await page.keyboard.press('PageUp');
		await expect(field).toHaveAttribute('aria-valuenow', '10');
		await expect(inc).toBeDisabled();
		// Further increments are refused at the ceiling.
		await page.keyboard.press('ArrowUp');
		await expect(field).toHaveAttribute('aria-valuenow', '10');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('min clamps the value and disables the decrement button at the floor', async ({ page }) => {
		const root = page
			.locator('[data-testid="input-number"]')
			.filter({ has: page.locator('[role="spinbutton"][aria-valuemin="0"][aria-valuemax="10"]') })
			.first();
		const field = root.getByRole('spinbutton');
		const dec = root.getByRole('button', { name: 'Decrement' });
		await field.focus();
		await page.keyboard.press('Home');
		await expect(field).toHaveAttribute('aria-valuenow', '0');
		await expect(dec).toBeDisabled();
		await page.keyboard.press('ArrowDown');
		await expect(field).toHaveAttribute('aria-valuenow', '0');
	});

	test('disabled control is inert: field + steppers disabled, value preserved', async ({ page }) => {
		// Disabled root holds value 2.
		const root = page
			.locator('[data-testid="input-number"][data-disabled]')
			.first();
		const field = root.getByRole('spinbutton');
		const inc = root.getByRole('button', { name: 'Increment' });
		const dec = root.getByRole('button', { name: 'Decrement' });
		await expect(field).toBeDisabled();
		await expect(inc).toBeDisabled();
		await expect(dec).toBeDisabled();
		await expect(field).toHaveAttribute('aria-valuenow', '2');
	});
});
