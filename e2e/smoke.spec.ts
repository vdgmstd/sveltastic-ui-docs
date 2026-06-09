import { test, expect } from '@playwright/test';
import { DOC_ROUTES, collectErrors, gotoHydrated } from './_helpers';

// Broad net: every documented component must mount + hydrate with no thrown error, in every engine.
for (const route of DOC_ROUTES) {
	test(`mounts clean: ${route}`, async ({ page }) => {
		const sink = collectErrors(page);
		await gotoHydrated(page, route);
		await page.waitForTimeout(150);
		expect(sink.errors, sink.errors.join('\n')).toEqual([]);
	});
}
