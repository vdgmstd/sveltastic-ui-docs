import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// The /docs/progress page renders, in order:
//  1. Linear (3 determinate bars: value 20/50/80, min 0 max 100)  -> first progressbar
//  ...
//  Indeterminate (3 bars value=null)  -> bars with no aria-valuenow
//  ...
//  Range (value=72, min=60, max=100, has a Progress.Label)  -> aria-labelledby example

test.describe('Progress', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/progress', { waitUntil: 'networkidle' });
	});

	test('determinate bar exposes progressbar role with valuemin/valuemax/valuenow', async ({
		page
	}) => {
		const sink = collectErrors(page);
		const bar = page.locator('[role="progressbar"][data-testid="progress"]').first();
		await expect(bar).toBeVisible();

		// First demo bar is value=20, min=0, max=100.
		await expect(bar).toHaveAttribute('aria-valuemin', '0');
		await expect(bar).toHaveAttribute('aria-valuemax', '100');
		await expect(bar).toHaveAttribute('aria-valuenow', '20');

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('aria-valuenow is committed within [valuemin, valuemax] for every determinate bar', async ({
		page
	}) => {
		// Determinate bars carry data-value (not present on indeterminate ones); pick those.
		const bars = page.locator('[role="progressbar"][data-value]');
		const count = await bars.count();
		expect(count).toBeGreaterThan(0);

		for (let i = 0; i < count; i++) {
			const bar = bars.nth(i);
			const now = Number(await bar.getAttribute('aria-valuenow'));
			const min = Number(await bar.getAttribute('aria-valuemin'));
			const max = Number(await bar.getAttribute('aria-valuemax'));
			expect(Number.isNaN(now)).toBe(false);
			expect(now).toBeGreaterThanOrEqual(min);
			expect(now).toBeLessThanOrEqual(max);
		}
	});

	test('indeterminate bar omits aria-valuenow and sets data-indeterminate + aria-busy', async ({
		page
	}) => {
		const indeterminate = page.locator('[role="progressbar"][data-indeterminate]').first();
		await expect(indeterminate).toBeVisible();

		// Hook present, value absent — the documented indeterminate contract.
		await expect(indeterminate).toHaveAttribute('data-indeterminate', '');
		await expect(indeterminate).toHaveAttribute('aria-busy', 'true');
		await expect(indeterminate).not.toHaveAttribute('aria-valuenow', /.*/);
		await expect(indeterminate).toHaveAttribute('data-state', 'indeterminate');

		// valuemin/valuemax are still published for the indeterminate bar.
		await expect(indeterminate).toHaveAttribute('aria-valuemin', '0');
		await expect(indeterminate).toHaveAttribute('aria-valuemax', '100');
	});

	test('data-state reflects loading vs indeterminate', async ({ page }) => {
		// First determinate bar (value 20 of 100) is mid-progress -> loading.
		const loading = page.locator('[role="progressbar"][data-value]').first();
		await expect(loading).toHaveAttribute('data-state', 'loading');

		// At least one indeterminate bar reports the indeterminate state.
		await expect(
			page.locator('[role="progressbar"][data-indeterminate]').first()
		).toHaveAttribute('data-state', 'indeterminate');
	});

	test('custom min/max bar reports aria-valuenow inside its own range', async ({ page }) => {
		// The Range demo uses min=60 max=100 value=72 and is the only bar with a Progress.Label.
		const labelled = page.locator('[role="progressbar"][aria-labelledby]').first();
		await expect(labelled).toBeVisible();

		await expect(labelled).toHaveAttribute('aria-valuemin', '60');
		await expect(labelled).toHaveAttribute('aria-valuemax', '100');
		const now = Number(await labelled.getAttribute('aria-valuenow'));
		expect(now).toBeGreaterThanOrEqual(60);
		expect(now).toBeLessThanOrEqual(100);
		// Custom ariaValueText overrides the computed percentage for AT.
		await expect(labelled).toHaveAttribute('aria-valuetext', `${now} of 100 points`);
	});

	test('Progress.Label is associated via aria-labelledby to an existing element', async ({
		page
	}) => {
		const labelled = page.locator('[role="progressbar"][aria-labelledby]').first();
		const labelId = await labelled.getAttribute('aria-labelledby');
		expect(labelId).toBeTruthy();

		// The referenced node exists and is the rendered Progress.Label.
		const label = page.locator(`#${labelId}`);
		await expect(label).toHaveCount(1);
		await expect(label).toHaveAttribute('data-testid', 'progress-label');
		await expect(label).toHaveText(/\d+\s*\/\s*100/);
	});

	test('a circular determinate ring is a progressbar with data-shape=circular and a valuenow in range', async ({
		page
	}) => {
		const ring = page.locator('[role="progressbar"][data-shape="circular"][data-value]').first();
		await expect(ring).toBeVisible();
		const now = Number(await ring.getAttribute('aria-valuenow'));
		const min = Number(await ring.getAttribute('aria-valuemin'));
		const max = Number(await ring.getAttribute('aria-valuemax'));
		expect(Number.isNaN(now)).toBe(false);
		expect(now).toBeGreaterThanOrEqual(min);
		expect(now).toBeLessThanOrEqual(max);
		// The ring renders an SVG indicator rather than a linear bar.
		await expect(ring.locator('svg')).not.toHaveCount(0);
	});

	test('a circular indeterminate ring omits aria-valuenow and reports data-indeterminate', async ({
		page
	}) => {
		const ring = page
			.locator('[role="progressbar"][data-shape="circular"][data-indeterminate]')
			.first();
		await expect(ring).toBeVisible();
		await expect(ring).not.toHaveAttribute('aria-valuenow', /.*/);
		await expect(ring).toHaveAttribute('aria-busy', 'true');
		await expect(ring).toHaveAttribute('data-state', 'indeterminate');
	});

	test('aria-valuenow tracks the controlled value when the range input changes', async ({
		page
	}) => {
		const sink = collectErrors(page);

		// The Interactive demo binds a determinate bar to a native range slider starting at 35.
		// That bar is the only determinate one committing aria-valuenow="35" on load.
		const bar = page.locator('[role="progressbar"][data-value="35"]').first();
		await expect(bar).toHaveCount(1);
		await expect(bar).toHaveAttribute('aria-valuenow', '35');

		// Drive its bound slider — scoped to the SAME demo as the 35-bar (its nearest ancestor that
		// holds a range input), so a docs reorder can't point this at another "Value" slider.
		const slider = bar
			.locator('xpath=ancestor::*[.//input[@type="range"]][1]//input[@type="range"]')
			.first();
		await slider.focus();
		await page.keyboard.press('ArrowRight');
		await page.keyboard.press('ArrowRight');

		// The controlled bar commits the new value 37 to aria-valuenow + data-value.
		const moved = page.locator('[role="progressbar"][data-value="37"]').first();
		await expect(moved).toHaveAttribute('aria-valuenow', '37');
		// The stale 35 value is gone — proves it tracked, not duplicated.
		await expect(page.locator('[role="progressbar"][data-value="35"]')).toHaveCount(0);

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});
});
