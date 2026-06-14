import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Checkbox behavioral parity — native input semantics surfaced through the styled
// compound: label-for association toggles, Space toggles, disabled is inert,
// indeterminate exposes aria-checked="mixed", and group members are independent.
test.describe('Checkbox', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/checkbox', { waitUntil: 'networkidle' });
	});

	test('clicking the control toggles the native checked + data-state', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('[data-testid="checkbox"]').first();
		const input = root.locator('input.checkbox__input');

		await expect(input).not.toBeChecked();
		await expect(root).toHaveAttribute('data-state', 'unchecked');

		await root.locator('.checkbox__box').click();

		await expect(input).toBeChecked();
		await expect(root).toHaveAttribute('data-state', 'checked');
		await expect(root).toHaveAttribute('data-checked', '');
		await expect(input).toHaveAttribute('aria-checked', 'true');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('clicking the associated label toggles the checkbox', async ({ page }) => {
		const root = page.locator('[data-testid="checkbox"]').first();
		const input = root.locator('input.checkbox__input');
		const before = await input.isChecked();

		await root.locator('[data-testid="checkbox-label"]').click();

		await expect(input).toBeChecked({ checked: !before });
	});

	test('Space toggles the focused checkbox', async ({ page }) => {
		const root = page.locator('[data-testid="checkbox"]').first();
		const input = root.locator('input.checkbox__input');
		const before = await input.isChecked();

		await input.focus();
		await expect(input).toBeFocused();
		await page.keyboard.press(' ');

		await expect(input).toBeChecked({ checked: !before });
	});

	test('a disabled checkbox does not toggle on click', async ({ page }) => {
		// StatesCheckbox renders an unchecked `disabled` control — locate it by its disabled flag.
		const disabledRoot = page.locator('[data-testid="checkbox"][data-disabled]').first();
		const input = disabledRoot.locator('input.checkbox__input');

		await expect(input).toBeDisabled();
		const before = await input.isChecked();

		// The native `disabled` attribute blocks the toggle (no change event fires); force past the
		// box's pointer-events:none to confirm the control still refuses.
		await disabledRoot.locator('.checkbox__box').click({ force: true });

		await expect(input).toBeChecked({ checked: before });
		await expect(disabledRoot).toHaveAttribute('data-disabled', '');
	});

	test('a loading checkbox refuses the toggle via the JS guard (separate from disabled)', async ({ page }) => {
		// StatesCheckbox renders a `loading` control — inert through the state-class guard, not the
		// native disabled attr, so the click fires a change event that handleChange then reverts.
		const loadingRoot = page.locator('[data-testid="checkbox"][data-loading]').first();
		await expect(loadingRoot).toHaveCount(1);
		const input = loadingRoot.locator('input.checkbox__input');
		const before = await input.isChecked();

		await loadingRoot.locator('.checkbox__box').click({ force: true });

		await expect(input).toBeChecked({ checked: before });
		await expect(loadingRoot).toHaveAttribute('data-loading', '');
	});

	test('Enter does not toggle the checkbox (Space-only contract)', async ({ page }) => {
		const root = page.locator('[data-testid="checkbox"]').first();
		const input = root.locator('input.checkbox__input');
		const before = await input.isChecked();

		await input.focus();
		await page.keyboard.press('Enter');

		await expect(input).toBeChecked({ checked: before });
	});

	test('indeterminate exposes aria-checked="mixed" and the native indeterminate flag', async ({ page }) => {
		const indRoot = page.locator('[data-testid="checkbox"][data-indeterminate]').first();
		const input = indRoot.locator('input.checkbox__input');

		await expect(indRoot).toHaveAttribute('data-state', 'indeterminate');
		await expect(input).toHaveAttribute('aria-checked', 'mixed');
		expect(await input.evaluate((el: HTMLInputElement) => el.indeterminate)).toBe(true);
	});

	test('toggling an indeterminate checkbox clears mixed and becomes checked', async ({ page }) => {
		const sink = collectErrors(page);
		// EventsCheckbox uses bind:indeterminate (two-way) so the cleared state survives the toggle.
		// Capture by stable text — a [data-indeterminate] filter would vanish once the click clears it.
		const indRoot = page.locator('[data-testid="checkbox"]', { hasText: 'Toggle me' });
		const input = indRoot.locator('input.checkbox__input');
		await expect(indRoot).toHaveAttribute('data-indeterminate', '');
		await expect(input).toHaveAttribute('aria-checked', 'mixed');

		await indRoot.locator('.checkbox__box').click();

		await expect(indRoot).not.toHaveAttribute('data-indeterminate', '');
		await expect(input).toHaveAttribute('aria-checked', 'true');
		await expect(input).toBeChecked();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('group members toggle independently', async ({ page }) => {
		const sink = collectErrors(page);
		const group = page.locator('[data-testid="checkbox-group"]').first();
		await expect(group).toHaveAttribute('role', 'group');

		// Resolve members by stable visible label text so live state filters never re-bind.
		const apple = group.locator('[data-testid="checkbox"]', { hasText: 'Apple' });
		const banana = group.locator('[data-testid="checkbox"]', { hasText: 'Banana' });
		const appleInput = apple.locator('input.checkbox__input');
		const bananaInput = banana.locator('input.checkbox__input');

		// GroupCheckbox seeds value=['banana'] — banana checked, apple not.
		await expect(bananaInput).toBeChecked();
		await expect(appleInput).not.toBeChecked();

		await apple.locator('.checkbox__box').click();

		await expect(appleInput).toBeChecked();
		await expect(bananaInput).toBeChecked();
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('group exposes aria-labelledby pointing at the GroupLabel', async ({ page }) => {
		const group = page.locator('[data-testid="checkbox-group"]').first();
		const labelledby = await group.getAttribute('aria-labelledby');
		expect(labelledby).toBeTruthy();
		await expect(page.locator(`#${labelledby}`)).toHaveText('Fruits');
	});
});
