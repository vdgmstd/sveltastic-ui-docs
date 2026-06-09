<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicTooltip from '../../_playground/examples/tooltip/BasicTooltip.svelte';
	import PlacementsTooltip from '../../_playground/examples/tooltip/PlacementsTooltip.svelte';
	import VariantsTooltip from '../../_playground/examples/tooltip/VariantsTooltip.svelte';
	import ColorsTooltip from '../../_playground/examples/tooltip/ColorsTooltip.svelte';
	import TriggersTooltip from '../../_playground/examples/tooltip/TriggersTooltip.svelte';
	import InteractiveTooltip from '../../_playground/examples/tooltip/InteractiveTooltip.svelte';
	import DelayTooltip from '../../_playground/examples/tooltip/DelayTooltip.svelte';
	import ShapeTooltip from '../../_playground/examples/tooltip/ShapeTooltip.svelte';
	import ArrowTooltip from '../../_playground/examples/tooltip/ArrowTooltip.svelte';
	import LoadingTooltip from '../../_playground/examples/tooltip/LoadingTooltip.svelte';
	import ManualTooltip from '../../_playground/examples/tooltip/ManualTooltip.svelte';
	import ChildTooltip from '../../_playground/examples/tooltip/ChildTooltip.svelte';

	import basicSrc from '../../_playground/examples/tooltip/BasicTooltip.svelte?raw';
	import placementsSrc from '../../_playground/examples/tooltip/PlacementsTooltip.svelte?raw';
	import variantsSrc from '../../_playground/examples/tooltip/VariantsTooltip.svelte?raw';
	import colorsSrc from '../../_playground/examples/tooltip/ColorsTooltip.svelte?raw';
	import triggersSrc from '../../_playground/examples/tooltip/TriggersTooltip.svelte?raw';
	import interactiveSrc from '../../_playground/examples/tooltip/InteractiveTooltip.svelte?raw';
	import delaySrc from '../../_playground/examples/tooltip/DelayTooltip.svelte?raw';
	import shapeSrc from '../../_playground/examples/tooltip/ShapeTooltip.svelte?raw';
	import arrowSrc from '../../_playground/examples/tooltip/ArrowTooltip.svelte?raw';
	import loadingSrc from '../../_playground/examples/tooltip/LoadingTooltip.svelte?raw';
	import manualSrc from '../../_playground/examples/tooltip/ManualTooltip.svelte?raw';
	import childSrc from '../../_playground/examples/tooltip/ChildTooltip.svelte?raw';

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const rootApi: ApiProp[] = [
		{ name: 'placement', type: 'TooltipPlacement', required: false, default: "'top'", description: "Side of the trigger: 'top' | 'right' | 'bottom' | 'left'." },
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Show / hide. Two-way bindable.' },
		{ name: 'trigger', type: 'TooltipTrigger', required: false, default: "'hover'", description: "Activation strategy: 'hover' | 'click' | 'manual'." },
		{ name: 'interactive', type: 'boolean', required: false, default: 'false', description: 'Keep the bubble open while the pointer is over it.' },
		{ name: 'delay', type: 'number', required: false, default: '0', description: 'Show-delay in ms (hover / focus only).' },
		{ name: 'color', type: 'Color', required: false, default: "'dark'", description: 'Palette color — drives the bubble accent.' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires when open changes.' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the exit fade finishes (bubble fully removed).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Tooltip.Trigger and Tooltip.Content here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible label when the focusable child has no visible text.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The element that anchors and opens the tooltip (e.g. a Button).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged props and render your own wrapper element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger wrapper element.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'variant', type: 'Variant', required: false, default: "'default'", description: "Visual variant. Only 'default' | 'shadow' | 'border' are styled." },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Border radius shape: 'default' | 'circle' | 'square'." },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner overlay in place of the body.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Palette color — overrides the Root color for this bubble.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible label for the bubble.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Tooltip body. Place a Tooltip.Arrow inside to show the pointer arrow.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the bubble element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the bubble element.' }
	];

	const arrowApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom arrow content (rare); omit for the default clip-path pointer.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the arrow element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the arrow element.' }
	];

	const blocks = [
		{ labelKey: 'playground.tooltip.basic.label', descriptionKey: 'playground.tooltip.basic.hint', Component: BasicTooltip, src: basicSrc },
		{ labelKey: 'playground.tooltip.placement.label', Component: PlacementsTooltip, src: placementsSrc },
		{ labelKey: 'playground.tooltip.variants.label', Component: VariantsTooltip, src: variantsSrc },
		{ labelKey: 'playground.tooltip.color.label', Component: ColorsTooltip, src: colorsSrc },
		{ labelKey: 'playground.tooltip.trigger.label', descriptionKey: 'playground.tooltip.trigger.hint', Component: TriggersTooltip, src: triggersSrc },
		{ labelKey: 'playground.tooltip.interactive.label', descriptionKey: 'playground.tooltip.interactive.hint', Component: InteractiveTooltip, src: interactiveSrc },
		{ labelKey: 'playground.tooltip.delay.label', Component: DelayTooltip, src: delaySrc },
		{ labelKey: 'playground.tooltip.shape.label', Component: ShapeTooltip, src: shapeSrc },
		{ labelKey: 'playground.tooltip.arrow.label', Component: ArrowTooltip, src: arrowSrc },
		{ labelKey: 'playground.tooltip.loading.label', Component: LoadingTooltip, src: loadingSrc },
		{ labelKey: 'playground.tooltip.manual.label', descriptionKey: 'playground.tooltip.manual.hint', Component: ManualTooltip, src: manualSrc },
		{ labelKey: 'playground.tooltip.child.label', descriptionKey: 'playground.tooltip.child.hint', Component: ChildTooltip, src: childSrc }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.tooltip.title')}</h2>
	<p>{t('playground.tooltip.description')}</p>
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
	title="Tooltip.Root"
	api={rootApi}
	hint="The shell. All positioning / activation / color config and bind:open + onOpenChange live here and flow to the parts via context. Compose with Tooltip.Trigger and Tooltip.Content."
/>
<ApiTable
	title="Tooltip.Trigger"
	api={triggerApi}
	hint="Wraps the element that anchors and opens the bubble. Renders a presentation wrapper around children; keyboard + ARIA come from the focusable child. Use the child snippet to render your own wrapper. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Tooltip.Content"
	api={contentApi}
	hint="The portalled bubble. Body comes from children; place a Tooltip.Arrow inside to show the pointer arrow. Publishes data-placement / data-variant / data-shape / data-state hooks. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Tooltip.Arrow"
	api={arrowApi}
	hint="The pointer arrow, rendered inside Tooltip.Content. Auto-orients to the Root placement via a data-placement hook. Plus every native HTML attribute forwarded to the element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
