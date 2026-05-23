<script lang="ts" module>
	import type { Component } from 'svelte';

	export type DemoBlockVariant = 'compact' | 'spacious';

	export type DemoBlockProps = {
		/** Section heading (already-translated). */
		label: string;
		/** Optional muted line below the heading (already-translated). */
		description?: string;
		/** Already-translated label for the `<details>` toggle. */
		codeLabel: string;
		/** The example component, imported from `examples/<doc-name>/`. */
		Component: Component;
		/** Same example imported with `?raw` for display in the `<details>` block. */
		src: string;
		/** Stage layout preset. `'spacious'` adds room for hanging children (Card actions). */
		variant?: DemoBlockVariant;
	};
</script>

<script lang="ts">
	import { Divider } from 'sveltastic-ui';

	let {
		label,
		description,
		codeLabel,
		Component,
		src,
		variant = 'compact'
	}: DemoBlockProps = $props();
</script>

<div class="block">
	<h3>{label}</h3>
	{#if description}
		<p class="muted">{description}</p>
	{/if}
	<div class="stage stage--{variant}">
		<Component />
	</div>
	<details class="example">
		<summary>{codeLabel}</summary>
		<Divider />
		<pre class="example__code"><code>{src}</code></pre>
	</details>
</div>

<style>
	.block {
		margin-bottom: 2rem;
	}
	.block > h3 {
		margin: 0 0 0.75rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.6;
	}
	.muted {
		margin: -0.25rem 0 1rem;
		opacity: 0.7;
		font-size: 0.85rem;
	}

	.stage {
		background: transparent;
		border: 1px solid rgb(var(--text) / 0.1);
	}
	.stage--compact {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem;
		border-radius: 16px;
	}
	.stage--spacious {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 2.25rem 1rem 3rem;
		border-radius: 24px;
	}

	.example {
		margin-top: 1rem;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 12px;
		background: rgb(var(--gray-1));
		overflow: hidden;
	}
	.example > summary {
		list-style: none;
		cursor: pointer;
		padding: 0.55rem 0.85rem;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.7;
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.example > summary::-webkit-details-marker {
		display: none;
	}
	.example > summary::before {
		content: '';
		width: 0;
		height: 0;
		border-left: 5px solid currentColor;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent;
		transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.example[open] > summary::before {
		transform: rotate(90deg);
	}
	.example__code {
		margin: 0;
		padding: 0.85rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		line-height: 1.55;
		overflow-x: auto;
		background: rgb(var(--gray-2));
	}
	.example__code code {
		font: inherit;
		white-space: pre;
		color: inherit;
	}
</style>
