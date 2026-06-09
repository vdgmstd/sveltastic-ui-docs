<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import LinearProgress from '../../_playground/examples/progress/LinearProgress.svelte';
	import ColorsProgress from '../../_playground/examples/progress/ColorsProgress.svelte';
	import StripesProgress from '../../_playground/examples/progress/StripesProgress.svelte';
	import IndeterminateProgress from '../../_playground/examples/progress/IndeterminateProgress.svelte';
	import CircularProgress from '../../_playground/examples/progress/CircularProgress.svelte';
	import InteractiveProgress from '../../_playground/examples/progress/InteractiveProgress.svelte';
	import RangeProgress from '../../_playground/examples/progress/RangeProgress.svelte';
	import ChildProgress from '../../_playground/examples/progress/ChildProgress.svelte';

	import linearSrc from '../../_playground/examples/progress/LinearProgress.svelte?raw';
	import colorsSrc from '../../_playground/examples/progress/ColorsProgress.svelte?raw';
	import stripesSrc from '../../_playground/examples/progress/StripesProgress.svelte?raw';
	import indeterminateSrc from '../../_playground/examples/progress/IndeterminateProgress.svelte?raw';
	import circularSrc from '../../_playground/examples/progress/CircularProgress.svelte?raw';
	import interactiveSrc from '../../_playground/examples/progress/InteractiveProgress.svelte?raw';
	import rangeSrc from '../../_playground/examples/progress/RangeProgress.svelte?raw';
	import childSrc from '../../_playground/examples/progress/ChildProgress.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.progress.linear.label', Component: LinearProgress, src: linearSrc },
		{ labelKey: 'playground.progress.colors.label', Component: ColorsProgress, src: colorsSrc },
		{ labelKey: 'playground.progress.stripes.label', Component: StripesProgress, src: stripesSrc },
		{ labelKey: 'playground.progress.indeterminate.label', Component: IndeterminateProgress, src: indeterminateSrc },
		{ labelKey: 'playground.progress.circular.label', Component: CircularProgress, src: circularSrc },
		{ labelKey: 'playground.progress.interactive.label', Component: InteractiveProgress, src: interactiveSrc },
		{ labelKey: 'playground.progress.range.label', Component: RangeProgress, src: rangeSrc },
		{ labelKey: 'playground.progress.child.label', Component: ChildProgress, src: childSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'number | null', required: false, default: '0', description: 'Current value, clamped to [min, max]. null ⇒ indeterminate (bar slides, ring spins).' },
		{ name: 'min', type: 'number', required: false, default: '0', description: 'Lower bound for value.' },
		{ name: 'max', type: 'number', required: false, default: '100', description: 'Upper bound for value.' },
		{ name: 'shape', type: 'ProgressShape', required: false, default: "'linear'", description: "'linear' (bar) or 'circular' (ring)." },
		{ name: 'thickness', type: 'number', required: false, default: '8', description: 'Bar height (linear) or stroke width (circular), in px.' },
		{ name: 'size', type: 'number', required: false, default: '64', description: 'Diameter in px (circular only).' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent driving fill and track.' },
		{ name: 'ariaValueText', type: 'string', required: false, default: null, description: 'Spoken text overriding the computed percentage.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'ARIA label for assistive tech when no visible Progress.Label is supplied.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Progress.Track, Progress.Indicator, Progress.Label here.' }
	];

	const trackApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the track element (<div> linear / <svg> circular).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the track element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Default content rendered inside the linear track surface (e.g. an Indicator).' }
	];

	const indicatorApi: ApiProp[] = [
		{ name: 'stripes', type: 'boolean', required: false, default: 'false', description: 'Animated diagonal stripes overlay (linear, determinate only).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the indicator element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the indicator element with your own.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the label element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content rendered over the bar (linear) or centered in the ring (circular).' }
	];
</script>

<DocHeader category="Display" />

<header class="section__header">
	<h2>{t('playground.progress.title')}</h2>
	<p>{t('playground.progress.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Progress.Root"
	api={rootApi}
	hint="The progress shell. Value config + bind:value live here and flow to the parts via context; compose Progress.Track (wrapping Progress.Indicator) and optionally Progress.Label. Pass a null value for the indeterminate state. Publishes data-state / data-value / data-min / data-max / data-indeterminate / data-shape hooks. Plus every native HTML attribute forwarded to the root element."
/>
<ApiTable
	title="Progress.Track"
	api={trackApi}
	hint="The unfilled rail (linear <div>) or background ring (circular <svg>). Wrap Progress.Indicator inside it for the linear bar. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Progress.Indicator"
	api={indicatorApi}
	hint="The filled portion — the linear bar (with optional stripes) or the circular ring / indeterminate spinner. Publishes data-indeterminate / data-stripes hooks. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Progress.Label"
	api={labelApi}
	hint="Optional caption over the bar or centered in the ring. Plus every native HTML attribute forwarded to the element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
