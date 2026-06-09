<script lang="ts">
	import type { Component } from 'svelte';
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
	import CustomIconsInputNumber from '../../_playground/examples/input-number/CustomIconsInputNumber.svelte';
	import ChildInputNumber from '../../_playground/examples/input-number/ChildInputNumber.svelte';
	import AnimationInputNumber from '../../_playground/examples/input-number/AnimationInputNumber.svelte';
	import EventsInputNumber from '../../_playground/examples/input-number/EventsInputNumber.svelte';

	import basicSrc from '../../_playground/examples/input-number/BasicInputNumber.svelte?raw';
	import stepBoundsSrc from '../../_playground/examples/input-number/StepBoundsInputNumber.svelte?raw';
	import colorsSrc from '../../_playground/examples/input-number/ColorsInputNumber.svelte?raw';
	import splitColorsSrc from '../../_playground/examples/input-number/SplitColorsInputNumber.svelte?raw';
	import sizesSrc from '../../_playground/examples/input-number/SizesInputNumber.svelte?raw';
	import shapesSrc from '../../_playground/examples/input-number/ShapesInputNumber.svelte?raw';
	import statesSrc from '../../_playground/examples/input-number/StatesInputNumber.svelte?raw';
	import blockSrc from '../../_playground/examples/input-number/BlockInputNumber.svelte?raw';
	import customIconsSrc from '../../_playground/examples/input-number/CustomIconsInputNumber.svelte?raw';
	import childSrc from '../../_playground/examples/input-number/ChildInputNumber.svelte?raw';
	import animationSrc from '../../_playground/examples/input-number/AnimationInputNumber.svelte?raw';
	import eventsSrc from '../../_playground/examples/input-number/EventsInputNumber.svelte?raw';

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'number', required: false, default: '$bindable(0)', description: 'Current value. Two-way bindable.' },
		{ name: 'min', type: 'number', required: false, default: '-Infinity', description: 'Minimum value (inclusive); clamps and disables the decrement button at the floor.' },
		{ name: 'max', type: 'number', required: false, default: 'Infinity', description: 'Maximum value (inclusive); clamps and disables the increment button at the ceiling.' },
		{ name: 'step', type: 'number', required: false, default: '1', description: 'Increment step. Used by the buttons, native ↑/↓ keys, and long-press repeat.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Visual size: 'xl' | 'large' | 'medium' | 'small' | 'mini'." },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Border-radius shape: 'default' | 'circle' | 'square'." },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container width.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled — buttons and field inert.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Read-only — buttons and field inert; value cannot change.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Field accent color — drives the focus ripple and outline.' },
		{ name: 'incrementColor', type: 'Color', required: false, default: null, description: 'Color for the + button hover / press tint. Falls back to color.' },
		{ name: 'decrementColor', type: 'Color', required: false, default: null, description: 'Color for the − button hover / press tint. Falls back to color.' },
		{ name: 'animationDuration', type: 'number', required: false, default: '500', description: 'Tween duration (ms) for the rolling digits. Same time regardless of step.' },
		{ name: 'onValueChange', type: '(value: number) => void', required: false, default: null, description: 'Fires on every committed value change (after clamping).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root <div>.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged root props (classes, data-*, style, ref) and render your own root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place InputNumber.Decrement, InputNumber.Field and InputNumber.Increment here.' }
	];

	const fieldApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the spinbutton field (→ aria-label). Use when no visible label is wired via labelId.' },
		{ name: 'labelId', type: 'string', required: false, default: null, description: 'Id of an external visible label element, wired to the field via aria-labelledby.' },
		{ name: 'ref', type: 'HTMLInputElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the underlying <input>.' }
	];

	const incrementApi: ApiProp[] = [
		{ name: 'incrementLabel', type: 'string', required: false, default: "'Increment'", description: 'Aria-label for the increment button.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own button element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Glyph rendered inside the button. Defaults to a bold plus.' }
	];

	const decrementApi: ApiProp[] = [
		{ name: 'decrementLabel', type: 'string', required: false, default: "'Decrement'", description: 'Aria-label for the decrement button.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own button element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Glyph rendered inside the button. Defaults to a bold minus.' }
	];

	type Block = { labelKey: string; descriptionKey?: string; Component: Component; src: string };

	const blocks: Block[] = [
		{ labelKey: 'playground.inputNumber.basic.label', Component: BasicInputNumber, src: basicSrc },
		{ labelKey: 'playground.inputNumber.stepBounds.label', Component: StepBoundsInputNumber, src: stepBoundsSrc },
		{ labelKey: 'playground.inputNumber.colors.label', Component: ColorsInputNumber, src: colorsSrc },
		{ labelKey: 'playground.inputNumber.splitColors.label', Component: SplitColorsInputNumber, src: splitColorsSrc },
		{ labelKey: 'playground.inputNumber.sizes.label', Component: SizesInputNumber, src: sizesSrc },
		{ labelKey: 'playground.inputNumber.shapes.label', Component: ShapesInputNumber, src: shapesSrc },
		{ labelKey: 'playground.inputNumber.states.label', Component: StatesInputNumber, src: statesSrc },
		{ labelKey: 'playground.inputNumber.states.block', Component: BlockInputNumber, src: blockSrc },
		{ labelKey: 'playground.inputNumber.customIcons.label', descriptionKey: 'playground.inputNumber.customIcons.hint', Component: CustomIconsInputNumber, src: customIconsSrc },
		{ labelKey: 'playground.inputNumber.child.label', descriptionKey: 'playground.inputNumber.child.hint', Component: ChildInputNumber, src: childSrc },
		{ labelKey: 'playground.inputNumber.animation.label', Component: AnimationInputNumber, src: animationSrc },
		{ labelKey: 'playground.inputNumber.events.label', descriptionKey: 'playground.inputNumber.events.hint', Component: EventsInputNumber, src: eventsSrc }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.inputNumber.title')}</h2>
	<p>{t('playground.inputNumber.description')}</p>
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
	title="InputNumber.Root"
	api={rootApi}
	hint="The shell. All numeric / visual config and bind:value + onValueChange live here and flow to the parts via context. Compose it with InputNumber.Decrement, InputNumber.Field and InputNumber.Increment. Publishes data-block / data-disabled / data-readonly / data-state hooks. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="InputNumber.Field"
	api={fieldApi}
	hint="The native spinbutton <input> with the focus ripple. value, type, role, disabled, readonly and the input handlers come from InputNumber.Root — set the accessible name here via ariaLabel or labelId. Plus the remaining native input attributes."
/>
<ApiTable
	title="InputNumber.Increment"
	api={incrementApi}
	hint="The + stepper button. Click to bump by step, press-and-hold to auto-repeat; disabled at max. Pass a glyph as children to replace the default plus. Plus every native HTML button attribute (except type / disabled / children)."
/>
<ApiTable
	title="InputNumber.Decrement"
	api={decrementApi}
	hint="The − stepper button. Click to bump by step, press-and-hold to auto-repeat; disabled at min. Pass a glyph as children to replace the default minus. Plus every native HTML button attribute (except type / disabled / children)."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
