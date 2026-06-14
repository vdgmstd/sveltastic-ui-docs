import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Button behavioral parity — mirrors bits-ui v2's button tests (native activation,
// disabled inertness + focusability, keyboard Enter/Space, accessible icon name),
// adapted to the kit's Pressable-backed Button on the doc page. The Group demo's
// toggle buttons give an observable onclick effect keyed by visible text.
test.describe('Button', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/button', { waitUntil: 'networkidle' });
	});

	test('Button.Root renders a native <button> element', async ({ page }) => {
		// Select on the testid alone so the tag assertion is meaningful (would fail if Root rendered a div/span).
		const btn = page.locator('[data-testid="button"]').first();
		await expect(btn).toBeVisible();
		expect(await btn.evaluate((el) => el.tagName)).toBe('BUTTON');
	});

	test('click fires onclick: toggles the demo active state', async ({ page }) => {
		const sink = collectErrors(page);
		// First Button.Group: roving toggle keyed by visible text. "Large" starts active.
		const group = page.locator('[data-testid="button-group"]').first();
		const large = group.getByRole('button', { name: 'Large' });
		const medium = group.getByRole('button', { name: 'Medium' });
		await expect(large).toHaveAttribute('data-active', '');
		await expect(medium).not.toHaveAttribute('data-active');

		await medium.click();
		await expect(medium).toHaveAttribute('data-active', '');
		await expect(large).not.toHaveAttribute('data-active');
		// The now-active toggle exposes aria-pressed; the inactive one drops it.
		await expect(medium).toHaveAttribute('aria-pressed', 'true');
		await expect(large).not.toHaveAttribute('aria-pressed');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Enter and Space activate the focused button', async ({ page }) => {
		const group = page.locator('[data-testid="button-group"]').first();
		const small = group.getByRole('button', { name: 'Small' });
		const large = group.getByRole('button', { name: 'Large' });

		await small.focus();
		await expect(small).toBeFocused();
		await page.keyboard.press('Enter');
		await expect(small).toHaveAttribute('data-active', '');

		// Space re-activates the first one — proves native Space activation, not a no-op.
		await large.focus();
		await page.keyboard.press(' ');
		await expect(large).toHaveAttribute('data-active', '');
		await expect(small).not.toHaveAttribute('data-active');
	});

	test('disabled button: native disabled, not focusable, cannot be clicked', async ({ page }) => {
		const disabled = page.getByRole('button', { name: 'Disabled', exact: true }).first();
		await expect(disabled).toBeDisabled();
		await expect(disabled).toHaveAttribute('data-disabled', '');
		await expect(disabled).toHaveAttribute('aria-disabled', 'true');

		// A native-disabled button is removed from the tab sequence: focus() is a no-op.
		await disabled.evaluate((el: HTMLButtonElement) => el.focus());
		await expect(disabled).not.toBeFocused();

		// Click is rejected by the engine (auto-wait sees a disabled control) — assert it errors fast.
		const clicked = await disabled
			.click({ trial: true, timeout: 800 })
			.then(() => true)
			.catch(() => false);
		expect(clicked).toBe(false);
	});

	test('loading button is inert (aria-disabled) and shows a spinner', async ({ page }) => {
		const loading = page.getByRole('button', { name: 'Loading', exact: true }).first();
		await expect(loading).toHaveAttribute('data-loading', '');
		await expect(loading).toHaveAttribute('data-disabled', '');
		await expect(loading).toHaveAttribute('aria-disabled', 'true');
		// Loading does NOT use the native disabled attribute — inertness is aria + pointer-events.
		// (Playwright's toBeDisabled conflates aria-disabled, so check the native property directly.)
		expect(await loading.evaluate((el: HTMLButtonElement) => el.disabled)).toBe(false);
		// The loading overlay carries the spinner SVG.
		await expect(loading.locator('.button__loading svg')).toBeVisible();
		// pointer-events:none means a real click never lands on it.
		const hitProhibited = await loading
			.click({ trial: true, timeout: 800 })
			.then(() => true)
			.catch(() => false);
		expect(hitProhibited).toBe(false);
	});

	test('icon-only button carries an accessible name via aria-label', async ({ page }) => {
		// The Icon demo's first button is iconOnly with aria-label="Like" and no visible text.
		const iconBtn = page.getByRole('button', { name: 'Like' }).first();
		await expect(iconBtn).toBeVisible();
		await expect(iconBtn).toHaveAttribute('aria-label', 'Like');
		// Falsifiable: there is no visible text node — the name comes purely from aria-label.
		expect((await iconBtn.locator('.button__content').innerText()).trim()).toBe('');
	});
});
