import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

const txt = (name: string) => ({ name, mimeType: 'text/plain', buffer: Buffer.from('hi') });
const png = (name: string) => ({
	name,
	mimeType: 'image/png',
	// 1x1 transparent PNG.
	buffer: Buffer.from(
		'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
		'base64'
	)
});

test.describe('Upload', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/upload', { waitUntil: 'networkidle' });
	});

	test('selecting a file adds a row to the list by name and flips data-has-files', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('.upload--field').first();
		// boolAttr: absent when no files, empty-string when present.
		await expect(root).not.toHaveAttribute('data-has-files');

		await root.locator('input[type="file"]').setInputFiles(txt('alpha.txt'));

		const item = root.locator('.upload__item', { hasText: 'alpha.txt' });
		await expect(item).toHaveCount(1);
		await expect(item.locator('.upload__item-name')).toHaveText('alpha.txt');
		await expect(root).toHaveAttribute('data-has-files', '');

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('per-file remove control removes only that file', async ({ page }) => {
		const sink = collectErrors(page);
		// The multiple + clearable instance accumulates files.
		const root = page.locator('.upload--field[data-clearable]').first();
		const input = root.locator('input[type="file"]');
		await expect(input).toHaveAttribute('multiple', '');

		await input.setInputFiles([txt('one.txt'), txt('two.txt')]);

		await expect(root.locator('.upload__item', { hasText: 'one.txt' })).toHaveCount(1);
		await expect(root.locator('.upload__item', { hasText: 'two.txt' })).toHaveCount(1);

		// Stable handle by visible name — a state-filtered locator would re-resolve.
		const removeOne = root.locator('.upload__item', { hasText: 'one.txt' }).locator('.upload__item-remove');
		await expect(removeOne).toHaveAttribute('aria-label', 'Remove one.txt');
		await removeOne.click();

		await expect(root.locator('.upload__item', { hasText: 'one.txt' })).toHaveCount(0);
		await expect(root.locator('.upload__item', { hasText: 'two.txt' })).toHaveCount(1);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('clear-all empties the list and hides itself', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('.upload--field[data-clearable]').first();
		await root.locator('input[type="file"]').setInputFiles([txt('a.txt'), txt('b.txt')]);

		await expect(root.locator('.upload__item')).toHaveCount(2);
		const clear = root.locator('.upload__clear');
		await expect(clear).toBeVisible();
		await clear.click();

		await expect(root.locator('.upload__item')).toHaveCount(0);
		await expect(root).not.toHaveAttribute('data-has-files');
		await expect(clear).toHaveCount(0);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('single-file mode replaces rather than accumulates', async ({ page }) => {
		// The basic (first) instance is single-file: input has no multiple attr.
		const root = page.locator('.upload--field').first();
		const input = root.locator('input[type="file"]');
		await expect(input).toBeAttached();
		await expect(input).not.toHaveAttribute('multiple');

		await input.setInputFiles(txt('first.txt'));
		await expect(root.locator('.upload__item', { hasText: 'first.txt' })).toHaveCount(1);

		await input.setInputFiles(txt('second.txt'));
		await expect(root.locator('.upload__item', { hasText: 'second.txt' })).toHaveCount(1);
		await expect(root.locator('.upload__item', { hasText: 'first.txt' })).toHaveCount(0);
		await expect(root.locator('.upload__item')).toHaveCount(1);
	});

	test('accept filter rejects a wrong-type file (not added to the list)', async ({ page }) => {
		// The validation instance is the only one whose input accepts image/* only.
		const root = page
			.locator('.upload--field')
			.filter({ has: page.locator('input[type="file"][accept="image/*"]') })
			.first();

		await root.locator('input[type="file"]').setInputFiles(txt('not-an-image.txt'));

		// A regression that dropped accept-filtering would add the row and flip data-has-files.
		await expect(root.locator('.upload__item', { hasText: 'not-an-image.txt' })).toHaveCount(0);
		await expect(root.locator('.upload__item')).toHaveCount(0);
		await expect(root).not.toHaveAttribute('data-has-files');
	});

	test('accept filter keeps a matching image file', async ({ page }) => {
		const root = page
			.locator('.upload--field')
			.filter({ has: page.locator('input[type="file"][accept="image/*"]') })
			.first();

		await root.locator('input[type="file"]').setInputFiles(png('ok.png'));

		await expect(root.locator('.upload__item', { hasText: 'ok.png' })).toHaveCount(1);
		await expect(root).toHaveAttribute('data-has-files', '');
	});

	test('dropzone click opens the native picker (input is the trigger target)', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('.upload--field').first();
		const dropzone = root.locator('.upload__hero');
		await expect(dropzone).toHaveAttribute('type', 'button');

		// Clicking the hero forwards to input.click(); capture the file-chooser to prove the wiring.
		const chooserPromise = page.waitForEvent('filechooser');
		await dropzone.click();
		const chooser = await chooserPromise;
		expect(chooser.element).toBeTruthy();

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});
});
