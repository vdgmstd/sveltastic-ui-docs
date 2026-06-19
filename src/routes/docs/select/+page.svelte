<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/SelectSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';
	import { Select } from 'sveltastic-ui';
	let tmpInlineValue = $state<string>();

	const rootApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'multiple'", required: false, default: "'single'", description: 'Selection mode. Discriminates the value type (V vs V[]).' },
		{ name: 'value', type: 'V | V[]', required: false, default: '$bindable()', description: 'Bound selection — V in single mode, V[] in multiple mode.' },
		{ name: 'items', type: 'SelectItems<V>', required: false, default: '[]', description: 'Flat items and/or grouped sections. Feeds selection, keyboard navigation, typeahead and filtering even when rows are hand-authored in Select.Content.' },
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Dropdown open state. Two-way bindable.' },
		{ name: 'filter', type: 'boolean', required: false, default: 'false', description: 'Inline text filter typed into the trigger.' },
		{ name: 'loop', type: 'boolean', required: false, default: 'true', description: 'Wrap arrow navigation past the first / last row.' },
		{ name: 'allowDeselect', type: 'boolean', required: false, default: 'false', description: 'Single mode only — re-picking the selected row clears it.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the whole control.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner indicator (visual only).' },
		{ name: 'variant', type: 'InputVariant', required: false, default: "'default'", description: "Visual style, mirrors Input: 'default' | 'border' | 'shadow'." },
		{ name: 'fieldState', type: 'InputState', required: false, default: "'default'", description: "State tint, mirrors Input: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'dark'." },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container width.' },
		{ name: 'collapseChips', type: 'boolean', required: false, default: 'false', description: 'Multiple mode — collapse chips after the first to a "+N" pill.' },
		{ name: 'openAnim', type: 'SelectOpenAnim', required: false, default: "'pop'", description: "Dropdown open/close animation: 'pop' | 'slide' | 'fade' | 'spring' | 'stagger'." },
		{ name: 'labelStyle', type: 'InputLabelStyle', required: false, default: "'default'", description: "Label / placeholder behaviour: 'default' | 'placeholder' | 'inline'." },
		{ name: 'label', type: 'string', required: false, default: null, description: 'Static field label.' },
		{ name: 'placeholder', type: 'string', required: false, default: "''", description: 'Placeholder text when nothing is selected.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette color, drives the chip / indicator / highlight tints.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the trigger when no visible label is present.' },
		{ name: 'onValueChange', type: '(value: V | V[] | undefined) => void', required: false, default: null, description: 'Fires whenever the selection changes (kit controlled-state idiom).' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever open changes (open or close).' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the close transition finishes (panel fully removed).' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root wrapper.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root wrapper.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Select.Trigger and Select.Content (and Select.Portal) here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Optional Select.Value / Select.Icon overrides. Omit for the default styled field + caret.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the whole field; spread the merged combobox props it hands you.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger element.' }
	];

	const valueApi: ApiProp[] = [
		{ name: 'placeholder', type: 'string', required: false, default: null, description: 'Single-mode placeholder; defaults to Select.Root placeholder.' },
		{ name: 'children', type: 'Snippet<[{ selected: SelectItem<V> }]>', required: false, default: null, description: 'Custom single-mode display, rendered with the selected item (replaces the default label). Wrap a Select.Chip inside for multiple mode.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom indicator glyph (replaces the default chevron). Still rotates with open state via the trigger.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Hand-authored rows (Select.Group / Select.Item / Select.Empty). When omitted, rows are generated from Select.Root items.' },
		{ name: 'child', type: 'Snippet<[{ props, body }]>', required: false, default: null, description: 'Render-delegation: spread props on your own panel-body element and {@render body()} for the rows.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: 'null', description: 'Bindable reference to the rendered panel-body element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the panel-body element.' },
		{ name: '…rest', type: 'HTMLAttributes', required: false, default: null, description: 'Every native HTML / data-* / aria-* attribute, forwarded to the panel-body element.' }
	];

	const viewportApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Scroll-region content. Renders display:contents — a positional wrapper for the rows.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own scroll region.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the viewport element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the viewport element.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'value', type: 'V', required: true, default: null, description: 'Stored when this row is picked.' },
		{ name: 'label', type: 'string', required: false, default: null, description: 'Visible label, used by the default row and typeahead. Defaults to String(value).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert row — cannot be picked.' },
		{ name: 'index', type: 'number', required: false, default: null, description: 'Override the flat row index used for keyboard navigation. Auto-derived from mount order for hand-authored rows; pass this only to force a position.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom row content (compose Select.ItemText / Select.ItemIndicator). Omit for the default label row.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged option props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const itemTextApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label text. Falls back to the row label from item context.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the text element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the text element.' }
	];

	const itemIndicatorApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom selected-marker glyph (replaces the default check). Rendered only when the row is selected.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the indicator element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the indicator element.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'A Select.GroupHeading plus its Select.Item rows. Wraps them in role="group" wired to the heading.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const groupHeadingApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Heading text for the parent Select.Group; styled as the menu section label and registered for aria-labelledby.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the heading element.' }
	];

	const emptyApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Empty-state content shown when no rows are available (replaces the default tray + "No data").' }
	];

	const chipApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet<[{ item: SelectItem<V>; remove: () => void }]>', required: false, default: null, description: 'Custom chip template, rendered once per selected item (multiple mode) with its data + a remove callback. Place inside Select.Value.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<div data-testid="tmp-inline-select" style="padding:2rem;">
	<Select.Root
		bind:value={tmpInlineValue}
		label="Country"
		labelStyle="inline"
		items={[
			{ value: 'us', label: 'United States' },
			{ value: 'gb', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' }
		]}
	>
		<Select.Trigger />
		<Select.Content />
	</Select.Root>
</div>

<ApiTable
	title="Select.Root"
	api={rootApi}
	hint="The shell. All selection / visual config and bind:value + onValueChange live here and flow to the parts via context. Generic over the option value V and discriminated on type. Publishes a data-state (open / closed) hook. Compose with Select.Trigger and Select.Content."
/>
<ApiTable
	title="Select.Trigger"
	api={triggerApi}
	hint="The combobox field. Renders the styled input shell + caret by default; pass Select.Value / Select.Icon children to customise. Publishes data-state / data-disabled / data-placeholder hooks. Plus every native HTML input attribute (except value / children)."
/>
<ApiTable
	title="Select.Value"
	api={valueApi}
	hint="Custom display of the current selection inside Select.Trigger. Single mode: a children snippet receiving the selected item. Multiple mode: wrap a Select.Chip. Omit for the default label / chip rendering."
/>
<ApiTable
	title="Select.Icon"
	api={iconApi}
	hint="Custom trigger indicator (replaces the default chevron). The trigger still rotates it 180° on open."
/>
<ApiTable
	title="Select.Content"
	api={contentApi}
	hint="The dropdown panel body. Omit children to render rows from Select.Root items; pass children to hand-author Select.Group / Select.Item / Select.Empty. Exposes ref, the child render-delegation snippet, class / data-* pass-through and a data-state hook."
/>
<ApiTable
	title="Select.Viewport"
	api={viewportApi}
	hint="Optional scroll-region wrapper around the rows inside Select.Content. Renders display:contents so it does not alter layout. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Select.Item"
	api={itemApi}
	hint="A selectable row. Renders the default styled menu row with label + check, or your own markup via children (compose Select.ItemText / Select.ItemIndicator). Publishes data-state (checked / unchecked) / data-highlighted / data-disabled hooks."
/>
<ApiTable
	title="Select.ItemText"
	api={itemTextApi}
	hint="The row label inside a custom Select.Item. Reads the label from item context when no children are given. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Select.ItemIndicator"
	api={itemIndicatorApi}
	hint="The selected-marker inside a custom Select.Item; renders only when the row is selected. Publishes a data-state hook. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Select.Group"
	api={groupApi}
	hint="A labelled section of rows (role=group), wired to its Select.GroupHeading via aria-labelledby."
/>
<ApiTable
	title="Select.GroupHeading"
	api={groupHeadingApi}
	hint="The section label for a Select.Group, styled as the menu section heading."
/>
<ApiTable
	title="Select.Empty"
	api={emptyApi}
	hint="Empty-state content for Select.Content when no rows are available."
/>
<ApiTable
	title="Select.Chip"
	api={chipApi}
	hint="Custom chip template for multiple mode, placed inside Select.Value. Rendered once per selected item with its data and a remove callback."
/>
