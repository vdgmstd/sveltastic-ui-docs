<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicToast from '../../_playground/examples/toast/BasicToast.svelte';
	import CustomToast from '../../_playground/examples/toast/CustomToast.svelte';
	import ActionToast from '../../_playground/examples/toast/ActionToast.svelte';
	import LoadingToast from '../../_playground/examples/toast/LoadingToast.svelte';

	import basicSrc from '../../_playground/examples/toast/BasicToast.svelte?raw';
	import customSrc from '../../_playground/examples/toast/CustomToast.svelte?raw';
	import actionSrc from '../../_playground/examples/toast/ActionToast.svelte?raw';
	import loadingSrc from '../../_playground/examples/toast/LoadingToast.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.toast.basic.label', hintKey: 'playground.toast.basic.hint', Component: BasicToast, src: basicSrc },
		{ labelKey: 'playground.toast.custom.label', hintKey: 'playground.toast.custom.hint', Component: CustomToast, src: customSrc },
		{ labelKey: 'playground.toast.action.label', hintKey: 'playground.toast.action.hint', Component: ActionToast, src: actionSrc },
		{ labelKey: 'playground.toast.loading.label', hintKey: 'playground.toast.loading.hint', Component: LoadingToast, src: loadingSrc }
	];

	const toastApi: ApiProp[] = [
		{ name: 'title', type: 'string', required: false, default: null, description: 'Headline.' },
		{ name: 'description', type: 'string', required: false, default: null, description: 'Body text (alias of `text`).' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Variant tint; danger / warning render as role="alert" (assertive).' },
		{ name: 'content', type: 'Snippet<[{ toast, close }]>', required: false, default: null, description: 'Full custom body — compose Toast.Root + parts. Receives the toast entry + a close handle.' },
		{ name: 'duration', type: 'number', required: false, default: '5000', description: 'ms before auto-close (ignored when sticky / loading).' },
		{ name: 'sticky', type: 'boolean', required: false, default: 'false', description: 'Never auto-close.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Show a spinner and stay until closed by hand.' },
		{ name: 'closable', type: 'boolean', required: false, default: 'false', description: 'Show the default close button.' },
		{ name: 'border', type: 'boolean', required: false, default: 'false', description: 'Outline ring instead of filled tint.' },
		{ name: 'square', type: 'boolean', required: false, default: 'false', description: 'Drop the rounded corners.' },
		{ name: 'position', type: 'ToastPosition', required: false, default: "'top-right'", description: "Screen anchor: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'." },
		{ name: 'icon', type: 'Snippet', required: false, default: null, description: 'Custom icon snippet for the default composition.' },
		{ name: 'onclick', type: '() => void', required: false, default: null, description: 'Makes the whole toast a clickable button.' },
		{ name: 'clickClose', type: 'boolean', required: false, default: 'false', description: 'Close on body click.' },
		{ name: 'onclose', type: '() => void', required: false, default: null, description: 'Fired when the toast is dismissed.' },
		{ name: '→ returns', type: '{ id, close() }', required: false, default: null, description: 'Handle to dismiss the toast imperatively.' }
	];

	const providerApi: ApiProp[] = [
		{ name: 'closeLabel', type: 'string', required: false, default: "'Close'", description: 'Default accessible label for the close button.' }
	];

	const rootApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The toast body — compose Toast.Icon / Title / Description / Action / Close.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: spread the merged props on your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the toast element.' },
		{ name: '…rest', type: 'HTMLAttributes', required: false, default: null, description: 'Forwarded to the toast element. Reads color / border / square / role from the toast entry.' }
	];

	const partApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Content; falls back to the toast entry field where one exists (Title→title, Description→description, Icon→icon/loading).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the element.' }
	];

	const actionApi: ApiProp[] = [
		{ name: 'onclick', type: '(e) => void', required: false, default: null, description: 'The action handler.' },
		{ name: 'closeOnClick', type: 'boolean', required: false, default: 'true', description: 'Dismiss the toast after the action runs.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Action label.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the action button.' }
	];

	const closeApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Close'", description: 'Accessible label; falls back to the Provider closeLabel.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom glyph (defaults to ✕).' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the close button.' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.toast.title')}</h2>
	<p>{t('playground.toast.description')}</p>
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
	title="toast(options) · notify(options)"
	api={toastApi}
	hint="Imperative API — queues a toast and returns an id + close() handle. notify() is the legacy alias of toast(). Mount one <Toast.Provider /> (or <NotificationsHost />) near the app root. Pass a content snippet for a fully custom body composed from Toast parts."
/>
<ApiTable
	title="Toast.Provider"
	api={providerApi}
	hint="The host. Mount once near the app root; renders every queued toast into fixed, portalled per-position stacks (role=group, aria-live per toast), auto-dismisses after the duration, and pauses the timers while a stack is hovered."
/>
<ApiTable
	title="Toast.Root"
	api={rootApi}
	hint="The toast container for a custom content snippet — reproduces the styled surface (color tint, border, role=status/alert) and provides the toast context to its parts."
/>
<ApiTable title="Toast.Icon" api={partApi} hint="Leading icon / spinner. Renders the entry's loading spinner or icon when no children are given." />
<ApiTable title="Toast.Title" api={partApi} hint="The headline. Falls back to the toast entry title." />
<ApiTable title="Toast.Description" api={partApi} hint="The body text. Falls back to the toast entry description / text." />
<ApiTable
	title="Toast.Action"
	api={actionApi}
	hint="A discrete action button (e.g. Undo). Runs onclick and dismisses the toast by default (closeOnClick)."
/>
<ApiTable title="Toast.Close" api={closeApi} hint="Dismisses the toast." />

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
