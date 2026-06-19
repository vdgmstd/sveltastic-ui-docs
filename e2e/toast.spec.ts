import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Toast (compound parts over the toast queue) against /docs/toast.
//  BasicToast   — "Show toast" (success) + "Error toast" (danger, closable).
//  CustomToast  — "Custom content" → Toast.Root + Icon/Title/Description/Close.
//  ActionToast  — "Delete with undo" (sticky) → Toast.Action "Undo".
//  LoadingToast — "Upload (loading → done)" → loading toast then success.

test.describe('Toast', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/toast', { waitUntil: 'networkidle' });
	});

	test('toast() queues a polite status toast with title + description', async ({ page }) => {
		const sink = collectErrors(page);
		await page.getByRole('button', { name: 'Show toast' }).click();
		const toast = page.locator('.toast').first();
		await expect(toast).toBeVisible();
		await expect(toast).toHaveAttribute('role', 'status');
		await expect(toast.locator('.toast__title')).toHaveText('Saved');
		await expect(toast.locator('.toast__text')).toHaveText('Your changes are live.');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a danger toast is assertive (role=alert) and the close button dismisses it', async ({
		page
	}) => {
		await page.getByRole('button', { name: 'Error toast' }).click();
		const toast = page.locator('.toast').filter({ hasText: 'Upload failed' });
		await expect(toast).toHaveAttribute('role', 'alert');
		await toast.locator('.toast__close').click();
		await expect(toast).toHaveCount(0);
	});

	test('a custom content snippet renders Toast parts', async ({ page }) => {
		await page.getByRole('button', { name: 'Custom content' }).click();
		const toast = page.locator('.toast').filter({ hasText: 'Deploy started' });
		await expect(toast).toBeVisible();
		await expect(toast.locator('.toast__title')).toHaveText('Deploy started');
		await expect(toast.locator('.toast__text')).toHaveText('Building and shipping your site…');
		await toast.locator('.toast__close').click();
		await expect(toast).toHaveCount(0);
	});

	test('Toast.Action runs the handler and dismisses the toast', async ({ page }) => {
		await page.getByRole('button', { name: 'Delete with undo' }).click();
		const toast = page.locator('.toast').filter({ hasText: 'Message deleted' });
		await expect(toast).toBeVisible();
		await toast.getByRole('button', { name: 'Undo' }).click();
		await expect(toast).toHaveCount(0);
		await expect(page.getByText('action → undone')).toBeVisible();
	});

	test('a loading toast stays, then resolves to a success toast', async ({ page }) => {
		await page.getByRole('button', { name: 'Upload (loading → done)' }).click();
		await expect(page.locator('.toast').filter({ hasText: 'Uploading…' })).toBeVisible();
		await expect(page.locator('.toast').filter({ hasText: 'Uploaded' })).toBeVisible({
			timeout: 4000
		});
	});

	test('the toast stack is a portalled group landmark', async ({ page }) => {
		await page.getByRole('button', { name: 'Show toast' }).click();
		const stack = page.locator('body > .toast-stack').first();
		await expect(stack).toHaveAttribute('role', 'group');
		await expect(stack.locator('.toast')).toHaveCount(1);
	});
});
