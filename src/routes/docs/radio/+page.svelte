<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/RadioSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: null, description: 'Selected token. Bindable with bind:value.' },
		{ name: 'name', type: 'string', required: false, default: null, description: 'Native name shared by the radio set; enables form submission. Auto-generated if omitted.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the entire group.' },
		{ name: 'required', type: 'boolean', required: false, default: 'false', description: 'Mark the radio set as required for form validation.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Focus and arrows work but selection cannot change.' },
		{ name: 'orientation', type: 'RadioGroupOrientation', required: false, default: "'vertical'", description: "Layout + arrow-key axis: 'vertical' | 'horizontal'." },
		{ name: 'loop', type: 'boolean', required: false, default: 'false', description: 'Wrap arrow navigation past the ends.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent for every disc (overridable per RadioGroup.Item).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible label for the radiogroup.' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fired on selection change.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'RadioGroup.Item children, in any order.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: true, default: null, description: 'The token this radio represents. Selected when the group value equals it.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert radio.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner overlay; blocks interaction.' },
		{ name: 'labelPosition', type: "'before' | 'after'", required: false, default: "'after'", description: 'Label placement relative to the disc.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Per-item palette accent. Falls back to the group color.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no visible RadioGroup.Label is rendered.' },
		{ name: 'ref', type: 'HTMLLabelElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the item <label>.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own label element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Compose RadioGroup.Indicator + RadioGroup.Label.' }
	];

	const indicatorApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the disc element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the disc element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Optional glyph rendered as the active indicator instead of the dot. Hidden until selected.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the label element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content; placement follows the item labelPosition.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<ApiTable
	title="RadioGroup.Root"
	api={rootApi}
	hint="The selection owner. Bind the shared value with bind:value; onValueChange fires with the newly selected token. Drives the radiogroup role, roving-tabindex arrow navigation (orientation + loop), and the shared name for native form submission. Publishes data-orientation / data-disabled / data-readonly; the child snippet swaps the container element and bind:ref exposes the root <div>. Plus every native HTML attribute (id, aria-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="RadioGroup.Item"
	api={itemApi}
	hint="One selectable row. value is required and selected when the group value equals it; color falls back to the group color. Compose RadioGroup.Indicator + RadioGroup.Label as children. Publishes data-state (checked / unchecked) plus data-checked / data-disabled / data-readonly / data-loading / data-pressing / data-label-before; the child snippet swaps the <label> and bind:ref exposes it."
/>
<ApiTable
	title="RadioGroup.Indicator"
	api={indicatorApi}
	hint="The disc (radio dot). Wrap a glyph to render a custom active indicator instead of the dot. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="RadioGroup.Label"
	api={labelApi}
	hint="The caption beside the disc; placement follows the item labelPosition. Plus every native HTML attribute forwarded to the element."
/>
