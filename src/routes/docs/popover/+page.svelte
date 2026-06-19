<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicPopover from '../../_playground/examples/popover/BasicPopover.svelte';
	import ControlledPopover from '../../_playground/examples/popover/ControlledPopover.svelte';
	import FormPopover from '../../_playground/examples/popover/FormPopover.svelte';
	import HoverPopover from '../../_playground/examples/popover/HoverPopover.svelte';

	import basicSrc from '../../_playground/examples/popover/BasicPopover.svelte?raw';
	import controlledSrc from '../../_playground/examples/popover/ControlledPopover.svelte?raw';
	import formSrc from '../../_playground/examples/popover/FormPopover.svelte?raw';
	import hoverSrc from '../../_playground/examples/popover/HoverPopover.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.popover.basic.label', hintKey: 'playground.popover.basic.hint', Component: BasicPopover, src: basicSrc },
		{ labelKey: 'playground.popover.controlled.label', hintKey: 'playground.popover.controlled.hint', Component: ControlledPopover, src: controlledSrc },
		{ labelKey: 'playground.popover.form.label', hintKey: 'playground.popover.form.hint', Component: FormPopover, src: formSrc },
		{ labelKey: 'playground.popover.hover.label', hintKey: 'playground.popover.hover.hint', Component: HoverPopover, src: hoverSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Open state. Two-way bindable; also flows through onOpenChange.' },
		{ name: 'triggerOn', type: "'click' | 'hover' | 'manual'", required: false, default: "'click'", description: 'How the trigger opens the panel. manual = you drive open yourself.' },
		{ name: 'placement', type: 'PopoverPlacement', required: false, default: "'bottom-start'", description: "Anchor side + alignment: 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end'. Flips near viewport edges." },
		{ name: 'offset', type: 'number', required: false, default: '8', description: 'Gap in px between trigger and panel.' },
		{ name: 'modal', type: 'boolean', required: false, default: "popupRole === 'dialog'", description: 'Trap focus + mark aria-modal. Defaults on for the dialog role; set false for a non-trapping hover card.' },
		{ name: 'popupRole', type: "'dialog' | 'menu' | 'listbox' | 'none'", required: false, default: "'dialog'", description: 'ARIA role on the panel + the trigger aria-haspopup.' },
		{ name: 'closeOnEsc', type: 'boolean', required: false, default: 'true', description: 'Close on Escape (routed through the global escape-layer stack).' },
		{ name: 'closeOnClickOutside', type: 'boolean', required: false, default: 'true (non-manual)', description: 'Close on outside pointerdown (global dismiss-layer stack).' },
		{ name: 'closeOnSelect', type: 'boolean', required: false, default: 'false', description: 'Close when an interactive descendant is clicked. Off by default — use Popover.Close.' },
		{ name: 'matchWidth', type: 'boolean', required: false, default: 'false', description: 'Match the panel width to the trigger.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch the trigger wrapper to its container width.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the trigger.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the panel.' },
		{ name: 'openAnim', type: 'PopoverOpenAnim', required: false, default: "'pop'", description: "Panel open/close animation: 'pop' | 'slide' | 'fade' | 'spring'." },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever open changes.' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the close transition finishes (panel fully removed).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Popover.Trigger and Popover.Content (and Popover.Portal) here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trigger label, rendered inside the default <button>.' },
		{ name: 'child', type: 'Snippet<[{ props, open }]>', required: false, default: null, description: 'Render-delegation: spread props onto your own focusable element (e.g. Button.Root). Carries the combobox/dialog ARIA + data-state.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger element.' },
		{ name: '…rest', type: 'HTMLButtonAttributes', required: false, default: null, description: 'Forwarded to the trigger. Publishes data-popover-trigger / data-state / data-disabled.' }
	];

	const portalApi: ApiProp[] = [
		{ name: 'to', type: 'string | HTMLElement', required: false, default: 'document.body', description: 'Portal target for the panel.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Render the panel in place instead of portalling it.' },
		{ name: 'forceMount', type: 'boolean', required: false, default: 'false', description: 'Keep the panel mounted while closed (presence via data-state) — for custom transitions.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Panel content (compose freely; add Popover.Close for a dismiss button).' },
		{ name: 'child', type: 'Snippet<[{ props, body }]>', required: false, default: null, description: 'Render-delegation: spread props on your own panel-body element and {@render body()} for the content.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: 'null', description: 'Bindable reference to the rendered panel-body element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the panel body.' },
		{ name: '…rest', type: 'HTMLAttributes', required: false, default: null, description: 'Every native HTML / data-* / aria-* attribute, forwarded to the panel body. Publishes data-popover-content + data-state.' }
	];

	const closeApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Close-button label / glyph.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: spread props onto your own element (e.g. Button.Root).' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the close button.' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.popover.title')}</h2>
	<p>{t('playground.popover.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={t(block.hintKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Popover.Root"
	api={rootApi}
	hint="The shell. Owns bind:open + onOpenChange/onOpenChangeComplete and the positioning / dismissal / focus config, over the kit's shared floating engine (anchored positioning, portal, focus-trap, escape + outside-click layers). Compose with Popover.Trigger and Popover.Content."
/>
<ApiTable
	title="Popover.Trigger"
	api={triggerApi}
	hint="The toggle. Renders a real <button> by default (Enter/Space/click open it); use child to delegate to Button.Root or any focusable element — it receives the aria-haspopup / aria-expanded / aria-controls / data-state bag to spread."
/>
<ApiTable
	title="Popover.Portal"
	api={portalApi}
	hint="Optional — portals the panel to document.body (or a custom target) and toggles forceMount. The panel portals to body by default even without it."
/>
<ApiTable
	title="Popover.Content"
	api={contentApi}
	hint="The panel body. Compose any content; the kit owns the floating card chrome, positioning, focus-trap, and transitions. Exposes ref, the child render-delegation snippet, class / data-* pass-through, and a data-state hook."
/>
<ApiTable
	title="Popover.Close"
	api={closeApi}
	hint="A dismiss button inside the panel — calls the Root's close(). Renders a <button> by default; use child to delegate."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
