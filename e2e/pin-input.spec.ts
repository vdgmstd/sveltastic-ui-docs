import { test, expect, type Locator, type Page } from '@playwright/test';
import { collectErrors } from './_helpers';

// PinInput (bits-ui v2 parity) against /docs/pin-input.
//  root[0] basic (6 numeric)  · root[1] onComplete (4) · root[2] alphanumeric (5)
//  root[3] separated (custom cells) · root[4] invalid (starts 123456 → invalid).
const roots = (page: Page) => page.locator('[data-pin-input-root]');
const inputOf = (root: Locator) => root.locator('input');
const charsOf = (root: Locator) =>
	root.locator('[data-pin-input-cell]').evaluateAll((els) => els.map((e) => e.textContent?.trim() ?? ''));

test.describe('PinInput', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/pin-input', { waitUntil: 'networkidle' });
	});

	test('typing fills the cells; non-matching chars are filtered (numeric)', async ({ page }) => {
		const sink = collectErrors(page);
		const root = roots(page).nth(0);
		const input = inputOf(root);
		await input.focus();
		await page.keyboard.type('12a3');
		await expect(input).toHaveValue('123');
		expect((await charsOf(root)).slice(0, 3)).toEqual(['1', '2', '3']);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('backspace removes the last character', async ({ page }) => {
		const input = inputOf(roots(page).nth(0));
		await input.focus();
		await page.keyboard.type('123');
		await page.keyboard.press('Backspace');
		await expect(input).toHaveValue('12');
	});

	test('the active cell shows a fake caret at the next empty slot', async ({ page }) => {
		const root = roots(page).nth(0);
		await inputOf(root).focus();
		await page.keyboard.type('12');
		const active = root.locator('[data-pin-input-cell][data-active]');
		await expect(active).toHaveCount(1);
		await expect(active.locator('.pin-input__caret')).toHaveCount(1);
	});

	test('onComplete fires when every cell is filled', async ({ page }) => {
		const root = roots(page).nth(1); // maxLength 4
		await inputOf(root).focus();
		await page.keyboard.type('1234');
		await expect(inputOf(root)).toHaveValue('1234');
		await expect(page.locator('[data-pin-input-root] + .muted').nth(1)).toContainText('verified');
	});

	test('alphanumeric type allows letters + digits, drops symbols', async ({ page }) => {
		const input = inputOf(roots(page).nth(2));
		await input.focus();
		await page.keyboard.type('a1!b2');
		await expect(input).toHaveValue('a1b2');
	});

	test('invalid flags the cells via data-invalid until the value is corrected', async ({ page }) => {
		const root = roots(page).nth(4); // starts 123456 → invalid
		await expect(root).toHaveAttribute('data-invalid', '');
		await inputOf(root).evaluate((el: HTMLInputElement) => {
			el.value = '424242';
			el.dispatchEvent(new Event('input', { bubbles: true }));
		});
		await expect(root).not.toHaveAttribute('data-invalid', '');
	});

	test('paste fills from the clipboard payload, sanitized (Chromium)', async ({ page, browserName }) => {
		test.skip(browserName === 'firefox', 'ClipboardEvent.clipboardData is not constructable in Firefox');
		const root = roots(page).nth(0);
		const input = inputOf(root);
		await input.focus();
		await input.evaluate((el) => {
			const dt = new DataTransfer();
			dt.setData('text', '99-88-77');
			el.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
		});
		await expect(input).toHaveValue('998877');
	});
});
