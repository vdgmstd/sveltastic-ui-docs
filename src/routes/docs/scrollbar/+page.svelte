<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import DefaultScrollbar from '../../_playground/examples/scrollbar/DefaultScrollbar.svelte';
	import LiveStateScrollbar from '../../_playground/examples/scrollbar/LiveStateScrollbar.svelte';
	import AlwaysVisibleScrollbar from '../../_playground/examples/scrollbar/AlwaysVisibleScrollbar.svelte';
	import BrandScrollbar from '../../_playground/examples/scrollbar/BrandScrollbar.svelte';
	import TrackScrollbar from '../../_playground/examples/scrollbar/TrackScrollbar.svelte';
	import HorizontalScrollbar from '../../_playground/examples/scrollbar/HorizontalScrollbar.svelte';

	import defaultSrc from '../../_playground/examples/scrollbar/DefaultScrollbar.svelte?raw';
	import liveStateSrc from '../../_playground/examples/scrollbar/LiveStateScrollbar.svelte?raw';
	import alwaysSrc from '../../_playground/examples/scrollbar/AlwaysVisibleScrollbar.svelte?raw';
	import brandSrc from '../../_playground/examples/scrollbar/BrandScrollbar.svelte?raw';
	import trackSrc from '../../_playground/examples/scrollbar/TrackScrollbar.svelte?raw';
	import horizontalSrc from '../../_playground/examples/scrollbar/HorizontalScrollbar.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.scrollbar.default.label', hintKey: 'playground.scrollbar.default.hint', Component: DefaultScrollbar, src: defaultSrc },
		{ labelKey: 'playground.scrollbar.liveState.label', hintKey: 'playground.scrollbar.liveState.hint', Component: LiveStateScrollbar, src: liveStateSrc },
		{ labelKey: 'playground.scrollbar.alwaysVisible.label', hintKey: 'playground.scrollbar.alwaysVisible.hint', Component: AlwaysVisibleScrollbar, src: alwaysSrc },
		{ labelKey: 'playground.scrollbar.brand.label', hintKey: 'playground.scrollbar.brand.hint', Component: BrandScrollbar, src: brandSrc },
		{ labelKey: 'playground.scrollbar.track.label', hintKey: 'playground.scrollbar.track.hint', Component: TrackScrollbar, src: trackSrc },
		{ labelKey: 'playground.scrollbar.horizontal.label', hintKey: 'playground.scrollbar.horizontal.hint', Component: HorizontalScrollbar, src: horizontalSrc }
	];
</script>

<DocHeader category="Styling" />

<header class="section__header">
	<h2>{t('playground.scrollbar.title')}</h2>
	<p>{t('playground.scrollbar.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={t(block.hintKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<div class="block">
	<h3>{t('playground.scrollbar.variables.label')}</h3>
	<p class="muted">{t('playground.scrollbar.variables.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Variable</th><th>Default</th><th>Purpose</th></tr>
		</thead>
		<tbody>
			<tr><td><code>--scrollbar-thumb</code></td><td><code>transparent</code></td><td>{t('playground.scrollbar.variables.thumb')}</td></tr>
			<tr><td><code>--scrollbar-thumb-hover</code></td><td><code>rgb(var(--text) / 0.35)</code></td><td>{t('playground.scrollbar.variables.thumbHover')}</td></tr>
			<tr><td><code>--scrollbar-track</code></td><td><code>transparent</code></td><td>{t('playground.scrollbar.variables.track')}</td></tr>
		</tbody>
	</table>
</div>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }

	.block { margin-bottom: 2rem; }
	.muted { font-size: 0.85rem; opacity: 0.7; margin: 0.25rem 0 0.75rem; }

	.vars {
		width: 100%;
		max-width: 720px;
		border-collapse: collapse;
		font-size: 0.85rem;
	}
	.vars th, .vars td {
		text-align: left;
		padding: 0.45rem 0.6rem;
		border-bottom: 1px solid rgb(var(--gray-3));
		vertical-align: top;
	}
	.vars th { font-weight: 600; opacity: 0.7; }
	.vars code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		background: rgb(var(--gray-2));
		padding: 0.05rem 0.35rem;
		border-radius: 4px;
		white-space: nowrap;
	}
</style>
