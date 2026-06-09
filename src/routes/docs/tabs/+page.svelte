<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicTabs from '../../_playground/examples/tabs/BasicTabs.svelte';
	import VariantsTabs from '../../_playground/examples/tabs/VariantsTabs.svelte';
	import SizesTabs from '../../_playground/examples/tabs/SizesTabs.svelte';
	import IconsTabs from '../../_playground/examples/tabs/IconsTabs.svelte';
	import BlockTabs from '../../_playground/examples/tabs/BlockTabs.svelte';
	import CardPanelsTabs from '../../_playground/examples/tabs/CardPanelsTabs.svelte';
	import SlideTabs from '../../_playground/examples/tabs/SlideTabs.svelte';
	import VerticalTabs from '../../_playground/examples/tabs/VerticalTabs.svelte';
	import ManualLoopTabs from '../../_playground/examples/tabs/ManualLoopTabs.svelte';
	import ChildTabs from '../../_playground/examples/tabs/ChildTabs.svelte';
	import ComposedTabs from '../../_playground/examples/tabs/ComposedTabs.svelte';
	import DecoupledTabs from '../../_playground/examples/tabs/DecoupledTabs.svelte';
	import ColorsTabs from '../../_playground/examples/tabs/ColorsTabs.svelte';
	import StatesTabs from '../../_playground/examples/tabs/StatesTabs.svelte';
	import KeyboardTabs from '../../_playground/examples/tabs/KeyboardTabs.svelte';

	import basicSrc from '../../_playground/examples/tabs/BasicTabs.svelte?raw';
	import variantsSrc from '../../_playground/examples/tabs/VariantsTabs.svelte?raw';
	import sizesSrc from '../../_playground/examples/tabs/SizesTabs.svelte?raw';
	import iconsSrc from '../../_playground/examples/tabs/IconsTabs.svelte?raw';
	import blockSrc from '../../_playground/examples/tabs/BlockTabs.svelte?raw';
	import cardPanelsSrc from '../../_playground/examples/tabs/CardPanelsTabs.svelte?raw';
	import slideSrc from '../../_playground/examples/tabs/SlideTabs.svelte?raw';
	import verticalSrc from '../../_playground/examples/tabs/VerticalTabs.svelte?raw';
	import manualLoopSrc from '../../_playground/examples/tabs/ManualLoopTabs.svelte?raw';
	import childSrc from '../../_playground/examples/tabs/ChildTabs.svelte?raw';
	import composedSrc from '../../_playground/examples/tabs/ComposedTabs.svelte?raw';
	import decoupledSrc from '../../_playground/examples/tabs/DecoupledTabs.svelte?raw';
	import colorsSrc from '../../_playground/examples/tabs/ColorsTabs.svelte?raw';
	import statesSrc from '../../_playground/examples/tabs/StatesTabs.svelte?raw';
	import keyboardSrc from '../../_playground/examples/tabs/KeyboardTabs.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.tabs.basic.label', descriptionKey: 'playground.tabs.basic.hint', Component: BasicTabs, src: basicSrc },
		{ labelKey: 'playground.tabs.variants.label', descriptionKey: 'playground.tabs.variants.hint', Component: VariantsTabs, src: variantsSrc },
		{ labelKey: 'playground.tabs.sizes.label', descriptionKey: 'playground.tabs.sizes.hint', Component: SizesTabs, src: sizesSrc },
		{ labelKey: 'playground.tabs.icons.label', descriptionKey: 'playground.tabs.icons.hint', Component: IconsTabs, src: iconsSrc },
		{ labelKey: 'playground.tabs.block.label', descriptionKey: 'playground.tabs.block.hint', Component: BlockTabs, src: blockSrc },
		{ labelKey: 'playground.tabs.vertical.label', descriptionKey: 'playground.tabs.vertical.hint', Component: VerticalTabs, src: verticalSrc },
		{ labelKey: 'playground.tabs.manualLoop.label', descriptionKey: 'playground.tabs.manualLoop.hint', Component: ManualLoopTabs, src: manualLoopSrc },
		{ labelKey: 'playground.tabs.child.label', descriptionKey: 'playground.tabs.child.hint', Component: ChildTabs, src: childSrc },
		{ labelKey: 'playground.tabs.cardPanels.label', descriptionKey: 'playground.tabs.cardPanels.hint', Component: CardPanelsTabs, src: cardPanelsSrc },
		{ labelKey: 'playground.tabs.slide.label', descriptionKey: 'playground.tabs.slide.hint', Component: SlideTabs, src: slideSrc },
		{ labelKey: 'playground.tabs.composed.label', descriptionKey: 'playground.tabs.composed.hint', Component: ComposedTabs, src: composedSrc },
		{ labelKey: 'playground.tabs.composition.label', descriptionKey: 'playground.tabs.composition.hint', Component: DecoupledTabs, src: decoupledSrc },
		{ labelKey: 'playground.tabs.colors.label', Component: ColorsTabs, src: colorsSrc },
		{ labelKey: 'playground.tabs.states.label', Component: StatesTabs, src: statesSrc },
		{ labelKey: 'playground.tabs.keyboard.label', descriptionKey: 'playground.tabs.keyboard.hint', Component: KeyboardTabs, src: keyboardSrc }
	];

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: '$bindable()', description: 'Active tab value. Two-way bindable.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent. Drives the thumb fill and active-state color via --c.' },
		{ name: 'variant', type: 'TabsVariant', required: false, default: "'underline'", description: "Rail variant: 'underline' bottom bar (default), or filled 'default' / 'flat' / 'border' / 'relief' thumb." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Sizing scale shared with Button / Segmented ('xl' | 'large' | 'medium' | 'small' | 'mini')." },
		{ name: 'panelVariant', type: 'TabsPanelVariant', required: false, default: "'plain'", description: "Panel surface — 'plain' blends in, 'card' wraps the active panel in a Card-like surface." },
		{ name: 'transition', type: 'TabsTransition', required: false, default: "'crossfade'", description: "Cross-panel transition: 'fade' | 'crossfade' | 'slide' | 'none'." },
		{ name: 'transitionDuration', type: 'number', required: false, default: '240', description: 'Transition duration in ms.' },
		{ name: 'orientation', type: 'TabsOrientation', required: false, default: "'horizontal'", description: "Layout + arrow-key axis: 'horizontal' | 'vertical'." },
		{ name: 'activationMode', type: 'TabsActivationMode', required: false, default: "'automatic'", description: "'automatic' selects on arrow-focus; 'manual' moves focus only, Enter/Space selects." },
		{ name: 'loop', type: 'boolean', required: false, default: 'false', description: 'Wrap arrow navigation past the ends.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable every tab at once.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Emit a click ripple into the active thumb (filled variants).' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fired on selection change.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Composition slot — Tabs.List and Tabs.Content go here, in any layout.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own root element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the root element.' }
	];

	const listApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Trigger row label for screen readers.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch the row to fill its container; tabs distribute evenly.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Tabs.Trigger children.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own tablist element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the tablist element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the tablist element.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: true, default: null, description: 'Tab identifier. Must be unique within the parent Tabs.Root.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable this single tab.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trigger content — place Tabs.Icon / Tabs.Label or arbitrary nodes.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own trigger element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the trigger element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the trigger element.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Icon content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the icon element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the icon element.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the label element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the label element.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: true, default: null, description: 'Matching Tabs.Trigger value to display this panel for.' },
		{ name: 'keepMounted', type: 'boolean', required: false, default: 'false', description: 'Keep mounted when inactive (just hidden + inert). Default: unmount.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Panel content.' },
		{ name: 'child', type: 'Snippet<[{ props, active }]>', required: false, default: null, description: 'Render-delegation: receive the merged props + active flag and render your own panel.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the tabpanel element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the tabpanel element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.tabs.title')}</h2>
	<p>{t('playground.tabs.description')}</p>
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
	title="Tabs.Root"
	api={rootApi}
	hint="The provider. All selection / visual config and bind:value + onValueChange live here and flow to the parts via context. Renders display:contents — compose Tabs.List + Tabs.Content anywhere inside, in any layout. Publishes data-orientation / data-disabled hooks."
/>
<ApiTable
	title="Tabs.List"
	api={listApi}
	hint="The tablist rail — hosts the spring-animated thumb and the Tabs.Trigger row. Plus every native HTML attribute forwarded to the tablist element."
/>
<ApiTable
	title="Tabs.Trigger"
	api={triggerApi}
	hint="A single tab. Wire roving focus + ARIA via Tabs.Root context. Compose Tabs.Icon / Tabs.Label inside, or pass bare children. Publishes data-state (active / inactive) / data-disabled / data-orientation hooks. Plus every native HTML button attribute."
/>
<ApiTable
	title="Tabs.Icon"
	api={iconApi}
	hint="A leading glyph inside a Tabs.Trigger."
/>
<ApiTable
	title="Tabs.Label"
	api={labelApi}
	hint="The text label inside a Tabs.Trigger (pair it with Tabs.Icon)."
/>
<ApiTable
	title="Tabs.Content"
	api={contentApi}
	hint="A panel for one tab value, cross-linked to its trigger via aria-controls / aria-labelledby. Plus every native HTML attribute forwarded to the tabpanel element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
