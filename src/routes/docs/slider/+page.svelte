<script lang="ts">
	import type { Component } from 'svelte';
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicSlider from '../../_playground/examples/slider/BasicSlider.svelte';
	import ComposedSlider from '../../_playground/examples/slider/ComposedSlider.svelte';
	import ComposedRangeSlider from '../../_playground/examples/slider/ComposedRangeSlider.svelte';
	import SizesSlider from '../../_playground/examples/slider/SizesSlider.svelte';
	import RangeSlider from '../../_playground/examples/slider/RangeSlider.svelte';
	import TooltipSlider from '../../_playground/examples/slider/TooltipSlider.svelte';
	import AlwaysTooltipSlider from '../../_playground/examples/slider/AlwaysTooltipSlider.svelte';
	import FormatSlider from '../../_playground/examples/slider/FormatSlider.svelte';
	import TicksSlider from '../../_playground/examples/slider/TicksSlider.svelte';
	import ColorsSlider from '../../_playground/examples/slider/ColorsSlider.svelte';
	import StatesSlider from '../../_playground/examples/slider/StatesSlider.svelte';
	import EventsSlider from '../../_playground/examples/slider/EventsSlider.svelte';

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import basicSrc from '../../_playground/examples/slider/BasicSlider.svelte?raw';
	import composedSrc from '../../_playground/examples/slider/ComposedSlider.svelte?raw';
	import composedRangeSrc from '../../_playground/examples/slider/ComposedRangeSlider.svelte?raw';
	import sizesSrc from '../../_playground/examples/slider/SizesSlider.svelte?raw';
	import rangeSrc from '../../_playground/examples/slider/RangeSlider.svelte?raw';
	import tooltipSrc from '../../_playground/examples/slider/TooltipSlider.svelte?raw';
	import alwaysTooltipSrc from '../../_playground/examples/slider/AlwaysTooltipSlider.svelte?raw';
	import formatSrc from '../../_playground/examples/slider/FormatSlider.svelte?raw';
	import ticksSrc from '../../_playground/examples/slider/TicksSlider.svelte?raw';
	import colorsSrc from '../../_playground/examples/slider/ColorsSlider.svelte?raw';
	import statesSrc from '../../_playground/examples/slider/StatesSlider.svelte?raw';
	import eventsSrc from '../../_playground/examples/slider/EventsSlider.svelte?raw';

	const t = (key: string) => i18n.t(key);

	type Block = {
		labelKey: string;
		descriptionKey?: string;
		Component: Component<Record<string, never>, any, any>;
		src: string;
	};

	const blocks: Block[] = [
		{ labelKey: 'playground.slider.basic.label', Component: BasicSlider, src: basicSrc },
		{ labelKey: 'playground.slider.composed.label', descriptionKey: 'playground.slider.composed.hint', Component: ComposedSlider, src: composedSrc },
		{ labelKey: 'playground.slider.composedRange.label', descriptionKey: 'playground.slider.composedRange.hint', Component: ComposedRangeSlider, src: composedRangeSrc },
		{ labelKey: 'playground.slider.sizes.label', Component: SizesSlider, src: sizesSrc },
		{ labelKey: 'playground.slider.range.label', Component: RangeSlider, src: rangeSrc },
		{ labelKey: 'playground.slider.tooltip.label', Component: TooltipSlider, src: tooltipSrc },
		{ labelKey: 'playground.slider.always.label', Component: AlwaysTooltipSlider, src: alwaysTooltipSrc },
		{ labelKey: 'playground.slider.format.label', Component: FormatSlider, src: formatSrc },
		{ labelKey: 'playground.slider.ticks.label', Component: TicksSlider, src: ticksSrc },
		{ labelKey: 'playground.slider.colors.label', Component: ColorsSlider, src: colorsSrc },
		{ labelKey: 'playground.slider.states.label', Component: StatesSlider, src: statesSrc },
		{ labelKey: 'playground.slider.events.label', descriptionKey: 'playground.slider.events.hint', Component: EventsSlider, src: eventsSrc }
	];
	const rootApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'multiple'", required: false, default: "'single'", description: "Mode. 'single' → value is a number, 'multiple' → value is a number[] (range with two thumbs)." },
		{ name: 'value', type: 'number | number[]', required: false, default: '$bindable(0)', description: 'Bound value — number in single mode, number[] in multiple mode. Two-way bindable.' },
		{ name: 'min', type: 'number', required: false, default: '0', description: 'Minimum value.' },
		{ name: 'max', type: 'number', required: false, default: '100', description: 'Maximum value.' },
		{ name: 'step', type: 'number', required: false, default: '1', description: 'Step increment for keyboard, drag and ticks.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Visual size: 'mini' | 'small' | 'medium' | 'large' | 'xl'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette color (name or CSS color) for the active fill, thumb and tooltip.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the control. Publishes the data-disabled hook.' },
		{ name: 'ticks', type: 'boolean', required: false, default: 'false', description: 'Render a step tick on the track at every step.' },
		{ name: 'showTooltip', type: 'boolean', required: false, default: 'false', description: 'Show the numeric tooltip on hover / focus.' },
		{ name: 'alwaysShowTooltip', type: 'boolean', required: false, default: 'false', description: 'Always show the tooltip, ignoring hover / focus. Publishes the data-always-tooltip hook.' },
		{ name: 'formatValue', type: '(value: number) => string', required: false, default: null, description: 'Format the tooltip (and aria-valuetext) value.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the single-mode thumb input.' },
		{ name: 'ariaLabelMin', type: 'string', required: false, default: null, description: 'Accessible name for the low / start thumb in range mode.' },
		{ name: 'ariaLabelMax', type: 'string', required: false, default: null, description: 'Accessible name for the high / end thumb in range mode.' },
		{ name: 'onValueChange', type: '(value: number | number[]) => void', required: false, default: null, description: 'Fires with the next value on every change (kit controlled-state idiom).' },
		{ name: 'onValueCommit', type: '(value: number | number[]) => void', required: false, default: null, description: 'Fires once on pointer-up / keyboard commit with the settled value.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root element.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Composition slot — place Slider.Track and parts here. Omit to render the default composition.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged props and render your own root element.' }
	];

	const trackApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Track contents — Slider.Range / Tick / Thumb / Tooltip.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own rail element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the rail element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the rail.' }
	];

	const rangeApi: ApiProp[] = [
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own range element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the active segment element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the active segment.' }
	];

	const thumbApi: ApiProp[] = [
		{ name: 'index', type: '0 | 1', required: false, default: '0', description: 'Thumb index — 0 (low / single) or 1 (high, range only).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: "Accessible name override for this thumb. Falls back to the Root ariaLabel / ariaLabelMin / ariaLabelMax." },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged input props and render your own range input.' },
		{ name: 'ref', type: 'HTMLInputElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the native range input.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the native input.' }
	];

	const tickApi: ApiProp[] = [
		{ name: 'index', type: 'number', required: true, default: null, description: 'Index into the Root tick list (value = min + index·step). Publishes the data-bounded hook when inside the active region.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own tick element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the tick element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the tick.' }
	];

	const tooltipApi: ApiProp[] = [
		{ name: 'index', type: '0 | 1', required: false, default: '0', description: 'Bound thumb index — 0 (low / single) or 1 (high, range only).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom tooltip content. Defaults to the formatted thumb value.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own tooltip element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the tooltip element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the tooltip.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.slider.title')}</h2>
	<p>{t('playground.slider.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.descriptionKey ? t(block.descriptionKey) : undefined}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Slider.Root"
	api={rootApi}
	hint="The shell. All value / visual config and bind:value + onValueChange / onValueCommit live here and flow to the parts via context. type='single' → value: number, type='multiple' → value: number[]. Slider.Root with no children renders the default composition (Track / Range / Thumb / Tick / Tooltip); pass children to compose the parts yourself. Publishes data-disabled / data-range / data-always-tooltip hooks. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="Slider.Track"
	api={trackApi}
	hint="The rail container — holds Slider.Range / Tick / Thumb / Tooltip. Plus every native HTML attribute forwarded to the rail element."
/>
<ApiTable
	title="Slider.Range"
	api={rangeApi}
	hint="The active (filled) segment between the thumbs. Plus every native HTML attribute forwarded to the segment element."
/>
<ApiTable
	title="Slider.Thumb"
	api={thumbApi}
	hint="The draggable handle (one native range input). index 0 = low / single, 1 = high (range only). Plus every native HTML input attribute forwarded."
/>
<ApiTable
	title="Slider.Tick"
	api={tickApi}
	hint="A single step tick on the track. Plus every native HTML attribute forwarded to the tick element."
/>
<ApiTable
	title="Slider.Tooltip"
	api={tooltipApi}
	hint="The numeric tooltip bound to a thumb. index 0 = low / single, 1 = high. Plus every native HTML attribute forwarded to the tooltip element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
