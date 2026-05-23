<script lang="ts" module>
	export type ThemePreset = {
		key: string;
		name: string;
		tagline: string;
		primary: string;
	};

	export const THEMES: ThemePreset[] = [
		{ key: 'default', name: 'Default', tagline: 'Cobalt blue', primary: '25 91 255' },
		{ key: 'petrol', name: 'Petrol', tagline: 'Vibrant cyan-petrol', primary: '6 148 178' },
		{ key: 'indigo', name: 'Indigo', tagline: 'Vibrant blue-violet', primary: '99 102 241' },
		{ key: 'pine', name: 'Pine', tagline: 'Vibrant emerald', primary: '5 150 105' },
		{ key: 'wine', name: 'Wine', tagline: 'Vibrant rose-burgundy', primary: '225 29 72' },
		{ key: 'bronze', name: 'Bronze', tagline: 'Vibrant orange-bronze', primary: '234 88 12' },
		{ key: 'graphite', name: 'Graphite', tagline: 'Sophisticated steel', primary: '100 116 139' }
	];

	const DEFAULT_KEY = 'default';

	export function applyPalette(t: ThemePreset): void {
		const html = document.documentElement;
		for (const x of THEMES) html.classList.remove(`theme-${x.key}`);
		if (t.key !== DEFAULT_KEY) html.classList.add(`theme-${t.key}`);
	}

	export function getActiveThemeKey(): string {
		return DEFAULT_KEY;
	}

	export function hydratePalette(): void {
		applyPalette(THEMES[0]);
	}
</script>

<script lang="ts">
	import { PaletteIcon, CheckIcon, DownloadSimpleIcon } from 'phosphor-svelte';
	import { Button, Divider, Menu } from 'sveltastic-ui';

	let activeKey = $state<string>(DEFAULT_KEY);

	$effect(() => {
		activeKey = getActiveThemeKey();
	});

	function pick(t: ThemePreset): void {
		applyPalette(t);
		activeKey = t.key;
	}

	const TOKEN_VARS = [
		'--primary',
		'--warn',
		'--danger',
		'--success',
		'--info',
		'--background',
		'--text',
		'--on-accent',
		'--gray-1',
		'--gray-2',
		'--gray-3',
		'--gray-4',
		'--shadow-opacity',
		'--background-opacity',
		'--dark'
	];

	function readVar(name: string, scope: HTMLElement): string {
		return getComputedStyle(scope).getPropertyValue(name).trim();
	}

	function snapshotTheme(themeKey: string, mode: 'light' | 'dark'): Record<string, string> {
		const probe = document.createElement('div');
		probe.style.position = 'absolute';
		probe.style.visibility = 'hidden';
		probe.style.pointerEvents = 'none';
		probe.setAttribute('data-theme', mode);
		if (themeKey !== DEFAULT_KEY) probe.classList.add(`theme-${themeKey}`);
		document.body.appendChild(probe);
		const out: Record<string, string> = {};
		for (const v of TOKEN_VARS) {
			const value = readVar(v, probe);
			if (value) out[v] = value;
		}
		document.body.removeChild(probe);
		return out;
	}

	function buildTokensCss(): string {
		const out: string[] = [];
		out.push('/* sveltastic-ui — generated theme tokens (live snapshot).');
		out.push(' * Six fully designed themes — each with its own primary, semantic palette,');
		out.push(' * tinted greyscale, background and text, in both light and dark.');
		out.push(' */');
		out.push('');

		for (const t of THEMES) {
			const lightSel = t.key === DEFAULT_KEY ? ':root' : `.theme-${t.key}`;
			const darkSel =
				t.key === DEFAULT_KEY ? `[data-theme='dark']` : `[data-theme='dark'].theme-${t.key}`;
			const light = snapshotTheme(t.key, 'light');
			const dark = snapshotTheme(t.key, 'dark');
			out.push(`/* ── ${t.name} — ${t.tagline} ── */`);
			out.push(`${lightSel} {`);
			for (const [k, v] of Object.entries(light)) out.push(`\t${k}: ${v};`);
			out.push('}');
			out.push(`${darkSel} {`);
			for (const [k, v] of Object.entries(dark)) out.push(`\t${k}: ${v};`);
			out.push('}');
			out.push('');
		}
		return out.join('\n');
	}

	function download(): void {
		const css = buildTokensCss();
		const blob = new Blob([css], { type: 'text/css;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'tokens.css';
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	}
</script>

<Menu placement="bottom-end" offset={8} popupRole="dialog" closeOnSelect={false}>
	{#snippet trigger(open)}
		<Button
			variant="border"
			color="dark"
			size="small"
			iconOnly
			active={open}
			aria-label="Pick theme"
		>
			<PaletteIcon size={18} weight="bold" />
		</Button>
	{/snippet}

	{#snippet children(close)}
		<div class="palette">
			<header class="palette__head">
				<span class="palette__title">Theme</span>
				<Button
					variant="flat"
					color="primary"
					size="mini"
					onclick={() => {
						download();
						close();
					}}
				>
					<DownloadSimpleIcon size={12} weight="bold" />
					tokens.css
				</Button>
			</header>

			<Divider />

			<ul class="palette__list" role="listbox" aria-label="Themes">
				{#each THEMES as t (t.key)}
					{@const isActive = activeKey === t.key}
					<li>
						<Button
							variant={isActive ? 'flat' : 'transparent'}
							color={isActive ? 'primary' : 'dark'}
							size="medium"
							block
							onclick={() => {
								pick(t);
								close();
							}}
							aria-selected={isActive}
						>
							<span class="palette__row">
								<span
									class="palette__swatch"
									style:background={`rgb(${t.primary})`}
									aria-hidden="true"
								></span>
								<span class="palette__meta">
									<strong>{t.name}</strong>
									<small>{t.tagline}</small>
								</span>
								{#if isActive}
									<CheckIcon size={14} weight="bold" />
								{/if}
							</span>
						</Button>
					</li>
				{/each}
			</ul>
		</div>
	{/snippet}
</Menu>

<style>
	.palette {
		min-width: 260px;
		padding: 4px;
	}
	.palette__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 4px 8px 8px;
	}
	.palette > :global(.divider) {
		margin: 0 0 4px;
	}
	.palette__title {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.65;
		font-weight: 600;
	}
	.palette__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.palette__row {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		min-width: 0;
	}
	.palette__swatch {
		flex: none;
		width: 24px;
		height: 24px;
		border-radius: 7px;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.12);
	}
	.palette__meta {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		min-width: 0;
		gap: 1px;
		text-align: left;
	}
	.palette__meta strong {
		font-weight: 600;
		font-size: 0.86rem;
		line-height: 1.2;
	}
	.palette__meta small {
		font-size: 0.7rem;
		opacity: 0.62;
		line-height: 1.2;
	}
</style>
