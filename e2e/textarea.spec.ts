import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Textarea behavioral parity — the compound Textarea.Root/Control/Field surfaces a native
// multi-line <textarea>: typing drives the bound value + data-state focus hook on both the
// root and the field, blur clears it, a danger fieldState marks the field aria-invalid, the
// label is wired to the field via for/id, and autoGrow expands the rendered height as lines
// are added. (No disabled / readonly instance is rendered on the doc page — see blockers.)
test.describe('Textarea', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/textarea', { waitUntil: 'networkidle' });
	});

	test('typing into the field updates its value and the root + field focus state', async ({ page }) => {
		const sink = collectErrors(page);
		// BasicTextarea is the first editable root on the page.
		const root = page.locator('[data-testid="textarea"]').first();
		const field = root.locator('textarea.textarea__field');

		await expect(field).toHaveValue('');
		await field.click();
		await expect(field).toBeFocused();
		await expect(root).toHaveAttribute('data-state', 'focused');
		await expect(field).toHaveAttribute('data-state', 'focused');

		await field.pressSequentially('hello there');
		await expect(field).toHaveValue('hello there');

		// Blurring clears the focused hook off the root.
		await page.locator('body').click({ position: { x: 1, y: 1 } });
		await expect(root).not.toHaveAttribute('data-state', 'focused');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Enter inserts a newline (multi-line) rather than submitting', async ({ page }) => {
		const sink = collectErrors(page);
		const field = page.locator('[data-testid="textarea"]').first().locator('textarea.textarea__field');

		await field.click();
		await field.pressSequentially('line one');
		await page.keyboard.press('Enter');
		await field.pressSequentially('line two');

		await expect(field).toHaveValue('line one\nline two');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a danger fieldState marks the native textarea aria-invalid', async ({ page }) => {
		const root = page.locator('[data-testid="textarea"][data-field-state="danger"]').first();
		await expect(root).toHaveCount(1);
		const field = root.locator('textarea.textarea__field');
		await expect(field).toHaveAttribute('aria-invalid', 'true');
	});

	test('a default (non-danger) textarea is not aria-invalid', async ({ page }) => {
		const field = page.locator('[data-testid="textarea"]').first().locator('textarea.textarea__field');
		await expect(field).not.toHaveAttribute('aria-invalid', 'true');
	});

	test('the field is wired to its visible label via for/id', async ({ page }) => {
		// LabelTextarea's default labelStyle renders a Textarea.Label bound by for=id.
		const label = page.locator('label.textarea__label--label, label.textarea__label-block').first();
		const forId = await label.getAttribute('for');
		expect(forId).toBeTruthy();
		const field = page.locator(`textarea#${forId}`);
		await expect(field).toHaveClass(/textarea__field/);
	});

	test('autoGrow expands the rendered height as newlines are added', async ({ page }) => {
		const sink = collectErrors(page);
		// AutoGrowTextarea is the sole textarea--autogrow root on the page.
		const root = page.locator('[data-testid="textarea"].textarea--autogrow').first();
		await expect(root).toHaveCount(1);
		const field = root.locator('textarea.textarea__field');

		const before = await field.evaluate((el) => (el as HTMLTextAreaElement).clientHeight);

		await field.click();
		// Six lines force the scrollHeight (hence the autogrown height) well past one row.
		for (let i = 0; i < 6; i++) {
			await field.pressSequentially(`row ${i}`);
			if (i < 5) await page.keyboard.press('Enter');
		}

		// The grow() effect sets height = scrollHeight; poll until clientHeight overtakes baseline.
		await expect
			.poll(async () => field.evaluate((el) => (el as HTMLTextAreaElement).clientHeight))
			.toBeGreaterThan(before);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('focusing the control wrapper toggles the root focus hook (focus ripple surface)', async ({ page }) => {
		const root = page.locator('[data-testid="textarea"]').first();
		const field = root.locator('textarea.textarea__field');

		await expect(root).not.toHaveAttribute('data-state', 'focused');
		await field.focus();
		await expect(root).toHaveAttribute('data-state', 'focused');
		await field.blur();
		await expect(root).not.toHaveAttribute('data-state', 'focused');
	});
});
