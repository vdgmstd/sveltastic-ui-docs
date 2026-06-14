import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Segmented behavioral parity — radiogroup semantics: roving anchor on the checked item,
// click selects, arrow keys rove focus (selection on activation).
test.describe('Segmented', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/segmented', { waitUntil: 'networkidle' });
	});

	test('roving tabindex anchors on the checked item', async ({ page }) => {
		const group = page.locator('[role="radiogroup"]').first();
		const anchor = group.locator('[role="radio"][tabindex="0"]');
		await expect(anchor).toHaveCount(1);
		await expect(anchor).toHaveAttribute('aria-checked', 'true');
	});

	test('click selects an item and deselects the previous', async ({ page }) => {
		const sink = collectErrors(page);
		const group = page.locator('[role="radiogroup"]').first();
		const radios = group.locator('[role="radio"]');
		const count = await radios.count();

		// Stable index of the first currently-unchecked radio (a live aria-checked filter would
		// re-resolve to a different element the moment the click flips the attribute).
		let targetIdx = 0;
		for (let i = 0; i < count; i += 1) {
			if ((await radios.nth(i).getAttribute('aria-checked')) === 'false') {
				targetIdx = i;
				break;
			}
		}
		const target = radios.nth(targetIdx);
		await target.click();

		await expect(target).toHaveAttribute('aria-checked', 'true');
		await expect(group.locator('[role="radio"][aria-checked="true"]')).toHaveCount(1);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('ArrowRight roves focus to the next radio', async ({ page }) => {
		const group = page.locator('[role="radiogroup"]').first();
		const radios = group.locator('[role="radio"]');
		const count = await radios.count();
		let checkedIdx = 0;
		for (let i = 0; i < count; i += 1) {
			if ((await radios.nth(i).getAttribute('aria-checked')) === 'true') {
				checkedIdx = i;
				break;
			}
		}
		await radios.nth(checkedIdx).focus();
		await page.keyboard.press('ArrowRight');
		const expected = checkedIdx < count - 1 ? checkedIdx + 1 : checkedIdx;
		await expect(radios.nth(expected)).toBeFocused();
	});
});
