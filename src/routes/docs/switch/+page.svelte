<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/SwitchSection.svelte';
	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'checked', type: 'boolean', required: false, default: '$bindable(false)', description: 'Boolean state. Use bind:checked for two-way control.' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Pill ('default' / 'circle') or square ('square') track." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Visual size.' },
		{ name: 'indeterminate', type: 'boolean', required: false, default: 'false', description: 'Centre the knob and lock interaction (renders as a mixed checkbox).' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner overlay (collapses the track to a circle).' },
		{ name: 'ghostKnob', type: 'boolean', required: false, default: 'false', description: 'Icon-knob mode — drops the white pill so a Switch.Icon state="knob" IS the knob.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Track + bg accent (only the swooping bg circle is tinted; knob always stays white).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name — required when no visible Switch.Label is associated with the control.' },
		{ name: 'onCheckedChange', type: '(checked: boolean) => void', required: false, default: null, description: 'Fires with the next checked state on toggle.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Composition — place Switch.Thumb + optional Switch.Icon parts here.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own track element.' },
		{ name: 'ref', type: 'HTMLInputElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the underlying input element.' }
	];

	const thumbApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Knob content — a small Switch.Icon state="knob" glyph rendered inside the sliding circle.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own knob element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the knob element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the knob element.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'state', type: "'knob' | 'on' | 'off'", required: false, default: "'on'", description: "Where the glyph lives: 'knob' (inside the circle), 'on' (track label when checked), 'off' (track label when unchecked)." },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Glyph content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own glyph element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the glyph element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the glyph element.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own label element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the label element.' },
		{ name: 'ref', type: 'HTMLLabelElement | null', required: false, default: '$bindable(null)', description: 'Bindable reference to the label element.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Switch.Root"
	api={rootApi}
	hint="The toggle shell. All visual config and bind:checked + onCheckedChange live here and flow to the parts via context. Compose with Switch.Thumb (required, renders the knob) plus optional Switch.Icon / Switch.Label. Publishes data-checked / data-disabled / data-loading / data-icon / data-indeterminate hooks. Plus every native HTML input attribute forwarded to the underlying input."
/>
<ApiTable
	title="Switch.Thumb"
	api={thumbApi}
	hint="The sliding knob — its children render inside the circle. Required for the knob to render."
/>
<ApiTable
	title="Switch.Icon"
	api={iconApi}
	hint="A glyph slotted by state: a knob icon, or the inline on / off track labels shown as the switch toggles."
/>
<ApiTable
	title="Switch.Label"
	api={labelApi}
	hint="An associated label element (label[for] wired to the input id). Click toggles the switch."
/>
