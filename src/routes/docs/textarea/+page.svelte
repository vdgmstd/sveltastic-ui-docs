<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/TextareaSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: "$bindable('')", description: 'Bound text value.' },
		{ name: 'variant', type: 'TextareaVariant', required: false, default: "'default'", description: "Visual style: 'default' | 'border' | 'shadow'." },
		{ name: 'labelStyle', type: 'TextareaLabelStyle', required: false, default: "'default'", description: 'Label placement / behaviour for the child Textarea.Label.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container.' },
		{ name: 'fieldState', type: 'TextareaState', required: false, default: "'default'", description: 'Tints background / label. Named fieldState to avoid colliding with the $state rune.' },
		{ name: 'autoGrow', type: 'boolean', required: false, default: 'false', description: 'Auto-grow height with content.' },
		{ name: 'transparent', type: 'boolean', required: false, default: 'false', description: 'Drop background.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Custom palette accent.' },
		{ name: 'mask', type: 'MaskOptions', required: false, default: null, description: "Mask pattern — string, alternatives array, or full maska options. Tokens: # digit, @ letter, * alphanumeric." },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state, flows to the field.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Read-only state, flows to the field.' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fires with the new value on every edit (kit controlled-state idiom).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the wrapper element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the styled column wrapper with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Textarea.Control, Textarea.Label, and Textarea.Message here.' }
	];

	const controlApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the inner control wrapper.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the inner control wrapper with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Textarea.Field here.' }
	];

	const fieldApi: ApiProp[] = [
		{ name: 'placeholder', type: 'string', required: false, default: null, description: 'Native placeholder text (used as the animated fake placeholder in the default label style).' },
		{ name: 'rows', type: 'number', required: false, default: null, description: 'Native textarea rows.' },
		{ name: 'maxlength', type: 'number', required: false, default: null, description: 'Native textarea maxlength.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no visible Textarea.Label is rendered (→ aria-label).' },
		{ name: 'ref', type: 'HTMLTextAreaElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the underlying <textarea> — bind here for focus / measurement.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the native <textarea> with your own control; spread the merged props it hands you.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLLabelElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the <label>.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the <label> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label text. Placement follows Textarea.Root labelStyle.' }
	];

	const messageApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the message element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the message element with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Feedback message under the field; role switches to alert when fieldState is danger, otherwise status.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<ApiTable
	title="Textarea.Root"
	api={rootApi}
	hint="The shell. Visual config and bind:value + onValueChange live here and flow to the parts via context. Compose it with Textarea.Control (wrapping Textarea.Field), Textarea.Label and Textarea.Message. Publishes data-state / data-disabled / data-readonly / data-field-state / data-variant / data-label-style hooks. Plus every native HTML attribute forwarded to the wrapper element."
/>
<ApiTable
	title="Textarea.Control"
	api={controlApi}
	hint="The inner control wrapper around Textarea.Field; owns the focus ripple and the variant underline/shadow. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Textarea.Field"
	api={fieldApi}
	hint="The native <textarea>. All native textarea attributes (placeholder, rows, maxlength, name, aria-*, …) live here — except value, which lives on Textarea.Root. Publishes data-state / data-disabled / data-field-state hooks."
/>
<ApiTable
	title="Textarea.Label"
	api={labelApi}
	hint="The field label, wired to the textarea via for/id. Placement (default / inline / floating placeholder) follows Textarea.Root labelStyle. Plus every native HTML label attribute."
/>
<ApiTable
	title="Textarea.Message"
	api={messageApi}
	hint="Feedback message rendered as a direct child of Textarea.Root (after Textarea.Control); role switches to alert when fieldState is danger, otherwise status. Plus every native HTML attribute."
/>
