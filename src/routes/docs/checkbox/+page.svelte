<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/CheckboxSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'checked', type: 'boolean', required: false, default: 'false', description: 'Boolean checked state. Use bind:checked for two-way control. Mutually exclusive with a group value.' },
		{ name: 'value', type: 'V', required: false, default: null, description: 'Membership token contributed to an enclosing Checkbox.Group.' },
		{ name: 'indeterminate', type: 'boolean', required: false, default: 'false', description: 'Third-state visual; renders a minus glyph instead of the check. Use bind:indeterminate.' },
		{ name: 'lineThrough', type: 'boolean', required: false, default: 'false', description: 'Strike through the label when checked.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner overlay; blocks interaction.' },
		{ name: 'disabled', type: 'boolean', required: false, default: null, description: 'Inert checkbox (falls back to the group disabled).' },
		{ name: 'required', type: 'boolean', required: false, default: null, description: 'Mark the control as required (sets aria-required and the native attribute).' },
		{ name: 'labelPosition', type: "'before' | 'after'", required: false, default: "'after'", description: 'Label placement relative to the box.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name or hex / rgb.' },
		{ name: 'name', type: 'string', required: false, default: null, description: 'Native name for form submission (falls back to the group name).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no visible Checkbox.Label is rendered.' },
		{ name: 'onCheckedChange', type: '(checked) => void', required: false, default: null, description: 'Fires with the next checked state on change.' },
		{ name: 'onIndeterminateChange', type: '(indeterminate) => void', required: false, default: null, description: 'Fires with the next indeterminate state when it clears on toggle.' },
		{ name: 'ref', type: 'HTMLLabelElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root <label> element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own label element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Compose Checkbox.Indicator + optional Checkbox.Label.' }
	];

	const indicatorApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the indicator box.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the box element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Optional Checkbox.Icon rendered as the checked glyph.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the glyph element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the glyph element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom glyph rendered when checked (replaces the default check). Place inside Checkbox.Indicator.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the label element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'value', type: 'string[]', required: false, default: '[]', description: 'Membership array of checked tokens. Use bind:value for two-way control.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable every checkbox in the group.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Block interaction without dimming.' },
		{ name: 'required', type: 'boolean', required: false, default: 'false', description: 'Mark the group required.' },
		{ name: 'name', type: 'string', required: false, default: null, description: 'Native name applied to each member input (for form submission).' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Palette accent cascaded to members.' },
		{ name: 'onValueChange', type: '(value: string[]) => void', required: false, default: null, description: 'Fires with the next membership array on change.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Member Checkbox.Root controls and an optional Checkbox.GroupLabel.' }
	];

	const groupLabelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content; registered as the group aria-labelledby target.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<ApiTable
	title="Checkbox.Root"
	api={rootApi}
	hint="The control. Compose Checkbox.Indicator + optional Checkbox.Label as children, or place inside Checkbox.Group for multi-select. Publishes data-state (checked / unchecked / indeterminate) plus data-checked / data-disabled / data-loading / data-indeterminate; the child snippet swaps the <label> and bind:ref exposes it. Plus every native HTML attribute forwarded to the root element."
/>
<ApiTable
	title="Checkbox.Indicator"
	api={indicatorApi}
	hint="The animated box with the check / minus glyph and loading spinner. Wrap a Checkbox.Icon to override the checked glyph. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Checkbox.Icon"
	api={iconApi}
	hint="A custom glyph shown when checked, replacing the default check. Place it inside Checkbox.Indicator. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Checkbox.Label"
	api={labelApi}
	hint="The caption beside the box; placement follows the root labelPosition. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Checkbox.Group"
	api={groupApi}
	hint="Wraps member Checkbox.Root controls and owns the membership array via bind:value. Cascades color, disabled, readonly, required, and name to its members."
/>
<ApiTable
	title="Checkbox.GroupLabel"
	api={groupLabelApi}
	hint="Optional accessible label for a Checkbox.Group; registered as the group's aria-labelledby target."
/>
