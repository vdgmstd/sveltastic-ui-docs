import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// The focusable element is the native range input (.slider__input) which implicitly
// carries role=slider and exposes aria-valuemin/max/now via its min/max/value.
const FIRST = '.slider';

test.describe('Slider', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/slider', { waitUntil: 'networkidle' });
	});

	test('thumb is a native range input exposing the slider ARIA value contract', async ({ page }) => {
		const input = page.locator(`${FIRST} input.slider__input`).first();
		await expect(input).toHaveAttribute('type', 'range');
		await expect(input).toHaveAttribute('min', '0');
		await expect(input).toHaveAttribute('max', '100');
		// BasicSlider mounts value=40; the range input reports valuenow via its value.
		await expect(input).toHaveJSProperty('value', '40');
		// Browser maps a range input to role=slider with computed valuemin/max/now.
		await expect(input).toHaveRole('slider');
	});

	test('ArrowRight / ArrowUp increase the value by one step', async ({ page }) => {
		const sink = collectErrors(page);
		const input = page.locator(`${FIRST} input.slider__input`).first();
		await input.focus();
		const before = await input.inputValue();
		await page.keyboard.press('ArrowRight');
		await expect(input).toHaveJSProperty('value', String(Number(before) + 1));
		await page.keyboard.press('ArrowUp');
		await expect(input).toHaveJSProperty('value', String(Number(before) + 2));
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowLeft / ArrowDown decrease the value by one step', async ({ page }) => {
		const input = page.locator(`${FIRST} input.slider__input`).first();
		await input.focus();
		const before = await input.inputValue();
		await page.keyboard.press('ArrowLeft');
		await expect(input).toHaveJSProperty('value', String(Number(before) - 1));
		await page.keyboard.press('ArrowDown');
		await expect(input).toHaveJSProperty('value', String(Number(before) - 2));
	});

	test('Home jumps to min, End jumps to max', async ({ page }) => {
		const input = page.locator(`${FIRST} input.slider__input`).first();
		await input.focus();
		await page.keyboard.press('Home');
		await expect(input).toHaveJSProperty('value', '0');
		await page.keyboard.press('End');
		await expect(input).toHaveJSProperty('value', '100');
	});

	test('keyboard change syncs the bound value display', async ({ page }) => {
		const root = page.locator(FIRST).first();
		const input = root.locator('input.slider__input').first();
		// BasicSlider renders "Value: 40" next to it; the demo binds value.
		const display = page.locator('p.muted').first();
		await expect(display).toHaveText('Value: 40');
		await input.focus();
		await page.keyboard.press('Home');
		await expect(display).toHaveText('Value: 0');
		await page.keyboard.press('End');
		await expect(display).toHaveText('Value: 100');
	});

	test('a disabled slider is non-interactive (input disabled + not focusable)', async ({ page }) => {
		// StatesSlider mounts a disabled single slider at value=40.
		const disabled = page.locator('.slider[data-disabled]').first();
		await expect(disabled).toHaveCount(1);
		const input = disabled.locator('input.slider__input').first();
		await expect(input).toBeDisabled();
		// A disabled range input is out of the tab order and cannot take focus — falsifiable:
		// drop `disabled` and the focus lands + toBeDisabled fails.
		await input.focus().catch(() => {});
		await expect(input).not.toBeFocused();
	});

	test('range mode renders two independent thumbs; each moves on its own keys', async ({ page }) => {
		// First data-range instance mounts type=multiple value=[20,70] with two range inputs.
		const range = page.locator('.slider[data-range]').first();
		const inputs = range.locator('input.slider__input');
		await expect(inputs).toHaveCount(2);
		const low = inputs.nth(0);
		const high = inputs.nth(1);
		await expect(low).toHaveJSProperty('value', '20');
		await expect(high).toHaveJSProperty('value', '70');

		const step = Number(await low.getAttribute('step'));
		const highBefore = await high.inputValue();
		await low.focus();
		await page.keyboard.press('ArrowRight');
		await expect(low).toHaveJSProperty('value', String(20 + step));
		// the high thumb is untouched by the low thumb's key
		await expect(high).toHaveJSProperty('value', highBefore);
	});
});
