import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Divider is presentational — mirrors bits-ui v2's separator render-contract tests
// (role / orientation hooks, decorative aria-hidden, labelled aria-labelledby wiring).
// No interaction; each assertion is falsifiable against a wrong role/orientation.
test.describe('Divider', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/divider', { waitUntil: 'networkidle' });
	});

	test('a plain horizontal divider renders as <hr> with the horizontal orientation hook', async ({
		page
	}) => {
		const sink = collectErrors(page);
		// First instance is the Basic example: a non-decorative horizontal line.
		const divider = page.locator('hr[data-testid="divider"]').first();
		await expect(divider).toBeVisible();
		await expect(divider).toHaveAttribute('data-orientation', 'horizontal');
		// <hr> carries the implicit ARIA `separator` role — it must NOT be hidden from AT.
		await expect(divider).not.toHaveAttribute('aria-hidden', 'true');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a vertical divider exposes role=separator + aria-orientation=vertical', async ({ page }) => {
		const divider = page.locator('[data-testid="divider"][data-orientation="vertical"]').first();
		await expect(divider).toBeVisible();
		await expect(divider).toHaveAttribute('role', 'separator');
		await expect(divider).toHaveAttribute('aria-orientation', 'vertical');
	});

	test('a labelled divider is role=separator, renders its text, and wires aria-labelledby to it', async ({
		page
	}) => {
		// The labelled example sets aria-labelledby; scope to that variant.
		const divider = page.locator('[data-testid="divider"][aria-labelledby]').first();
		await expect(divider).toHaveAttribute('role', 'separator');
		await expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
		await expect(divider).toContainText('Center');

		// The label element pointed to by aria-labelledby must actually exist and hold the caption.
		const labelId = await divider.getAttribute('aria-labelledby');
		expect(labelId).toBeTruthy();
		const label = page.locator(`#${labelId}`);
		await expect(label).toHaveText('Center');
	});

	test('labelPlacement is published as a data-placement hook (start / center / end)', async ({
		page
	}) => {
		// The label example renders one of each placement; assert all three exist as styling hooks.
		await expect(page.locator('[data-testid="divider"][data-placement="center"]')).toHaveCount(1);
		await expect(page.locator('[data-testid="divider"][data-placement="start"]')).toHaveCount(1);
		await expect(page.locator('[data-testid="divider"][data-placement="end"]')).toHaveCount(1);
	});

	test('a decorative divider is hidden from AT and carries no separator role', async ({ page }) => {
		const divider = page.locator('[data-testid="divider"][data-decorative]').first();
		await expect(divider).toBeVisible();
		await expect(divider).toHaveAttribute('aria-hidden', 'true');
		// Decorative means no semantic separator role is exposed.
		await expect(divider).not.toHaveAttribute('role', 'separator');
	});

	test('variant is published as a data-variant hook (solid / dashed / dotted)', async ({ page }) => {
		// The variants example renders one line per style; the hook must reflect each.
		await expect(page.locator('[data-testid="divider"][data-variant="solid"]').first()).toBeVisible();
		await expect(page.locator('[data-testid="divider"][data-variant="dashed"]').first()).toBeVisible();
		await expect(page.locator('[data-testid="divider"][data-variant="dotted"]').first()).toBeVisible();
	});
});
