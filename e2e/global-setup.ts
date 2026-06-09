import { request } from '@playwright/test';
import { DOC_ROUTES } from './_helpers';

// Warm the dev server's compile cache sequentially so the parallel suite never races first-compile
// of an uncompiled route (the source of cold-start goto timeouts under 4 concurrent workers).
export default async function globalSetup(): Promise<void> {
	const ctx = await request.newContext({ baseURL: 'http://localhost:5001' });
	for (const route of DOC_ROUTES) {
		for (let attempt = 0; attempt < 5; attempt += 1) {
			try {
				const res = await ctx.get(`/docs/${route}`, { timeout: 60_000 });
				if (res.ok()) break;
			} catch {
				await new Promise((r) => setTimeout(r, 1500));
			}
		}
	}
	await ctx.dispose();
}
