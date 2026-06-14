import { test, expect } from '@playwright/test';
import { collectErrors } from './_helpers';

// Avatar behavioral parity — image probe drives data-status, fallback shows initials while
// loading/errored and hides on load, broken image swaps to the fallback, badge renders at
// its corner, and Avatar.Group overlaps N members with a +N overflow counter.
test.describe('Avatar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/docs/avatar', { waitUntil: 'networkidle' });
	});

	test('text avatar renders its initials in the fallback while no image is set', async ({ page }) => {
		const sink = collectErrors(page);
		// TextAvatar "ABCDE": image-less avatar → fallback visible, root stays in loading status.
		const fallback = page.locator('[data-avatar-fallback]').filter({ hasText: /^ABCDE$/ }).first();
		await expect(fallback).toBeVisible();
		await expect(fallback).toHaveText('ABCDE');
		const root = fallback.locator('xpath=ancestor::*[@data-testid="avatar"]').first();
		await expect(root).toHaveAttribute('data-status', 'loading');
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('a loaded image hides the fallback and the <img> becomes visible', async ({ page }) => {
		// StatusAvatar ok-case: /avatars/1.jpg resolves → data-status flips to loaded.
		const root = page.locator('[data-testid="avatar"][data-status="loaded"]').first();
		const img = root.locator('[data-avatar-image]');
		await expect(img).toBeVisible();
		await expect(img).toHaveAttribute('data-status', 'loaded');
		// fallback is display:none once the image loaded.
		await expect(root.locator('[data-avatar-fallback]')).toBeHidden();
	});

	test('a broken image keeps the fallback visible and marks the avatar errored', async ({ page }) => {
		const sink = collectErrors(page);
		// StatusAvatar fail-case probes /avatars/does-not-exist.jpg → onerror → status 'error'.
		const root = page.locator('[data-testid="avatar"][data-status="error"]').first();
		const fallback = root.locator('[data-avatar-fallback]');
		await expect(fallback).toBeVisible();
		await expect(fallback).toHaveText('NA');
		// the <img> stays display:none on error so only the fallback shows.
		await expect(root.locator('[data-avatar-image]')).toBeHidden();
		// the broken-image network 404 is not a kit defect; helper ignores it.
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});

	test('fallback font scales via --n to the measured letter count', async ({ page }) => {
		// TextAvatar renders A / AB / ABC … each fallback exposes its letter count on --n.
		const fallbacks = page.locator('[data-avatar-fallback]');
		const one = fallbacks.filter({ hasText: /^A$/ }).first();
		const four = fallbacks.filter({ hasText: /^ABCD$/ }).first();
		await expect(one).toHaveAttribute('style', /--n:\s*1\b/);
		await expect(four).toHaveAttribute('style', /--n:\s*4\b/);
	});

	test('badge renders at its declared corner with data-position', async ({ page }) => {
		// BadgeAvatar: distinct corners. Scope to the badge whose owning avatar shows "TL".
		const tlRoot = page
			.locator('[data-testid="avatar"]')
			.filter({ hasText: 'TL' })
			.first();
		const badge = tlRoot.locator('[data-avatar-badge]');
		await expect(badge).toHaveAttribute('data-position', 'top-left');
		await expect(badge).toBeVisible();
		// content badges flip data-filled; the bare TL dot is not filled.
		await expect(badge).not.toHaveAttribute('data-filled', '');
	});

	test('a badge with children renders as a filled pill', async ({ page }) => {
		// BadgeAvatar second row: a badge wrapping <span>12</span> is filled.
		const filled = page.locator('[data-avatar-badge][data-filled]').filter({ hasText: '12' }).first();
		await expect(filled).toBeVisible();
		await expect(filled).toHaveAttribute('data-filled', '');
		await expect(filled).toHaveText('12');
	});

	test('Avatar.Group with max renders a +N overflow counter on the last visible member', async ({ page }) => {
		// GroupAvatar first group: 6 members, max=3 → 3 visible, overflow shows "+3" (6 − 3 hidden).
		const group = page.locator('[data-testid="avatar-group"]').first();
		const members = group.locator('[data-testid="avatar"]');
		await expect(members).toHaveCount(6);
		// members past max are display:none (data-hidden), so 3 are visible.
		await expect(group.locator('[data-testid="avatar"]:not([data-hidden])')).toHaveCount(3);
		const overflow = group.locator('.avatar__latest');
		await expect(overflow).toHaveCount(1);
		await expect(overflow).toHaveText('+3');
		await expect(overflow).toHaveAttribute('aria-label', '+3 more');
	});

	test('Avatar.Group without max shows every member and no overflow counter', async ({ page }) => {
		// GroupAvatar last group: 3 square avatars, no max → all visible, no +N.
		const groups = page.locator('[data-testid="avatar-group"]');
		const last = groups.last();
		await expect(last.locator('[data-testid="avatar"]:not([data-hidden])')).toHaveCount(3);
		await expect(last.locator('.avatar__latest')).toHaveCount(0);
	});

	test('grouped members carry data-in-group and a float group sets data-float', async ({ page }) => {
		const floatGroup = page.locator('[data-testid="avatar-group"][data-float]').first();
		await expect(floatGroup).toHaveAttribute('data-float', '');
		// Every grouped member is flagged in-group — falsifiable: drop the flag and the :not count goes > 0.
		expect(await floatGroup.locator('[data-testid="avatar"]').count()).toBeGreaterThan(0);
		await expect(floatGroup.locator('[data-testid="avatar"]:not([data-in-group])')).toHaveCount(0);
	});
});
