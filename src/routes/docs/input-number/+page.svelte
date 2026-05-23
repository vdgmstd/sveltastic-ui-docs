<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicInputNumber from '../../_playground/examples/input-number/BasicInputNumber.svelte';
	import StepBoundsInputNumber from '../../_playground/examples/input-number/StepBoundsInputNumber.svelte';
	import ColorsInputNumber from '../../_playground/examples/input-number/ColorsInputNumber.svelte';
	import SplitColorsInputNumber from '../../_playground/examples/input-number/SplitColorsInputNumber.svelte';
	import SizesInputNumber from '../../_playground/examples/input-number/SizesInputNumber.svelte';
	import ShapesInputNumber from '../../_playground/examples/input-number/ShapesInputNumber.svelte';
	import StatesInputNumber from '../../_playground/examples/input-number/StatesInputNumber.svelte';
	import BlockInputNumber from '../../_playground/examples/input-number/BlockInputNumber.svelte';
	import AnimationInputNumber from '../../_playground/examples/input-number/AnimationInputNumber.svelte';

	import basicSrc from '../../_playground/examples/input-number/BasicInputNumber.svelte?raw';
	import stepBoundsSrc from '../../_playground/examples/input-number/StepBoundsInputNumber.svelte?raw';
	import colorsSrc from '../../_playground/examples/input-number/ColorsInputNumber.svelte?raw';
	import splitColorsSrc from '../../_playground/examples/input-number/SplitColorsInputNumber.svelte?raw';
	import sizesSrc from '../../_playground/examples/input-number/SizesInputNumber.svelte?raw';
	import shapesSrc from '../../_playground/examples/input-number/ShapesInputNumber.svelte?raw';
	import statesSrc from '../../_playground/examples/input-number/StatesInputNumber.svelte?raw';
	import blockSrc from '../../_playground/examples/input-number/BlockInputNumber.svelte?raw';
	import animationSrc from '../../_playground/examples/input-number/AnimationInputNumber.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.inputNumber.basic.label', Component: BasicInputNumber, src: basicSrc },
		{ labelKey: 'playground.inputNumber.stepBounds.label', Component: StepBoundsInputNumber, src: stepBoundsSrc },
		{ labelKey: 'playground.inputNumber.colors.label', Component: ColorsInputNumber, src: colorsSrc },
		{ labelKey: 'playground.inputNumber.splitColors.label', Component: SplitColorsInputNumber, src: splitColorsSrc },
		{ labelKey: 'playground.inputNumber.sizes.label', Component: SizesInputNumber, src: sizesSrc },
		{ labelKey: 'playground.inputNumber.shapes.label', Component: ShapesInputNumber, src: shapesSrc },
		{ labelKey: 'playground.inputNumber.states.label', Component: StatesInputNumber, src: statesSrc },
		{ labelKey: 'playground.inputNumber.states.block', Component: BlockInputNumber, src: blockSrc },
		{ labelKey: 'playground.inputNumber.animation.label', Component: AnimationInputNumber, src: animationSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import inputNumberApi from 'sveltastic-ui/components/InputNumber/InputNumber.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.inputNumber.title')}</h2>
	<p>{t('playground.inputNumber.description')}</p>
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
	title="InputNumber"
	api={inputNumberApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <inputnumber>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
