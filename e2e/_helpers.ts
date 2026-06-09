import { expect, type Page } from '@playwright/test';

// Every documented component route — the broad mount/hydrate net runs across all of them.
export const DOC_ROUTES = [
	'alert', 'avatar', 'button', 'calendar', 'card', 'checkbox', 'chip', 'collapse',
	'datetime-picker', 'dialog', 'divider', 'input', 'input-number', 'list', 'menu',
	'pagination', 'progress', 'radio', 'ripple', 'segmented', 'select', 'slider',
	'switch', 'tabs', 'textarea', 'tooltip', 'upload'
] as const;

// Vite/browser noise that is not a kit defect.
const IGNORED_ERROR = /favicon|ResizeObserver loop|Failed to load resource.*404|\[vite\]/i;

export type ErrorSink = { errors: string[] };

// Attach console.error + uncaught-exception collectors; returns a live sink.
export function collectErrors(page: Page): ErrorSink {
	const sink: ErrorSink = { errors: [] };
	page.on('pageerror', (e) => sink.errors.push(`pageerror: ${e.message}`));
	page.on('console', (msg) => {
		if (msg.type() !== 'error') return;
		const text = msg.text();
		if (IGNORED_ERROR.test(text)) return;
		sink.errors.push(`console: ${text}`);
	});
	return sink;
}

// Navigate, wait for hydration, assert the document actually rendered something.
export async function gotoHydrated(page: Page, route: string): Promise<void> {
	await page.goto(`/docs/${route}`, { waitUntil: 'load' });
	await expect(page.locator('body')).toBeVisible();
}

// Read a computed style property off the first matching element.
export async function computed(page: Page, selector: string, prop: string): Promise<string> {
	return page.locator(selector).first().evaluate(
		(el, p) => getComputedStyle(el).getPropertyValue(p),
		prop
	);
}
