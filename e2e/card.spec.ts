import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Card is a presentational compound: Card.Root > Media(.card__img) / Body(.card__text) /
// Footer(.card__buttons|.card__actions), with Image(.card__img-clip), Overlay(.card__interactions)
// and Header(.card__title). No interactive/link variant exists in this kit, so coverage is the
// structural composition + the data-variant / data-floating reflection (all falsifiable).
test.describe('Card', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/card', { waitUntil: 'networkidle' });
	});

	test('Root reflects its layout variant via data-variant and wraps the inner .card surface', async ({ page }) => {
		const sink = collectErrors(page);

		const first = page.locator('[data-testid="card"]').first();
		await expect(first).toHaveAttribute('data-variant', 'default');
		await expect(first).toHaveClass(/card-content--default/);

		// Root is the outer wrapper; the styled surface is an inner .card it owns.
		const surface = first.locator('> .card');
		await expect(surface).toHaveCount(1);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('the composed parts render together inside one card (media + body + header + footer)', async ({ page }) => {
		const sink = collectErrors(page);

		const surface = page.locator('[data-testid="card"]').first().locator('> .card');
		// Each part contributes its own classed region within the single surface.
		await expect(surface.locator('.card__img')).toHaveCount(1);
		await expect(surface.locator('.card__text')).toHaveCount(1);
		await expect(surface.locator('.card__title')).toHaveCount(1);
		// Default demo footer is floating -> .card__actions.
		await expect(surface.locator('.card__actions')).toHaveCount(1);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Header (.card__title) is nested inside Body (.card__text), not a sibling', async ({ page }) => {
		const surface = page.locator('[data-testid="card"]').first().locator('> .card');
		const body = surface.locator('.card__text');
		// The title must live within the body region per the frozen CSS contract.
		await expect(body.locator('.card__title')).toHaveCount(1);
		await expect(body.locator('.card__title h3')).toHaveText(/perfect shot/i);
	});

	test('Image renders the <img> inside the clipped .card__img-clip within .card__img', async ({ page }) => {
		const media = page.locator('[data-testid="card"]').first().locator('> .card .card__img');
		const clip = media.locator('.card__img-clip');
		await expect(clip).toHaveCount(1);
		await expect(clip.locator('img')).toHaveCount(1);
		await expect(clip.locator('img')).toBeVisible();
	});

	test('floating Footer publishes data-floating and renders .card__actions (not .card__buttons)', async ({ page }) => {
		const surface = page.locator('[data-testid="card"]').first().locator('> .card');
		const footer = surface.locator('.card__actions');
		await expect(footer).toHaveAttribute('data-floating', '');
		// floating and non-floating are mutually exclusive class hooks.
		await expect(surface.locator('.card__buttons')).toHaveCount(0);
	});

	test('a different Root instance reflects a different data-variant (horizontal demo)', async ({ page }) => {
		// Capture the horizontal card by its variant hook — falsifies if data-variant stops tracking the prop.
		const horizontal = page.locator('[data-testid="card"][data-variant="horizontal"]').first();
		await expect(horizontal).toHaveCount(1);
		await expect(horizontal).toHaveClass(/card-content--horizontal/);
		// Its footer is the in-flow strip, proving the non-floating branch renders .card__buttons.
		await expect(horizontal.locator('> .card .card__buttons')).toHaveCount(1);
		await expect(horizontal.locator('> .card .card__actions')).toHaveCount(0);
	});
});
