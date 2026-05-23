<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicSlider from '../../_playground/examples/slider/BasicSlider.svelte';
	import SizesSlider from '../../_playground/examples/slider/SizesSlider.svelte';
	import RangeSlider from '../../_playground/examples/slider/RangeSlider.svelte';
	import TooltipSlider from '../../_playground/examples/slider/TooltipSlider.svelte';
	import AlwaysTooltipSlider from '../../_playground/examples/slider/AlwaysTooltipSlider.svelte';
	import FormatSlider from '../../_playground/examples/slider/FormatSlider.svelte';
	import TicksSlider from '../../_playground/examples/slider/TicksSlider.svelte';
	import ColorsSlider from '../../_playground/examples/slider/ColorsSlider.svelte';
	import StatesSlider from '../../_playground/examples/slider/StatesSlider.svelte';

	import basicSrc from '../../_playground/examples/slider/BasicSlider.svelte?raw';
	import sizesSrc from '../../_playground/examples/slider/SizesSlider.svelte?raw';
	import rangeSrc from '../../_playground/examples/slider/RangeSlider.svelte?raw';
	import tooltipSrc from '../../_playground/examples/slider/TooltipSlider.svelte?raw';
	import alwaysTooltipSrc from '../../_playground/examples/slider/AlwaysTooltipSlider.svelte?raw';
	import formatSrc from '../../_playground/examples/slider/FormatSlider.svelte?raw';
	import ticksSrc from '../../_playground/examples/slider/TicksSlider.svelte?raw';
	import colorsSrc from '../../_playground/examples/slider/ColorsSlider.svelte?raw';
	import statesSrc from '../../_playground/examples/slider/StatesSlider.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.slider.basic.label', Component: BasicSlider, src: basicSrc },
		{ labelKey: 'playground.slider.sizes.label', Component: SizesSlider, src: sizesSrc },
		{ labelKey: 'playground.slider.range.label', Component: RangeSlider, src: rangeSrc },
		{ labelKey: 'playground.slider.tooltip.label', Component: TooltipSlider, src: tooltipSrc },
		{ labelKey: 'playground.slider.always.label', Component: AlwaysTooltipSlider, src: alwaysTooltipSrc },
		{ labelKey: 'playground.slider.format.label', Component: FormatSlider, src: formatSrc },
		{ labelKey: 'playground.slider.ticks.label', Component: TicksSlider, src: ticksSrc },
		{ labelKey: 'playground.slider.colors.label', Component: ColorsSlider, src: colorsSrc },
		{ labelKey: 'playground.slider.states.label', Component: StatesSlider, src: statesSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import sliderApi from 'sveltastic-ui/components/Slider/Slider.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.slider.title')}</h2>
	<p>{t('playground.slider.description')}</p>
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
	title="Slider"
	api={sliderApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <slider>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
