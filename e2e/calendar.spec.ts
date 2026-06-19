import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Calendar behavioral parity — mirrors bits-ui v2's calendar tests (grid roles, day
// selection, prev/next month navigation, the grid keyboard map, disabled days),
// adapted to the kit's doc page. The first instance is the basic single calendar.

// Step an ISO YYYY-MM-DD date by N days without a date library.
function addDays(iso: string, n: number): string {
	const [y, m, d] = iso.split('-').map(Number);
	const dt = new Date(Date.UTC(y, m - 1, d));
	dt.setUTCDate(dt.getUTCDate() + n);
	return dt.toISOString().slice(0, 10);
}

test.describe('Calendar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/calendar', { waitUntil: 'networkidle' });
	});

	test('renders a date grid with day cells carrying ISO data-value', async ({ page }) => {
		const grid = page.locator('[role="grid"]').first();
		await expect(grid).toBeVisible();
		await expect(grid).toHaveAttribute('aria-label', /\w+/);
		const cells = grid.locator('[role="gridcell"]');
		// Six weeks x seven days.
		await expect(cells).toHaveCount(42);
		await expect(cells.first()).toHaveAttribute('data-value', /^\d{4}-\d{2}-\d{2}$/);
	});

	test('roving tabindex: exactly one day cell is in the page tab sequence', async ({ page }) => {
		const grid = page.locator('[role="grid"]').first();
		await expect(grid.locator('[role="gridcell"][tabindex="0"]')).toHaveCount(1);
		expect(await grid.locator('[role="gridcell"][tabindex="-1"]').count()).toBeGreaterThan(0);
	});

	test('clicking a day selects it (data-selected + aria-selected)', async ({ page }) => {
		const sink = collectErrors(page);
		const grid = page.locator('[role="grid"]').first();
		// Pick a non-muted, enabled cell by its stable ISO value (the roving cell).
		const roving = grid.locator('[role="gridcell"][tabindex="0"]');
		const iso = await roving.getAttribute('data-value');
		expect(iso).toBeTruthy();
		const cell = grid.locator(`[role="gridcell"][data-value="${iso}"]`);
		await expect(cell).not.toHaveAttribute('data-selected', '');
		await cell.click();
		await expect(cell).toHaveAttribute('data-selected', '');
		await expect(cell).toHaveAttribute('aria-selected', 'true');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowRight / ArrowLeft move the roving focus one day', async ({ page }) => {
		const grid = page.locator('[role="grid"]').first();
		const start = grid.locator('[role="gridcell"][tabindex="0"]');
		const startIso = await start.getAttribute('data-value');
		expect(startIso).toBeTruthy();
		await start.focus();

		await page.keyboard.press('ArrowRight');
		const nextIso = addDays(startIso!, 1);
		await expect(grid.locator(`[role="gridcell"][data-value="${nextIso}"]`)).toBeFocused();

		await page.keyboard.press('ArrowLeft');
		await expect(grid.locator(`[role="gridcell"][data-value="${startIso}"]`)).toBeFocused();
	});

	test('ArrowDown / ArrowUp move the roving focus one week', async ({ page }) => {
		const grid = page.locator('[role="grid"]').first();
		const start = grid.locator('[role="gridcell"][tabindex="0"]');
		const startIso = await start.getAttribute('data-value');
		expect(startIso).toBeTruthy();
		await start.focus();

		await page.keyboard.press('ArrowDown');
		const weekDownIso = addDays(startIso!, 7);
		await expect(grid.locator(`[role="gridcell"][data-value="${weekDownIso}"]`)).toBeFocused();

		await page.keyboard.press('ArrowUp');
		await expect(grid.locator(`[role="gridcell"][data-value="${startIso}"]`)).toBeFocused();
	});

	test('Enter selects the focused day via the keyboard', async ({ page }) => {
		const sink = collectErrors(page);
		const grid = page.locator('[role="grid"]').first();
		const start = grid.locator('[role="gridcell"][tabindex="0"]');
		const startIso = await start.getAttribute('data-value');
		await start.focus();
		await page.keyboard.press('ArrowRight');
		const targetIso = addDays(startIso!, 1);
		const target = grid.locator(`[role="gridcell"][data-value="${targetIso}"]`);
		await expect(target).toBeFocused();
		await page.keyboard.press('Enter');
		await expect(target).toHaveAttribute('data-selected', '');
		await expect(target).toHaveAttribute('aria-selected', 'true');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('next / prev buttons change the displayed month label', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('[data-testid="calendar"]').first();
		// Two grids co-exist briefly during the slide; settle to one before reading.
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		const before = await root.locator('[role="grid"]').getAttribute('aria-label');
		expect(before).toBeTruthy();

		await root.getByLabel('Next', { exact: true }).first().click();
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		const afterNext = await root.locator('[role="grid"]').getAttribute('aria-label');
		expect(afterNext).not.toBe(before);

		await root.getByLabel('Previous', { exact: true }).first().click();
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		await expect(root.locator('[role="grid"]')).toHaveAttribute('aria-label', before!);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('PageDown / PageUp move the calendar by one month from the keyboard', async ({ page }) => {
		const sink = collectErrors(page);
		const root = page.locator('[data-testid="calendar"]').first();
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		const before = await root.locator('[role="grid"]').getAttribute('aria-label');
		expect(before).toBeTruthy();

		await root.locator('[role="gridcell"][tabindex="0"]').focus();
		await page.keyboard.press('PageDown');
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		expect(await root.locator('[role="grid"]').getAttribute('aria-label')).not.toBe(before);

		await page.keyboard.press('PageUp');
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		await expect(root.locator('[role="grid"]')).toHaveAttribute('aria-label', before!);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('Shift+PageDown jumps the calendar forward by one year', async ({ page }) => {
		const root = page.locator('[data-testid="calendar"]').first();
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		// The grid label is month-only; read the year off the roving cell's ISO data-value instead.
		const beforeIso = await root.locator('[role="gridcell"][tabindex="0"]').getAttribute('data-value');
		const yearBefore = Number(beforeIso?.slice(0, 4));
		expect(Number.isNaN(yearBefore)).toBe(false);

		await root.locator('[role="gridcell"][tabindex="0"]').focus();
		await page.keyboard.press('Shift+PageDown');
		await expect(root.locator('[role="grid"]')).toHaveCount(1);
		const afterIso = await root.locator('[role="gridcell"][tabindex="0"]').getAttribute('data-value');
		expect(Number(afterIso?.slice(0, 4))).toBe(yearBefore + 1);
	});

	test('a disabled calendar exposes disabled, non-selectable day cells', async ({ page }) => {
		// The States section renders a fully-disabled calendar (the doc page has no
		// mixed enabled/disabled fixture, so we assert the whole-grid disabled contract).
		const cal = page
			.locator('[data-testid="calendar"]')
			.filter({ has: page.locator('[role="gridcell"][data-disabled]') })
			.first();
		await expect(cal).toBeVisible();
		const days = cal.locator('[role="gridcell"][data-value]');
		// Falsifiable: drop `disabled` and these day cells become enabled (toBeDisabled fails)
		// and the :not([data-disabled]) count is no longer 0.
		await expect(days.first()).toBeDisabled();
		await expect(cal.locator('[role="gridcell"][data-value]:not([data-disabled])')).toHaveCount(0);
		const iso = await days.first().getAttribute('data-value');
		await days.first().click({ force: true });
		await expect(cal.locator(`[role="gridcell"][data-value="${iso}"]`)).not.toHaveAttribute('data-selected', '');
	});
});
