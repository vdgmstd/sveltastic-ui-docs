<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import BasicAlert from '../../_playground/examples/alert/BasicAlert.svelte';
	import VariantsAlert from '../../_playground/examples/alert/VariantsAlert.svelte';
	import IconAlert from '../../_playground/examples/alert/IconAlert.svelte';
	import ClosableAlert from '../../_playground/examples/alert/ClosableAlert.svelte';
	import CollapsibleAlert from '../../_playground/examples/alert/CollapsibleAlert.svelte';
	import PagesAlert from '../../_playground/examples/alert/PagesAlert.svelte';
	import EventsAlert from '../../_playground/examples/alert/EventsAlert.svelte';
	import ChildAlert from '../../_playground/examples/alert/ChildAlert.svelte';

	import basicSrc from '../../_playground/examples/alert/BasicAlert.svelte?raw';
	import variantsSrc from '../../_playground/examples/alert/VariantsAlert.svelte?raw';
	import iconSrc from '../../_playground/examples/alert/IconAlert.svelte?raw';
	import closableSrc from '../../_playground/examples/alert/ClosableAlert.svelte?raw';
	import collapsibleSrc from '../../_playground/examples/alert/CollapsibleAlert.svelte?raw';
	import pagesSrc from '../../_playground/examples/alert/PagesAlert.svelte?raw';
	import eventsSrc from '../../_playground/examples/alert/EventsAlert.svelte?raw';
	import childSrc from '../../_playground/examples/alert/ChildAlert.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.alert.basic.label', Component: BasicAlert, src: basicSrc },
		{ labelKey: 'playground.alert.variants.label', Component: VariantsAlert, src: variantsSrc },
		{ labelKey: 'playground.alert.icon.label', Component: IconAlert, src: iconSrc },
		{ labelKey: 'playground.alert.closable.label', Component: ClosableAlert, src: closableSrc },
		{ labelKey: 'playground.alert.collapsible.label', Component: CollapsibleAlert, src: collapsibleSrc },
		{ labelKey: 'playground.alert.pages.label', descriptionKey: 'playground.alert.pages.hint', Component: PagesAlert, src: pagesSrc },
		{ labelKey: 'playground.alert.events.label', descriptionKey: 'playground.alert.events.hint', Component: EventsAlert, src: eventsSrc },
		{ labelKey: 'playground.alert.child.label', descriptionKey: 'playground.alert.child.hint', Component: ChildAlert, src: childSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'variant', type: 'AlertVariant', required: false, default: "'relief'", description: "Visual variant: 'relief' (soft offset shadow) | 'gradient' (diagonal hue-shifted overlay)." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name, hex, rgb(...) or "r,g,b" triplet — drives the background fill.' },
		{ name: 'gradientEnd', type: 'Color', required: false, default: null, description: 'End-stop color for the gradient variant. Defaults to the --gradient-end token.' },
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(true)', description: 'Show / hide the alert. Two-way bindable; closing rides the slide transition.' },
		{ name: 'collapsed', type: 'boolean | undefined', required: false, default: '$bindable(undefined)', description: 'Collapse state. undefined disables the affordance; true/false enables a click-to-collapse header via Alert.Toggle. Two-way bindable.' },
		{ name: 'regionAriaLabel', type: 'string', required: false, default: "'Notice'", description: 'Accessible name for the wrapping region when the alert has interactive controls (close / collapse / progress).' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires when open changes — receives the new open state.' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the open/close transition finishes — receives the settled open state.' },
		{ name: 'onCollapsedChange', type: '(collapsed: boolean) => void', required: false, default: null, description: 'Fires when the collapse toggle changes — receives the new collapsed state.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place the Alert parts (Icon / Title / Toggle / Description / Action / Close / Progress / Pager) here.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged root props and render your own host element (parts go inside it).' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The leading glyph (a Phosphor icon or your own markup), absolutely positioned in the gutter.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icon element.' }
	];

	const titleApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Static heading text. Use Alert.Toggle instead for a click-to-collapse header.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the title element.' }
	];

	const toggleApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Heading text for the collapse header. Renders a <button> with a +/- caret that toggles Alert.Root collapsed (requires collapsed to be set).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props (onclick, aria-expanded, aria-controls, data-state) and render your own element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the toggle button.' }
	];

	const descriptionApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The alert body. Slides closed when the root is collapsed; carries the id wired to Alert.Toggle aria-controls.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the description element.' }
	];

	const actionApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Footer region for action buttons, right-aligned below the body.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the action element.' }
	];

	const closeApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Close'", description: 'Accessible label when no visible children are supplied.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom dismiss glyph (replaces the default X). Registers the alert as dismissible and sets open to false on click.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props (onclick, aria-label) and render your own element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the close button.' }
	];

	const progressApi: ApiProp[] = [
		{ name: 'percent', type: 'number', required: false, default: '0', description: 'Fill amount, 0–100. Clamped and tweened.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Progress'", description: 'Accessible label for the progress bar.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props (role=progressbar, aria-value*) and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the progress element.' }
	];

	const pagerApi: ApiProp[] = [
		{ name: 'page', type: 'number', required: true, default: '$bindable()', description: 'Current page (1-based). Two-way bindable.' },
		{ name: 'pages', type: 'number', required: true, default: null, description: 'Total page count.' },
		{ name: 'prevLabel', type: 'string', required: false, default: "'Previous page'", description: 'Accessible label for the previous-page button.' },
		{ name: 'nextLabel', type: 'string', required: false, default: "'Next page'", description: 'Accessible label for the next-page button.' },
		{ name: 'onPageChange', type: '(page: number) => void', required: false, default: null, description: 'Fires after page changes — receives the new 1-based page.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the pager element.' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.alert.title')}</h2>
	<p>{t('playground.alert.description')}</p>
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
	title="Alert.Root"
	api={rootApi}
	hint="The shell. Owns bind:open / bind:collapsed + the on*Change callbacks and the variant / color visuals, shared with the parts via context. Publishes data-state (collapsed / expanded), data-variant, data-dismissible, and data-interactive styling hooks, and switches role between alert and region when interactive controls are present. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="Alert.Icon"
	api={iconApi}
	hint="The leading glyph, absolutely positioned in the gutter. The root indents the title / body / footer to clear it."
/>
<ApiTable
	title="Alert.Title"
	api={titleApi}
	hint="A static heading. For a collapsible alert use Alert.Toggle instead."
/>
<ApiTable
	title="Alert.Toggle"
	api={toggleApi}
	hint="The click-to-collapse header — a button with a +/- caret that toggles Alert.Root collapsed. Wires aria-expanded / aria-controls to the description. Requires collapsed to be set on the root."
/>
<ApiTable
	title="Alert.Description"
	api={descriptionApi}
	hint="The alert body. Slides closed when collapsed and carries the id referenced by Alert.Toggle aria-controls. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Alert.Action"
	api={actionApi}
	hint="The footer region for action buttons, right-aligned below the body. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Alert.Close"
	api={closeApi}
	hint="The dismiss button. Placing it registers the alert as dismissible (role becomes region) and clicking it sets open to false, which plays the exit transition. Replaces the old closable prop."
/>
<ApiTable
	title="Alert.Progress"
	api={progressApi}
	hint="A determinate progress bar pinned to the bottom edge, tweened on percent change. role=progressbar with aria-value*. Replaces the old progress prop."
/>
<ApiTable
	title="Alert.Pager"
	api={pagerApi}
	hint="A paged-content footer with prev / next buttons and a live page counter. Drives bind:page; disables at the ends. Replaces the old page / pages props."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
