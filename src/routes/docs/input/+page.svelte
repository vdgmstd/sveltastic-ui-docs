<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/InputSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: "$bindable('')", description: "Bound input value (strings only — for numbers/dates use bind:value and let `type` coerce)." },
		{ name: 'variant', type: 'InputVariant', required: false, default: "'default'", description: "Visual style: 'default' | 'border' | 'shadow'." },
		{ name: 'labelStyle', type: 'InputLabelStyle', required: false, default: "'default'", description: 'Label placement / behaviour for the child Input.Label.' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Field shape — only 'square' (radius 0) differs from the default." },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container.' },
		{ name: 'iconPosition', type: "'before' | 'after'", required: false, default: "'before'", description: 'Side the child Input.Icon sits on.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner overlay.' },
		{ name: 'fieldState', type: 'InputState', required: false, default: "'default'", description: 'Tints background / label / icon. Named fieldState to avoid colliding with the $state rune.' },
		{ name: 'progress', type: 'number', required: false, default: '0', description: '0..100 progress bar at the bottom.' },
		{ name: 'transparent', type: 'boolean', required: false, default: 'false', description: 'Drop background.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Custom palette color.' },
		{ name: 'iconColor', type: 'Color', required: false, default: null, description: 'When set, the icon background fills with this color on focus (and the glyph turns white). When unset, only the glyph color changes on focus.' },
		{ name: 'mask', type: 'MaskOptions', required: false, default: null, description: "Mask pattern — string (e.g. '###-###'), alternatives array, or full maska options. Tokens: # digit, @ letter, * alphanumeric." },
		{ name: 'forceFocus', type: 'boolean', required: false, default: 'false', description: 'External force-focused override; renders as if focused regardless of real DOM focus. For composite controls (Select / DateTimePicker).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state, flows to the field.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Read-only state, flows to the field.' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fires with the new value on every edit (kit controlled-state idiom).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the wrapper element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the styled column wrapper with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Input.Control and Input.Message here.' }
	];

	const controlApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the inner control row.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the inner control row with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Input.Icon, Input.Field, and Input.Label here.' }
	];

	const fieldApi: ApiProp[] = [
		{ name: 'type', type: 'string', required: false, default: "'text'", description: 'Native input type (text, email, password, …).' },
		{ name: 'placeholder', type: 'string', required: false, default: null, description: 'Native placeholder text.' },
		{ name: 'passwordReveal', type: 'boolean', required: false, default: 'false', description: "Eye-toggle button when type === 'password'." },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no visible Input.Label is rendered (→ aria-label).' },
		{ name: 'showPasswordLabel', type: 'string', required: false, default: "'Show password'", description: 'Accessible label for the reveal button while the value is hidden.' },
		{ name: 'hidePasswordLabel', type: 'string', required: false, default: "'Hide password'", description: 'Accessible label for the reveal button while the value is shown.' },
		{ name: 'ref', type: 'HTMLInputElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the underlying <input> — bind here for focus / measurement.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the native <input> with your own control; spread the merged props it hands you.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'oniconclick', type: '(event: MouseEvent) => void', required: false, default: null, description: 'Fires when the icon is clicked — also makes the icon focusable / clickable.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icon button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the icon button with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The glyph to render (e.g. a phosphor-svelte icon).' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLLabelElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the <label>.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the <label> with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label text. Placement follows Input.Root labelStyle.' }
	];

	const messageApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the message element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the message element with your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Feedback message under the field; color follows Input.Root fieldState.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<ApiTable
	title="Input.Root"
	api={rootApi}
	hint="The shell. Visual config and bind:value + onValueChange live here and flow to the parts via context. Compose it with Input.Control (wrapping Input.Icon / Input.Field / Input.Label) and Input.Message. Publishes data-state / data-disabled / data-readonly / data-field-state / data-variant / data-loading hooks. Plus every native HTML attribute forwarded to the wrapper element."
/>
<ApiTable
	title="Input.Control"
	api={controlApi}
	hint="The inner control row that wraps Input.Icon, Input.Field and Input.Label, and owns the focus ripple + loading spinner + variant underline/shadow. Plus every native HTML attribute forwarded to the row element."
/>
<ApiTable
	title="Input.Field"
	api={fieldApi}
	hint="The native <input>. All native input attributes (name, autocomplete, maxlength, aria-*, …) live here — except value, which lives on Input.Root. Publishes data-state / data-disabled / data-field-state hooks."
/>
<ApiTable
	title="Input.Icon"
	api={iconApi}
	hint="Leading / trailing glyph (side set by Input.Root iconPosition). Pass the icon as children. Plus every native HTML button attribute forwarded to the icon element."
/>
<ApiTable
	title="Input.Label"
	api={labelApi}
	hint="The field label, wired to the input via for/id. Placement (default / inline / floating placeholder) follows Input.Root labelStyle. Plus every native HTML label attribute."
/>
<ApiTable
	title="Input.Message"
	api={messageApi}
	hint="Feedback message rendered as a direct child of Input.Root (after Input.Control); role switches to alert when fieldState is danger, otherwise status. Plus every native HTML attribute."
/>
