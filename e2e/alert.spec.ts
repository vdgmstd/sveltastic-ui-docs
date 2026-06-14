import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

test.describe('Alert', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/alert', { waitUntil: 'networkidle' });
	});

	test('a non-interactive alert exposes role=alert', async ({ page }) => {
		const basic = page.locator('[data-testid="alert"]').filter({ hasText: 'Heads up' }).first();
		await expect(basic).toHaveAttribute('role', 'alert');
		await expect(basic).not.toHaveAttribute('data-interactive', /.*/);
		await expect(basic).not.toHaveAttribute('data-dismissible', /.*/);
	});

	test('a dismissible alert switches role to region and marks data-dismissible', async ({ page }) => {
		const closable = page
			.locator('[data-testid="alert"]')
			.filter({ hasText: 'Changes saved' })
			.first();
		await expect(closable).toHaveAttribute('role', 'region');
		await expect(closable).toHaveAttribute('data-dismissible', '');
		await expect(closable).toHaveAttribute('data-interactive', '');
		await expect(closable.locator('.alert__close')).toBeVisible();
	});

	test('clicking the close control removes the alert', async ({ page }) => {
		const sink = collectErrors(page);
		const closable = page
			.locator('[data-testid="alert"]')
			.filter({ hasText: 'Changes saved' })
			.first();
		await expect(closable).toBeVisible();
		await closable.locator('.alert__close').click();
		await expect(closable).toHaveCount(0);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('dismissing fires onOpenChange with the new open state', async ({ page }) => {
		const sink = collectErrors(page);
		const events = page
			.locator('[data-testid="alert"]')
			.filter({ hasText: 'Event callbacks' })
			.first();
		const status = page.locator('dl.status');
		await expect(status.locator('dd').first()).toHaveText('—');

		await events.locator('.alert__close').click();
		await expect(status.locator('dd').first()).toHaveText('false');
		await expect(events).toHaveCount(0);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('the collapse toggle reflects expanded state via aria-expanded and aria-controls', async ({
		page
	}) => {
		const collapsible = page
			.locator('[data-testid="alert"]')
			.filter({ hasText: 'Release notes' })
			.first();
		const toggle = collapsible.locator('button.alert__title--collapsible');
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');

		const controls = await toggle.getAttribute('aria-controls');
		expect(controls).toBeTruthy();
		await expect(collapsible.locator(`#${controls}`)).toBeVisible();
	});

	test('clicking the toggle collapses the alert and hides its body', async ({ page }) => {
		const sink = collectErrors(page);
		const collapsible = page
			.locator('[data-testid="alert"]')
			.filter({ hasText: 'Release notes' })
			.first();
		const toggle = collapsible.locator('button.alert__title--collapsible');
		const controls = await toggle.getAttribute('aria-controls');
		const body = collapsible.locator(`#${controls}`);

		await expect(body).toBeVisible();
		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
		await expect(collapsible).toHaveAttribute('data-state', 'collapsed');
		await expect(body).toHaveCount(0);

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');
		await expect(collapsible).toHaveAttribute('data-state', 'expanded');
		await expect(collapsible.locator(`#${controls}`)).toBeVisible();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});
});
