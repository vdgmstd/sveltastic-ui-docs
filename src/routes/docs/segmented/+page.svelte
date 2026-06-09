<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicSegmented from '../../_playground/examples/segmented/BasicSegmented.svelte';
	import VariantsSegmented from '../../_playground/examples/segmented/VariantsSegmented.svelte';
	import SizesSegmented from '../../_playground/examples/segmented/SizesSegmented.svelte';
	import IconsSegmented from '../../_playground/examples/segmented/IconsSegmented.svelte';
	import ColorsSegmented from '../../_playground/examples/segmented/ColorsSegmented.svelte';
	import BlockSegmented from '../../_playground/examples/segmented/BlockSegmented.svelte';
	import DisabledSegmented from '../../_playground/examples/segmented/DisabledSegmented.svelte';
	import LoopSegmented from '../../_playground/examples/segmented/LoopSegmented.svelte';
	import ChildSegmented from '../../_playground/examples/segmented/ChildSegmented.svelte';

	import basicSrc from '../../_playground/examples/segmented/BasicSegmented.svelte?raw';
	import variantsSrc from '../../_playground/examples/segmented/VariantsSegmented.svelte?raw';
	import sizesSrc from '../../_playground/examples/segmented/SizesSegmented.svelte?raw';
	import iconsSrc from '../../_playground/examples/segmented/IconsSegmented.svelte?raw';
	import colorsSrc from '../../_playground/examples/segmented/ColorsSegmented.svelte?raw';
	import blockSrc from '../../_playground/examples/segmented/BlockSegmented.svelte?raw';
	import disabledSrc from '../../_playground/examples/segmented/DisabledSegmented.svelte?raw';
	import loopSrc from '../../_playground/examples/segmented/LoopSegmented.svelte?raw';
	import childSrc from '../../_playground/examples/segmented/ChildSegmented.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.segmented.basic.label', descriptionKey: 'playground.segmented.basic.hint', Component: BasicSegmented, src: basicSrc },
		{ labelKey: 'playground.segmented.variants.label', descriptionKey: 'playground.segmented.variants.hint', Component: VariantsSegmented, src: variantsSrc },
		{ labelKey: 'playground.segmented.sizes.label', descriptionKey: 'playground.segmented.sizes.hint', Component: SizesSegmented, src: sizesSrc },
		{ labelKey: 'playground.segmented.icons.label', descriptionKey: 'playground.segmented.icons.hint', Component: IconsSegmented, src: iconsSrc },
		{ labelKey: 'playground.segmented.colors.label', descriptionKey: 'playground.segmented.colors.hint', Component: ColorsSegmented, src: colorsSrc },
		{ labelKey: 'playground.segmented.block.label', descriptionKey: 'playground.segmented.block.hint', Component: BlockSegmented, src: blockSrc },
		{ labelKey: 'playground.segmented.disabled.label', descriptionKey: 'playground.segmented.disabled.hint', Component: DisabledSegmented, src: disabledSrc },
		{ labelKey: 'playground.segmented.loop.label', descriptionKey: 'playground.segmented.loop.hint', Component: LoopSegmented, src: loopSrc },
		{ labelKey: 'playground.segmented.child.label', descriptionKey: 'playground.segmented.child.hint', Component: ChildSegmented, src: childSrc }
	];

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'V', required: false, default: '$bindable()', description: 'Selected token. Two-way bindable.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent for the active thumb and (in flat) the track tint.' },
		{ name: 'variant', type: 'SegmentedVariant', required: false, default: "'default'", description: "Visual variant: 'default' | 'flat' | 'border' | 'relief'." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Sizing scale shared with Button ('xl' | 'large' | 'medium' | 'small' | 'mini'). Outer height matches a Button at the same size." },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch the group to fill the container width.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the entire group.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Emit a click ripple on selection.' },
		{ name: 'loop', type: 'boolean', required: false, default: 'false', description: 'Wrap arrow navigation past the ends.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible label for the radiogroup.' },
		{ name: 'onValueChange', type: '(value: V) => void', required: false, default: null, description: 'Fired on selection change.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Composition slot — Segmented.Item children, in any order.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own root element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the root element.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'value', type: 'V', required: true, default: null, description: 'Stored when this segment is picked. Must be unique within the parent Segmented.Root.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert segment.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Per-item palette accent. Falls back to the group color. Drives the active label color, the active thumb tint, and the click-ripple bloom on this segment.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content. Place a Segmented.ItemIcon here for a leading glyph.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own segment element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the segment element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the segment element.' }
	];

	const itemIconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Glyph content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the icon element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the icon element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.segmented.title')}</h2>
	<p>{t('playground.segmented.description')}</p>
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
	title="Segmented.Root"
	api={rootApi}
	hint="The radiogroup shell. All selection / visual config and bind:value + onValueChange live here and flow to the parts via context. Generic over the option value V. Hosts the spring-animated thumb. Publishes data-orientation / data-disabled hooks. Compose with Segmented.Item."
/>
<ApiTable
	title="Segmented.Item"
	api={itemApi}
	hint="A single segment (role=radio). Wires roving focus + selection via Segmented.Root context. Place a Segmented.ItemIcon inside for a leading glyph. Publishes data-state (active / inactive) / data-disabled hooks. Plus every native HTML button attribute."
/>
<ApiTable
	title="Segmented.ItemIcon"
	api={itemIconApi}
	hint="A leading glyph inside a Segmented.Item."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
