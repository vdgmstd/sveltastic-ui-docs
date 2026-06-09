<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicDialog from '../../_playground/examples/dialog/BasicDialog.svelte';
	import NativeTriggerDialog from '../../_playground/examples/dialog/NativeTriggerDialog.svelte';
	import PersistentDialog from '../../_playground/examples/dialog/PersistentDialog.svelte';
	import SizesDialog from '../../_playground/examples/dialog/SizesDialog.svelte';
	import FormDialog from '../../_playground/examples/dialog/FormDialog.svelte';
	import ScrollDialog from '../../_playground/examples/dialog/ScrollDialog.svelte';

	import basicSrc from '../../_playground/examples/dialog/BasicDialog.svelte?raw';
	import nativeSrc from '../../_playground/examples/dialog/NativeTriggerDialog.svelte?raw';
	import persistentSrc from '../../_playground/examples/dialog/PersistentDialog.svelte?raw';
	import sizesSrc from '../../_playground/examples/dialog/SizesDialog.svelte?raw';
	import formSrc from '../../_playground/examples/dialog/FormDialog.svelte?raw';
	import scrollSrc from '../../_playground/examples/dialog/ScrollDialog.svelte?raw';

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.dialog.basic.label', Component: BasicDialog, src: basicSrc },
		{ labelKey: 'playground.dialog.native.label', Component: NativeTriggerDialog, src: nativeSrc },
		{ labelKey: 'playground.dialog.persistent.label', Component: PersistentDialog, src: persistentSrc },
		{ labelKey: 'playground.dialog.sizes.label', Component: SizesDialog, src: sizesSrc },
		{ labelKey: 'playground.dialog.form.label', Component: FormDialog, src: formSrc },
		{ labelKey: 'playground.dialog.scroll.label', Component: ScrollDialog, src: scrollSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Open state. Two-way bindable; also flows through onOpenChange (kit controlled-state idiom).' },
		{ name: 'size', type: 'DialogSize', required: false, default: "'medium'", description: "Preset width: 'small' (400px) | 'medium' (520px) | 'large' (720px) | 'fullscreen' (stretches to the viewport)." },
		{ name: 'align', type: 'DialogAlign', required: false, default: "'center'", description: "Vertical alignment: 'center' | 'top' (pins the dialog 6vh from the top)." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Accent palette — drives the focus outline and selection tint.' },
		{ name: 'persistent', type: 'boolean', required: false, default: 'false', description: 'Block Esc + backdrop-click close paths; they play a bounce instead.' },
		{ name: 'role', type: 'DialogRole', required: false, default: "'dialog'", description: "ARIA role for the surface: 'dialog' | 'alertdialog' (for destructive confirmations)." },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no Dialog.Title part is present (→ aria-label on the surface).' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever open changes (open or close).' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the exit transition finishes (surface fully removed).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Dialog.Trigger and Dialog.Content here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the native <button> with your own element; spread the merged props it hands you.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trigger content (label / icon).' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDialogElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the underlying native <dialog> element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Dialog.Close, Dialog.Title, Dialog.Description, Dialog.Body and Dialog.Footer here.' }
	];

	const titleApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the title header element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the <header> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Title text. Registers its id as the surface aria-labelledby.' }
	];

	const descriptionApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLParagraphElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the description element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the <p> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Description text. Registers its id as the surface aria-describedby.' }
	];

	const bodyApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the scrollable body element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the body <div> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Main dialog content; scrolls when it overflows.' }
	];

	const footerApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the footer element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the <footer> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Footer actions (typically Cancel / Confirm buttons), right-aligned.' }
	];

	const closeApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Close dialog'", description: 'Accessible label for the icon-only close button (→ aria-label).' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the close button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the close <button> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom close content; defaults to an X icon when omitted.' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.dialog.title')}</h2>
	<p>{t('playground.dialog.description')}</p>
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
	title="Dialog.Root"
	api={rootApi}
	hint="The state owner. bind:open + size / align / color / persistent / role live here and flow to the parts via context; no DOM of its own. Compose it with Dialog.Trigger and Dialog.Content."
/>
<ApiTable
	title="Dialog.Trigger"
	api={triggerApi}
	hint="Opens the dialog. Renders a native <button> with aria-haspopup / aria-expanded / aria-controls; data-state hooks. Plus every native HTML button attribute."
/>
<ApiTable
	title="Dialog.Content"
	api={contentApi}
	hint="The modal surface — a native <dialog> opened via showModal() (focus trap + ::backdrop for free, no Portal/Overlay part). Publishes data-state / data-size / data-align hooks. Plus every native HTML <dialog> attribute forwarded to the root element."
/>
<ApiTable
	title="Dialog.Title"
	api={titleApi}
	hint="The dialog heading; wires the surface aria-labelledby. Plus every native HTML attribute."
/>
<ApiTable
	title="Dialog.Description"
	api={descriptionApi}
	hint="Optional supporting text; wires the surface aria-describedby. Plus every native HTML attribute."
/>
<ApiTable
	title="Dialog.Body"
	api={bodyApi}
	hint="The scrollable content region. Plus every native HTML attribute."
/>
<ApiTable
	title="Dialog.Footer"
	api={footerApi}
	hint="Right-aligned action row. Plus every native HTML attribute."
/>
<ApiTable
	title="Dialog.Close"
	api={closeApi}
	hint="Closes the dialog; renders the icon-only X button by default. Plus every native HTML button attribute."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
