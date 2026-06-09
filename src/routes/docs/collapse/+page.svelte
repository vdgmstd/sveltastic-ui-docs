<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import VariantsCollapse from '../../_playground/examples/collapse/VariantsCollapse.svelte';
	import ColorsCollapse from '../../_playground/examples/collapse/ColorsCollapse.svelte';
	import SizesCollapse from '../../_playground/examples/collapse/SizesCollapse.svelte';
	import ShapeGradientCollapse from '../../_playground/examples/collapse/ShapeGradientCollapse.svelte';
	import SlotsCollapse from '../../_playground/examples/collapse/SlotsCollapse.svelte';
	import ComposedCollapse from '../../_playground/examples/collapse/ComposedCollapse.svelte';
	import ChildCollapse from '../../_playground/examples/collapse/ChildCollapse.svelte';
	import EventsCollapse from '../../_playground/examples/collapse/EventsCollapse.svelte';
	import GroupSingleCollapse from '../../_playground/examples/collapse/GroupSingleCollapse.svelte';
	import GroupMultipleCollapse from '../../_playground/examples/collapse/GroupMultipleCollapse.svelte';
	import GroupFusedCollapse from '../../_playground/examples/collapse/GroupFusedCollapse.svelte';
	import GroupCardCollapse from '../../_playground/examples/collapse/GroupCardCollapse.svelte';
	import StatesCollapse from '../../_playground/examples/collapse/StatesCollapse.svelte';

	import variantsSrc from '../../_playground/examples/collapse/VariantsCollapse.svelte?raw';
	import colorsSrc from '../../_playground/examples/collapse/ColorsCollapse.svelte?raw';
	import sizesSrc from '../../_playground/examples/collapse/SizesCollapse.svelte?raw';
	import shapeGradientSrc from '../../_playground/examples/collapse/ShapeGradientCollapse.svelte?raw';
	import slotsSrc from '../../_playground/examples/collapse/SlotsCollapse.svelte?raw';
	import composedSrc from '../../_playground/examples/collapse/ComposedCollapse.svelte?raw';
	import childSrc from '../../_playground/examples/collapse/ChildCollapse.svelte?raw';
	import eventsSrc from '../../_playground/examples/collapse/EventsCollapse.svelte?raw';
	import groupSingleSrc from '../../_playground/examples/collapse/GroupSingleCollapse.svelte?raw';
	import groupMultipleSrc from '../../_playground/examples/collapse/GroupMultipleCollapse.svelte?raw';
	import groupFusedSrc from '../../_playground/examples/collapse/GroupFusedCollapse.svelte?raw';
	import groupCardSrc from '../../_playground/examples/collapse/GroupCardCollapse.svelte?raw';
	import statesSrc from '../../_playground/examples/collapse/StatesCollapse.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.collapse.variants.label', Component: VariantsCollapse, src: variantsSrc },
		{ labelKey: 'playground.collapse.colors.label', Component: ColorsCollapse, src: colorsSrc },
		{ labelKey: 'playground.collapse.sizes.label', Component: SizesCollapse, src: sizesSrc },
		{ labelKey: 'playground.collapse.shapeGradient.label', Component: ShapeGradientCollapse, src: shapeGradientSrc },
		{ labelKey: 'playground.collapse.slots.label', Component: SlotsCollapse, src: slotsSrc },
		{ labelKey: 'playground.collapse.composed.label', Component: ComposedCollapse, src: composedSrc },
		{ labelKey: 'playground.collapse.child.label', Component: ChildCollapse, src: childSrc },
		{ labelKey: 'playground.collapse.events.label', Component: EventsCollapse, src: eventsSrc },
		{ labelKey: 'playground.collapse.group.singleLabel', Component: GroupSingleCollapse, src: groupSingleSrc },
		{ labelKey: 'playground.collapse.group.multipleLabel', Component: GroupMultipleCollapse, src: groupMultipleSrc },
		{ labelKey: 'playground.collapse.group.fusedLabel', Component: GroupFusedCollapse, src: groupFusedSrc },
		{ labelKey: 'playground.collapse.group.cardLabel', Component: GroupCardCollapse, src: groupCardSrc },
		{ labelKey: 'playground.collapse.states.label', Component: StatesCollapse, src: statesSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Open state. Two-way bindable. Ignored when wrapped by a Collapse.Group (the group owns it).' },
		{ name: 'key', type: 'string', required: false, default: null, description: 'Stable key — required only inside a Collapse.Group; auto-generated otherwise.' },
		{ name: 'variant', type: 'CollapseVariant', required: false, default: "'default'", description: "Visual variant: 'default' | 'flat' | 'border' | 'solid' | 'gradient' | 'relief' | 'ghost'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name, hex, rgb(...), or "r,g,b" triplet.' },
		{ name: 'gradientEnd', type: 'Color', required: false, default: null, description: "End-stop color for the gradient variant. Defaults to the --gradient-end token." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Size scale (typography + paddings).' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: 'Border-radius shape. square zeroes the radius for tight lists.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled — trigger is non-interactive and dimmed.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Ripple effect on trigger press.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the trigger when the header has no visible text (icon-only).' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires the instant open flips (kit controlled-state idiom).' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the open/close slide transition finishes.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged props and render your own root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Collapse.Trigger and Collapse.Content here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own trigger element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Header content — compose Collapse.Icon / Collapse.Title / Collapse.Extra / Collapse.Caret here.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icon element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Leading glyph (e.g. a phosphor-svelte icon). Rendered aria-hidden.' }
	];

	const titleApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the title element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Header label text — the flexible part of the trigger row.' }
	];

	const caretApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the caret element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom indicator glyph (replaces the default CaretDown). Rotates with open state via --rot.' }
	];

	const extraApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the extra element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trailing aside content (badge, chip, count) shown before the caret.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'forceMount', type: 'boolean', required: false, default: 'false', description: 'Keep the content mounted while closed so a consumer transition can drive it.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the body element.' },
		{ name: 'child', type: 'Snippet<[{ props; open }]>', required: false, default: null, description: 'Render-delegation: receive the merged props plus the live open flag.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Body content, revealed with the slide transition.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'multiple'", required: false, default: "'single'", description: 'Selection type. single collapses siblings on open; multiple allows any combination.' },
		{ name: 'value', type: 'string | string[] | null', required: false, default: '$bindable()', description: 'Open item key(s) — a single key in single mode, an array in multiple mode. Two-way bindable.' },
		{ name: 'layout', type: "'stack' | 'fused' | 'card'", required: false, default: "'stack'", description: 'Visual layout. stack — separate cards with gap. fused — items joined as one block. card — wrapped in a shared card surface.' },
		{ name: 'variant', type: 'CollapseVariant', required: false, default: null, description: 'Default variant cascaded to children.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Default color cascaded to children.' },
		{ name: 'size', type: 'Size', required: false, default: null, description: 'Default size cascaded to children.' },
		{ name: 'shape', type: 'Shape', required: false, default: null, description: 'Default shape cascaded to children.' },
		{ name: 'gap', type: 'number', required: false, default: '8', description: 'Vertical gap between items (px). Ignored for fused and card layouts.' },
		{ name: 'orientation', type: "'vertical' | 'horizontal'", required: false, default: "'vertical'", description: 'Arrow-key navigation axis.' },
		{ name: 'loop', type: 'boolean', required: false, default: 'true', description: 'Wrap arrow navigation past the ends.' },
		{ name: 'title', type: 'string', required: false, default: "''", description: 'Title row above the items (visible in all layouts). Use the child snippet for richer content.' },
		{ name: 'footer', type: 'string', required: false, default: "''", description: 'Footer row below the items. Use the child snippet for richer content.' },
		{ name: 'onValueChange', type: '(value: string | string[] | null) => void', required: false, default: null, description: 'Fires when the open set changes (kit controlled-state idiom).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own group element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The Collapse.Root items belonging to this group.' }
	];
</script>

<DocHeader category="Composite" />

<header class="section__header">
	<h2>{t('playground.collapse.title')}</h2>
	<p>{t('playground.collapse.description')}</p>
</header>

<div class="collapse-docs">
	{#each blocks as block (block.labelKey)}
		<DemoBlock
			label={t(block.labelKey)}
			codeLabel={t('playground.code.label')}
			Component={block.Component}
			src={block.src}
		/>
	{/each}
</div>

<ApiTable
	title="Collapse.Root"
	api={rootApi}
	hint="The disclosure shell. Owns the open state (bind:open + onOpenChange), the visual config (variant / color / size / shape), and shares the caret rotation (--rot) and aria wiring with the parts via context. Inside a Collapse.Group the group owns open; give each item a key. Publishes data-state (open / closed) and data-disabled hooks. Plus every native HTML attribute forwarded to the root element."
/>
<ApiTable
	title="Collapse.Trigger"
	api={triggerApi}
	hint="The clickable header (a <button>). Composes Collapse.Icon / Collapse.Title / Collapse.Extra / Collapse.Caret. Wired to the body via aria-controls / aria-expanded and joins the group's roving tabindex."
/>
<ApiTable
	title="Collapse.Icon"
	api={iconApi}
	hint="Optional leading glyph inside the trigger. Rendered aria-hidden so it does not duplicate the title for screen readers."
/>
<ApiTable
	title="Collapse.Title"
	api={titleApi}
	hint="The header label — the flexible (flex: 1) part of the trigger row."
/>
<ApiTable
	title="Collapse.Extra"
	api={extraApi}
	hint="Optional trailing aside (badge / chip / count) placed before the caret."
/>
<ApiTable
	title="Collapse.Caret"
	api={caretApi}
	hint="The open/close indicator. Defaults to a CaretDown glyph; rotates 180° with open state via the shared --rot variable. Rendered aria-hidden."
/>
<ApiTable
	title="Collapse.Content"
	api={contentApi}
	hint="The collapsible body. Slides open/closed and fires the Root's onOpenChangeComplete when the transition settles. Use forceMount + the child snippet to drive your own transition."
/>
<ApiTable
	title="Collapse.Group"
	api={groupApi}
	hint="Wrap any number of Collapse.Root items. type='single' collapses siblings, type='multiple' allows any combination. bind:value holds the open key(s); each item needs a key. Cascades variant / color / size / shape to children and provides roving arrow-key navigation. Plus every native HTML attribute forwarded to the group root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.collapse-docs :global(.stage--compact) {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: stretch;
	}
</style>
