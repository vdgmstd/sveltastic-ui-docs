import { test, expect } from '@playwright/test';

// Per-component keyboard-behavior locks. Each fix lands red→green here.

// Dialog: aria-modal + ref-counted scroll-lock that restores the body on close.
test('dialog sets aria-modal and locks/restores body scroll', async ({ page }) => {
	await page.goto('/docs/dialog', { waitUntil: 'networkidle' });
	const trigger = page.getByRole('button', { name: 'Open dialog' }).first();
	await trigger.click();

	const dialog = page.locator('dialog[open]');
	await expect(dialog).toHaveAttribute('aria-modal', 'true');
	expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).toBe('hidden');

	await page.keyboard.press('Escape');
	await expect(dialog).toHaveCount(0);
	await expect
		.poll(() => page.evaluate(() => getComputedStyle(document.body).overflow))
		.not.toBe('hidden');
});

// Pagination: one roving tab stop (the active page), ArrowRight moves focus to a sibling page button.
test('pagination roving focus: ArrowRight moves between page buttons', async ({ page }) => {
	await page.goto('/docs/pagination', { waitUntil: 'networkidle' });

	const list = page.locator('.pagination__list').first();
	await expect(list).toBeVisible();

	// Exactly one page button is in the Tab sequence (roving anchor = active page).
	const tabbable = list.locator('.pagination__button[tabindex="0"]');
	await expect(tabbable).toHaveCount(1);

	await tabbable.focus();
	const before = await list.evaluate(
		(el) => el.querySelector('button:focus')?.getAttribute('aria-label') ?? el.querySelector('button:focus')?.textContent
	);
	await page.keyboard.press('ArrowRight');
	const after = await list.evaluate(
		(el) => el.querySelector('button:focus')?.getAttribute('aria-label') ?? el.querySelector('button:focus')?.textContent
	);
	expect(after, 'ArrowRight should move focus to a different page button').not.toEqual(before);
});

// Select: keyboard option navigation works once open (was non-functional — focus stuck in trigger).
test('select ArrowDown activates an option', async ({ page }) => {
	await page.goto('/docs/select', { waitUntil: 'networkidle' });
	const trigger = page.getByTestId('select').first();
	await trigger.click();
	await expect(page.locator('[role="listbox"]')).toBeVisible();
	await page.keyboard.press('ArrowDown');
	const ad = await page.locator('[aria-activedescendant]').first().getAttribute('aria-activedescendant');
	expect(ad, 'ArrowDown should set aria-activedescendant').toBeTruthy();
	await expect(page.locator(`[id="${ad}"][role="option"]`)).toHaveCount(1);
});

// Radio + Switch: keyboard focus must produce a visible ring (WCAG 2.4.7).
for (const route of ['radio', 'switch'] as const) {
	test(`${route} shows a visible focus ring on keyboard focus`, async ({ page }) => {
		await page.goto(`/docs/${route}`, { waitUntil: 'networkidle' });
		const input = page.locator(`.${route}__input`).first();
		await input.focus();
		const ringHost = route === 'radio' ? page.locator('.radio__effect').first() : page.locator('.switch').first();
		const outline = await ringHost.evaluate((el) => getComputedStyle(el).outlineWidth);
		expect(parseFloat(outline), 'focused control must have a visible outline').toBeGreaterThan(0);
	});
}
