<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicCombobox from '../../_playground/examples/combobox/BasicCombobox.svelte';
	import GroupedCombobox from '../../_playground/examples/combobox/GroupedCombobox.svelte';
	import MultipleCombobox from '../../_playground/examples/combobox/MultipleCombobox.svelte';
	import ManualFilterCombobox from '../../_playground/examples/combobox/ManualFilterCombobox.svelte';
	import CustomItemCombobox from '../../_playground/examples/combobox/CustomItemCombobox.svelte';

	import basicSrc from '../../_playground/examples/combobox/BasicCombobox.svelte?raw';
	import groupedSrc from '../../_playground/examples/combobox/GroupedCombobox.svelte?raw';
	import multipleSrc from '../../_playground/examples/combobox/MultipleCombobox.svelte?raw';
	import manualSrc from '../../_playground/examples/combobox/ManualFilterCombobox.svelte?raw';
	import customSrc from '../../_playground/examples/combobox/CustomItemCombobox.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.combobox.basic.label', hintKey: 'playground.combobox.basic.hint', Component: BasicCombobox, src: basicSrc },
		{ labelKey: 'playground.combobox.grouped.label', hintKey: 'playground.combobox.grouped.hint', Component: GroupedCombobox, src: groupedSrc },
		{ labelKey: 'playground.combobox.multiple.label', hintKey: 'playground.combobox.multiple.hint', Component: MultipleCombobox, src: multipleSrc },
		{ labelKey: 'playground.combobox.manual.label', hintKey: 'playground.combobox.manual.hint', Component: ManualFilterCombobox, src: manualSrc },
		{ labelKey: 'playground.combobox.custom.label', hintKey: 'playground.combobox.custom.hint', Component: CustomItemCombobox, src: customSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'multiple'", required: false, default: "'single'", description: 'Selection mode. Discriminates the value type (V vs V[]).' },
		{ name: 'value', type: 'V | V[]', required: false, default: '$bindable()', description: 'Bound selection — V in single mode, V[] in multiple mode.' },
		{ name: 'inputValue', type: 'string', required: false, default: "$bindable('')", description: 'The editable query text. Two-way bindable; also flows through onInputValueChange.' },
		{ name: 'items', type: 'ComboboxItems<V>', required: false, default: '[]', description: 'Flat items and/or grouped sections. Feeds selection, keyboard navigation, and the built-in filter.' },
		{ name: 'filter', type: 'boolean', required: false, default: 'true', description: 'Built-in filtering of items by the typed query. Set false to narrow items yourself (react to onInputValueChange).' },
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Dropdown open state. Two-way bindable.' },
		{ name: 'loop', type: 'boolean', required: false, default: 'true', description: 'Wrap arrow navigation past the first / last row.' },
		{ name: 'allowDeselect', type: 'boolean', required: false, default: 'false', description: 'Single mode only — re-picking the selected row clears it.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the whole control.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Spinner indicator (visual only).' },
		{ name: 'variant', type: 'InputVariant', required: false, default: "'default'", description: "Visual style, mirrors Input: 'default' | 'border' | 'shadow'." },
		{ name: 'fieldState', type: 'InputState', required: false, default: "'default'", description: "State tint, mirrors Input: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'dark'." },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container width.' },
		{ name: 'openAnim', type: 'PopoverOpenAnim', required: false, default: "'pop'", description: "Dropdown open/close animation: 'pop' | 'slide' | 'fade' | 'spring' | 'none'." },
		{ name: 'labelStyle', type: 'InputLabelStyle', required: false, default: "'default'", description: "Label / placeholder behaviour: 'default' | 'placeholder' | 'inline'." },
		{ name: 'label', type: 'string', required: false, default: null, description: 'Static field label.' },
		{ name: 'placeholder', type: 'string', required: false, default: "''", description: 'Placeholder text when nothing is typed.' },
		{ name: 'emptyText', type: 'string', required: false, default: "'No data'", description: 'Default empty-state text (no rows / filtered to nothing). Override the tray with Combobox.Empty.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette color, drives the indicator / highlight tints.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the input when no visible label is present.' },
		{ name: 'onValueChange', type: '(value: V | V[] | undefined) => void', required: false, default: null, description: 'Fires whenever the selection changes.' },
		{ name: 'onInputValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fires whenever the query text changes.' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever open changes (open or close).' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the close transition finishes (panel fully removed).' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root wrapper.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root wrapper.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Combobox.Input and Combobox.Content (and Combobox.Portal) here.' }
	];

	const inputApi: ApiProp[] = [
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the whole field; spread the merged combobox props it hands you.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the input element.' },
		{ name: '…rest', type: 'HTMLInputAttributes', required: false, default: null, description: 'Native input attributes (except value / children), forwarded to the field.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Hand-authored rows (Combobox.Group / Combobox.Item / Combobox.Empty). When omitted, rows are generated from Combobox.Root items.' },
		{ name: 'child', type: 'Snippet<[{ props, body }]>', required: false, default: null, description: 'Render-delegation: spread props on your own panel-body element and {@render body()} for the rows.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: 'null', description: 'Bindable reference to the rendered panel-body element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the panel-body element.' },
		{ name: '…rest', type: 'HTMLAttributes', required: false, default: null, description: 'Every native HTML / data-* / aria-* attribute, forwarded to the panel-body element.' }
	];

	const viewportApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Scroll-region content. Renders display:contents — a positional wrapper for the rows.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own scroll region.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the viewport element.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'value', type: 'V', required: true, default: null, description: 'Stored when this row is picked.' },
		{ name: 'label', type: 'string', required: false, default: null, description: 'Visible label, used by the default row and the filter. Defaults to String(value).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert row — cannot be picked.' },
		{ name: 'index', type: 'number', required: false, default: null, description: 'Override the flat row index used for keyboard navigation. Auto-derived from mount order for hand-authored rows.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom row content (compose Combobox.ItemText / Combobox.ItemIndicator).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged option props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const itemTextApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label text. Falls back to the row label from item context.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the text element.' }
	];

	const itemIndicatorApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom selected-marker glyph (replaces the default check). Rendered only when the row is selected.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the indicator element.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'A Combobox.GroupHeading plus its Combobox.Item rows. Wraps them in role="group" wired to the heading.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const groupHeadingApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Heading text for the parent Combobox.Group; styled as the menu section label and registered for aria-labelledby.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the heading element.' }
	];

	const emptyApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Empty-state content shown when no rows are available (replaces the default tray + "No data").' }
	];

	const portalApi: ApiProp[] = [
		{ name: 'to', type: 'string | HTMLElement', required: false, default: 'document.body', description: 'Portal target for the dropdown panel. CSS selector or element.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Render the panel in place instead of portalling it.' },
		{ name: 'forceMount', type: 'boolean', required: false, default: 'false', description: 'Keep the panel mounted while closed (presence via data-state).' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.combobox.title')}</h2>
	<p>{t('playground.combobox.description')}</p>
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
	title="Combobox.Root"
	api={rootApi}
	hint="The shell. Selection (bind:value), the editable query (bind:inputValue), built-in filtering, and visual config live here and flow to the parts via context. Generic over V, discriminated on type. Publishes a data-state (open / closed) hook. Compose with Combobox.Input and Combobox.Content."
/>
<ApiTable
	title="Combobox.Input"
	api={inputApi}
	hint="The editable combobox field. Renders the styled input shell + caret; typing drives the query (and the built-in filter). Carries the combobox ARIA (role=combobox, aria-expanded, aria-controls, aria-activedescendant) and data-state / data-disabled / data-placeholder hooks."
/>
<ApiTable
	title="Combobox.Content"
	api={contentApi}
	hint="The dropdown panel body. Omit children to render rows from Combobox.Root items; pass children to hand-author Combobox.Group / Combobox.Item / Combobox.Empty. Exposes ref, the child render-delegation snippet, class / data-* pass-through and a data-state hook."
/>
<ApiTable
	title="Combobox.Viewport"
	api={viewportApi}
	hint="Optional scroll-region wrapper around the rows inside Combobox.Content. Renders display:contents so it does not alter layout."
/>
<ApiTable
	title="Combobox.Item"
	api={itemApi}
	hint="A selectable row. Renders the default styled menu row with label + check, or your own markup via children (compose Combobox.ItemText / Combobox.ItemIndicator). Publishes data-selected / data-highlighted / data-disabled / data-value / data-label hooks."
/>
<ApiTable
	title="Combobox.ItemText"
	api={itemTextApi}
	hint="The row label inside a custom Combobox.Item. Reads the label from item context when no children are given."
/>
<ApiTable
	title="Combobox.ItemIndicator"
	api={itemIndicatorApi}
	hint="The selected-marker inside a custom Combobox.Item; renders only when the row is selected. Publishes a data-state hook."
/>
<ApiTable
	title="Combobox.Group"
	api={groupApi}
	hint="A labelled section of rows (role=group), wired to its Combobox.GroupHeading via aria-labelledby."
/>
<ApiTable
	title="Combobox.GroupHeading"
	api={groupHeadingApi}
	hint="The section label for a Combobox.Group, styled as the menu section heading."
/>
<ApiTable
	title="Combobox.Empty"
	api={emptyApi}
	hint="Empty-state content for Combobox.Content when no rows are available."
/>
<ApiTable
	title="Combobox.Portal"
	api={portalApi}
	hint="Portals the dropdown panel to document.body (or a custom target). Wrap Combobox.Content to re-target the stacking context, or set forceMount to attach your own transitions."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
