import { test, expect, type Page } from '@playwright/test';
import { collectErrors } from './_helpers';

// Dialog edge-anchored alignments (C-4) against /docs/dialog → DrawerDialog example.
//  triggers: "Start (inline)" | "End (inline)" | "Bottom sheet" → data-align start/end/bottom.
const trigger = (page: Page, name: string) => page.getByRole('button', { name }).first();
const openDialog = (page: Page) => page.locator('dialog[open]').first();

async function viewport(page: Page): Promise<{ vw: number; vh: number }> {
	return page.evaluate(() => ({ vw: window.innerWidth, vh: window.innerHeight }));
}

test.describe('Dialog edge drawers', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/dialog', { waitUntil: 'networkidle' });
	});

	test('start drawer pins to the inline-start edge, full height; Escape closes + restores focus', async ({ page }) => {
		const sink = collectErrors(page);
		const btn = trigger(page, 'Start (inline)');
		await btn.click();

		const dlg = openDialog(page);
		await expect(dlg).toBeVisible();
		await expect(dlg).toHaveAttribute('data-align', 'start');
		await expect(dlg).toHaveAttribute('data-state', 'open');

		const { vh } = await viewport(page);
		const box = (await dlg.boundingBox())!;
		expect(box.x).toBeLessThanOrEqual(1);
		expect(box.height).toBeGreaterThanOrEqual(vh - 2);

		await page.keyboard.press('Escape');
		await expect(page.locator('dialog[open]')).toHaveCount(0);
		await expect(btn).toBeFocused();

		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('end drawer pins to the inline-end edge, full height', async ({ page }) => {
		await trigger(page, 'End (inline)').click();

		const dlg = openDialog(page);
		await expect(dlg).toBeVisible();
		await expect(dlg).toHaveAttribute('data-align', 'end');

		const { vw, vh } = await viewport(page);
		const box = (await dlg.boundingBox())!;
		expect(box.x).toBeGreaterThan(vw / 2);
		expect(box.x + box.width).toBeGreaterThanOrEqual(vw - 20);
		expect(box.height).toBeGreaterThanOrEqual(vh - 2);

		await page.keyboard.press('Escape');
		await expect(page.locator('dialog[open]')).toHaveCount(0);
	});

	test('bottom sheet pins to the bottom edge', async ({ page }) => {
		await trigger(page, 'Bottom sheet').click();

		const dlg = openDialog(page);
		await expect(dlg).toBeVisible();
		await expect(dlg).toHaveAttribute('data-align', 'bottom');

		const { vh } = await viewport(page);
		const box = (await dlg.boundingBox())!;
		expect(box.y).toBeGreaterThan(vh / 2);
		expect(box.y + box.height).toBeGreaterThanOrEqual(vh - 1);

		await page.keyboard.press('Escape');
		await expect(page.locator('dialog[open]')).toHaveCount(0);
	});

	test('start drawer rounds only its inner (inline-end) corners', async ({ page }) => {
		await trigger(page, 'Start (inline)').click();

		const panel = page.locator('dialog[open] .dialog__panel').first();
		await expect(panel).toBeVisible();
		const radii = await panel.evaluate((el) => {
			const cs = getComputedStyle(el);
			return { tl: cs.borderTopLeftRadius, tr: cs.borderTopRightRadius };
		});
		expect(radii.tl).toBe('0px');
		expect(radii.tr).not.toBe('0px');

		await page.keyboard.press('Escape');
	});

	test('start drawer flips to the inline-end edge under RTL', async ({ page }) => {
		await page.evaluate(() => document.documentElement.setAttribute('dir', 'rtl'));

		await trigger(page, 'Start (inline)').click();
		const dlg = openDialog(page);
		await expect(dlg).toBeVisible();
		await expect(dlg).toHaveAttribute('data-align', 'start');

		const { vw } = await viewport(page);
		const box = (await dlg.boundingBox())!;
		expect(box.x).toBeGreaterThan(vw / 2);

		await page.keyboard.press('Escape');
		await page.evaluate(() => document.documentElement.removeAttribute('dir'));
	});
});
