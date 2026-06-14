import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Input behavioral parity — the compound Input.Root/Control/Field surfaces a native
// <input>: typing drives the bound value + data-state focus hook, disabled is inert and
// unfocusable, readonly blocks edits but stays focusable, a danger fieldState exposes
// aria-invalid, the mask formats as you type, and the password reveal flips the type.
test.describe('Input', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/input', { waitUntil: 'networkidle' });
	});

	test('typing into the field updates its value and the root focus state', async ({ page }) => {
		const sink = collectErrors(page);
		// BasicInput renders editable / disabled / readonly as the first three roots.
		const root = page.locator('[data-testid="input"]').first();
		const field = root.locator('input.input__el');

		await expect(field).toHaveValue('');
		await field.click();
		await expect(field).toBeFocused();
		await expect(root).toHaveAttribute('data-state', 'focused');
		await expect(field).toHaveAttribute('data-state', 'focused');

		await field.pressSequentially('hello');
		await expect(field).toHaveValue('hello');

		// Blurring clears the focused hook.
		await page.locator('body').click({ position: { x: 1, y: 1 } });
		await expect(root).not.toHaveAttribute('data-state', 'focused');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a disabled input is inert: native disabled, not editable, not focusable', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('[data-testid="input"][data-disabled]').first();
		const field = root.locator('input.input__el');

		await expect(field).toBeDisabled();
		await expect(field).toHaveValue('');

		// A disabled control cannot take focus; force the click past pointer guards.
		await field.click({ force: true });
		await expect(field).not.toBeFocused();

		// Programmatic fill is rejected by the disabled attribute.
		await field.fill('nope', { force: true }).catch(() => {});
		await expect(field).toHaveValue('');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a readonly input blocks edits but stays focusable', async ({ page }) => {
		const root = page.locator('[data-testid="input"][data-readonly]').first();
		const field = root.locator('input.input__el');

		await expect(field).toHaveAttribute('readonly', '');
		await expect(field).toHaveValue('Read only');

		// Readonly fields still accept focus.
		await field.focus();
		await expect(field).toBeFocused();

		// But keystrokes do not mutate the value.
		await field.pressSequentially('xyz');
		await expect(field).toHaveValue('Read only');
	});

	test('a danger fieldState marks the native input aria-invalid', async ({ page }) => {
		const root = page.locator('[data-testid="input"][data-field-state="danger"]').first();
		await expect(root).toHaveCount(1);
		const field = root.locator('input.input__el');
		await expect(field).toHaveAttribute('aria-invalid', 'true');
	});

	test('a default (non-danger) input is not aria-invalid', async ({ page }) => {
		const field = page.locator('[data-testid="input"]').first().locator('input.input__el');
		await expect(field).not.toHaveAttribute('aria-invalid', 'true');
	});

	test('the mask formats the value as digits are typed', async ({ page }) => {
		const sink = collectErrors(page);
		// MaskInput's phone field uses the +# (###) ###-#### template.
		const root = page.locator('[data-testid="input"]', { hasText: 'Phone' }).first();
		const field = root.locator('input.input__el');

		await field.click();
		await field.pressSequentially('15551234567');
		await expect(field).toHaveValue('+1 (555) 123-4567');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('the password reveal toggles the input between hidden and visible', async ({ page }) => {
		const sink = collectErrors(page);
		// PasswordInput is the first (and only single) root carrying a reveal button.
		const root = page.locator('[data-testid="input"]').filter({ has: page.locator('.input__reveal') }).first();
		const field = root.locator('input.input__el');
		const reveal = root.locator('.input__reveal');

		await field.fill('s3cr3t');
		await expect(field).toHaveAttribute('type', 'password');

		await reveal.click();
		await expect(field).toHaveAttribute('type', 'text');
		await expect(field).toHaveValue('s3cr3t');

		await reveal.click();
		await expect(field).toHaveAttribute('type', 'password');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('the field is wired to its label via for/id', async ({ page }) => {
		// LabelInput renders an Input.Label associated with the field by for=id.
		const label = page.locator('label.input__label, label.input__label-block').first();
		const forId = await label.getAttribute('for');
		expect(forId).toBeTruthy();
		const field = page.locator(`input#${forId}`);
		await expect(field).toHaveClass(/input__el/);
	});
});
