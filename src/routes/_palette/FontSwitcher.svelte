<script lang="ts" module>
	export type FontPreset = {
		key: string;
		name: string;
		tagline: string;
		stack: string;
	};

	const FALLBACK = `-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', Roboto, system-ui, Helvetica, Arial, sans-serif`;

	export const FONTS: FontPreset[] = [
		{
			key: 'geist',
			name: 'Geist',
			tagline: 'Vercel — modern grotesque',
			stack: `'Geist', ${FALLBACK}`
		},
		{
			key: 'manrope',
			name: 'Manrope',
			tagline: 'Humanist semi-grotesque',
			stack: `'Manrope', ${FALLBACK}`
		},
		{
			key: 'jakarta',
			name: 'Plus Jakarta Sans',
			tagline: 'Geometric with character',
			stack: `'Plus Jakarta Sans', ${FALLBACK}`
		},
		{
			key: 'public',
			name: 'Public Sans',
			tagline: 'US gov — neutral enterprise',
			stack: `'Public Sans', ${FALLBACK}`
		},
		{
			key: 'outfit',
			name: 'Outfit',
			tagline: 'Clean minimal geometric',
			stack: `'Outfit', ${FALLBACK}`
		},
		{
			key: 'bricolage',
			name: 'Bricolage Grotesque',
			tagline: 'Editorial creative',
			stack: `'Bricolage Grotesque', ${FALLBACK}`
		}
	];

	const DEFAULT_KEY = 'public';

	export function applyFont(f: FontPreset): void {
		document.documentElement.style.setProperty('--font-sans', f.stack);
	}

	export function getActiveFontKey(): string {
		return DEFAULT_KEY;
	}

	export function hydrateFont(): void {
		const f = FONTS.find((x) => x.key === DEFAULT_KEY) ?? FONTS[0];
		applyFont(f);
	}
</script>

<script lang="ts">
	import { TextAaIcon, CheckIcon } from 'phosphor-svelte';
	import { Button, Divider, Menu } from 'sveltastic-ui';

	let activeKey = $state<string>(DEFAULT_KEY);

	$effect(() => {
		activeKey = getActiveFontKey();
	});

	function pick(f: FontPreset): void {
		applyFont(f);
		activeKey = f.key;
	}
</script>

<Menu.Root placement="bottom-end" offset={8} popupRole="dialog" closeOnSelect={false}>
	<Menu.Trigger>
		{#snippet child({ props, open })}
			<Button.Root
				variant="border"
				color="dark"
				size="small"
				iconOnly
				active={open}
				aria-label="Pick font"
				{...props}
			>
				<TextAaIcon size={18} weight="bold" />
			</Button.Root>
		{/snippet}
	</Menu.Trigger>

	<Menu.Content>
		{#snippet children(close)}
			<div class="font-picker">
			<header class="font-picker__head">
				<span class="font-picker__title">Font</span>
			</header>

			<Divider.Root />

			<ul class="font-picker__list" role="listbox" aria-label="Fonts">
				{#each FONTS as f (f.key)}
					{@const isActive = activeKey === f.key}
					<li>
						<Button.Root
							variant={isActive ? 'flat' : 'transparent'}
							color={isActive ? 'primary' : 'dark'}
							size="medium"
							block
							onclick={() => {
								pick(f);
								close();
							}}
							aria-selected={isActive}
						>
							<span class="font-picker__row">
								<span class="font-picker__sample" style:font-family={f.stack} aria-hidden="true">Aa</span>
								<span class="font-picker__meta">
									<strong style:font-family={f.stack}>{f.name}</strong>
									<small>{f.tagline}</small>
								</span>
								{#if isActive}
									<CheckIcon size={14} weight="bold" />
								{/if}
							</span>
						</Button.Root>
					</li>
				{/each}
			</ul>
		</div>
		{/snippet}
	</Menu.Content>
</Menu.Root>

<style>
	.font-picker {
		min-width: 280px;
		padding: 4px;
	}
	.font-picker__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 4px 8px 8px;
	}
	.font-picker > :global(.separator) {
		margin: 0 0 4px;
	}
	.font-picker__title {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.65;
		font-weight: 600;
	}
	.font-picker__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.font-picker__row {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		min-width: 0;
	}
	.font-picker__sample {
		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background: rgb(var(--gray-2));
		font-size: 1rem;
		font-weight: 600;
		line-height: 1;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.06);
	}
	.font-picker__meta {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		min-width: 0;
		gap: 1px;
		text-align: left;
	}
	.font-picker__meta strong {
		font-weight: 600;
		font-size: 0.9rem;
		line-height: 1.2;
	}
	.font-picker__meta small {
		font-size: 0.7rem;
		opacity: 0.62;
		line-height: 1.2;
	}
</style>
