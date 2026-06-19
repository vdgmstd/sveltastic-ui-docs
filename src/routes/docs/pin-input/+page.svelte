<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicPinInput from '../../_playground/examples/pin-input/BasicPinInput.svelte';
	import CompletePinInput from '../../_playground/examples/pin-input/CompletePinInput.svelte';
	import AlphanumericPinInput from '../../_playground/examples/pin-input/AlphanumericPinInput.svelte';
	import SeparatedPinInput from '../../_playground/examples/pin-input/SeparatedPinInput.svelte';
	import InvalidPinInput from '../../_playground/examples/pin-input/InvalidPinInput.svelte';

	import basicSrc from '../../_playground/examples/pin-input/BasicPinInput.svelte?raw';
	import completeSrc from '../../_playground/examples/pin-input/CompletePinInput.svelte?raw';
	import alphanumericSrc from '../../_playground/examples/pin-input/AlphanumericPinInput.svelte?raw';
	import separatedSrc from '../../_playground/examples/pin-input/SeparatedPinInput.svelte?raw';
	import invalidSrc from '../../_playground/examples/pin-input/InvalidPinInput.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.pinInput.basic.label', hintKey: 'playground.pinInput.basic.hint', Component: BasicPinInput, src: basicSrc },
		{ labelKey: 'playground.pinInput.complete.label', hintKey: 'playground.pinInput.complete.hint', Component: CompletePinInput, src: completeSrc },
		{ labelKey: 'playground.pinInput.alphanumeric.label', hintKey: 'playground.pinInput.alphanumeric.hint', Component: AlphanumericPinInput, src: alphanumericSrc },
		{ labelKey: 'playground.pinInput.separated.label', hintKey: 'playground.pinInput.separated.hint', Component: SeparatedPinInput, src: separatedSrc },
		{ labelKey: 'playground.pinInput.invalid.label', hintKey: 'playground.pinInput.invalid.hint', Component: InvalidPinInput, src: invalidSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: "$bindable('')", description: 'The concatenated characters. Two-way bindable; also flows through onValueChange.' },
		{ name: 'maxLength', type: 'number', required: false, default: '6', description: 'Number of cells.' },
		{ name: 'type', type: "'numeric' | 'alphanumeric' | 'text'", required: false, default: "'numeric'", description: 'Allowed-character preset; also sets the inputmode.' },
		{ name: 'pattern', type: 'RegExp', required: false, default: null, description: 'Custom per-character allow test; overrides type.' },
		{ name: 'pasteTransformer', type: '(text: string) => string', required: false, default: null, description: 'Sanitize pasted text before it is filtered + applied.' },
		{ name: 'onComplete', type: '(value: string) => void', required: false, default: null, description: 'Fired once the value fills every cell.' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fired on every value change.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Accent palette for the active-cell ring (→ --c).' },
		{ name: 'invalid', type: 'boolean', required: false, default: 'false', description: 'Error state — flags the cells red (→ data-invalid).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert + dimmed.' },
		{ name: 'name', type: 'string', required: false, default: null, description: 'Form field name on the hidden input.' },
		{ name: 'inputId', type: 'string', required: false, default: null, description: 'Id for the hidden input.' },
		{ name: 'inputRef', type: 'HTMLInputElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the hidden input (the real control).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root wrapper.' },
		{ name: 'children', type: 'Snippet<[{ cells }]>', required: false, default: null, description: 'Slot loop — render a PinInput.Cell per cell. Omit for the default cells.' }
	];

	const cellApi: ApiProp[] = [
		{ name: 'cell', type: 'PinInputCell', required: true, default: null, description: 'The slot object from the children snippet — { char, isActive, hasFakeCaret }.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom cell content; defaults to the char + a fake caret.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the cell element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the cell element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.pinInput.title')}</h2>
	<p>{t('playground.pinInput.description')}</p>
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
	title="PinInput.Root"
	api={rootApi}
	hint="The owner: holds the value behind a single hidden <input> (autocomplete=one-time-code for SMS autofill) overlaying the cells. Sanitizes input + paste, fires onComplete. Publishes data-pin-input-root / data-disabled / data-invalid. Every extra attribute (aria-label, etc.) lands on the hidden input."
/>
<ApiTable
	title="PinInput.Cell"
	api={cellApi}
	hint="One visual slot, driven by its cell object — renders the char + a blinking fake caret when active+empty. Publishes data-active / data-filled / data-disabled. Place via the Root's children snippet, one per cell."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
