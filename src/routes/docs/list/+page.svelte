<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicList from '../../_playground/examples/list/BasicList.svelte';
	import VariantsList from '../../_playground/examples/list/VariantsList.svelte';
	import SizesList from '../../_playground/examples/list/SizesList.svelte';
	import ColorsList from '../../_playground/examples/list/ColorsList.svelte';
	import DividedList from '../../_playground/examples/list/DividedList.svelte';
	import HeaderFooterList from '../../_playground/examples/list/HeaderFooterList.svelte';
	import IconsList from '../../_playground/examples/list/IconsList.svelte';
	import StatesList from '../../_playground/examples/list/StatesList.svelte';
	import GroupsList from '../../_playground/examples/list/GroupsList.svelte';
	import LabelList from '../../_playground/examples/list/LabelList.svelte';
	import ListboxList from '../../_playground/examples/list/ListboxList.svelte';
	import MultiselectList from '../../_playground/examples/list/MultiselectList.svelte';
	import ChildList from '../../_playground/examples/list/ChildList.svelte';
	import EmptyList from '../../_playground/examples/list/EmptyList.svelte';

	import basicSrc from '../../_playground/examples/list/BasicList.svelte?raw';
	import variantsSrc from '../../_playground/examples/list/VariantsList.svelte?raw';
	import sizesSrc from '../../_playground/examples/list/SizesList.svelte?raw';
	import colorsSrc from '../../_playground/examples/list/ColorsList.svelte?raw';
	import dividedSrc from '../../_playground/examples/list/DividedList.svelte?raw';
	import headerFooterSrc from '../../_playground/examples/list/HeaderFooterList.svelte?raw';
	import iconsSrc from '../../_playground/examples/list/IconsList.svelte?raw';
	import statesSrc from '../../_playground/examples/list/StatesList.svelte?raw';
	import groupsSrc from '../../_playground/examples/list/GroupsList.svelte?raw';
	import labelSrc from '../../_playground/examples/list/LabelList.svelte?raw';
	import listboxSrc from '../../_playground/examples/list/ListboxList.svelte?raw';
	import multiselectSrc from '../../_playground/examples/list/MultiselectList.svelte?raw';
	import childSrc from '../../_playground/examples/list/ChildList.svelte?raw';
	import emptySrc from '../../_playground/examples/list/EmptyList.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.list.basic.label', Component: BasicList, src: basicSrc },
		{ labelKey: 'playground.list.variants.label', descriptionKey: 'playground.list.variants.hint', Component: VariantsList, src: variantsSrc },
		{ labelKey: 'playground.list.sizes.label', Component: SizesList, src: sizesSrc },
		{ labelKey: 'playground.list.colors.label', Component: ColorsList, src: colorsSrc },
		{ labelKey: 'playground.list.divided.label', Component: DividedList, src: dividedSrc },
		{ labelKey: 'playground.list.withHeader.label', Component: HeaderFooterList, src: headerFooterSrc },
		{ labelKey: 'playground.list.withIcons.label', Component: IconsList, src: iconsSrc },
		{ labelKey: 'playground.list.states.label', Component: StatesList, src: statesSrc },
		{ labelKey: 'playground.list.groups.label', Component: GroupsList, src: groupsSrc },
		{ labelKey: 'playground.list.label.label', descriptionKey: 'playground.list.label.hint', Component: LabelList, src: labelSrc },
		{ labelKey: 'playground.list.listbox.label', descriptionKey: 'playground.list.listbox.hint', Component: ListboxList, src: listboxSrc },
		{ labelKey: 'playground.list.multiselect.label', descriptionKey: 'playground.list.multiselect.hint', Component: MultiselectList, src: multiselectSrc },
		{ labelKey: 'playground.list.child.label', descriptionKey: 'playground.list.child.hint', Component: ChildList, src: childSrc },
		{ labelKey: 'playground.list.empty.label', Component: EmptyList, src: emptySrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'variant', type: 'ListVariant', required: false, default: "'default'", description: "Surface variant: 'default' | 'flat' | 'border' | 'transparent' | 'shadow'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name or hex / rgb(...) / r,g,b. Exposes --c for descendants.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Density token shared across all items: xl | large | medium | small | mini.' },
		{ name: 'divided', type: 'boolean', required: false, default: 'false', description: 'Hairline divider between items.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable every item at once.' },
		{ name: 'role', type: "'list' | 'menu' | 'listbox'", required: false, default: null, description: "A11y mode. 'list' static, 'menu' action group, 'listbox' selectable. Drives item role + keyboard nav. Defaults to 'listbox' when type is set, else 'list'." },
		{ name: 'type', type: "'single' | 'multiple'", required: false, default: null, description: "Selection mode. 'multiple' implies role: 'listbox' + array selected." },
		{ name: 'multiple', type: 'boolean', required: false, default: 'false', description: "Allow multiple selection (role: 'listbox' only). Prefer type: 'multiple'." },
		{ name: 'selected', type: 'T | T[]', required: false, default: '$bindable()', description: 'Selected value(s). T in single mode, T[] in multiple. Two-way bindable.' },
		{ name: 'onSelectedChange', type: '(value: T | T[]) => void', required: false, default: null, description: "Fires when the selection changes (role: 'listbox')." },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Default content — List.Body plus optional List.Header / List.Footer / List.Label.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own surface element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' }
	];

	const bodyApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the surface when no visible label/header is present.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Items — List.Item / List.Group / List.Separator / List.Empty.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the body element.' }
	];

	const headerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Header content (small uppercase caption).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the header element.' }
	];

	const footerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Footer content.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the footer element.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Caption content (small uppercase).' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' }
	];

	const emptyApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Empty-state body — placed inside List.Body.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the empty element.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'value', type: 'V', required: false, default: null, description: "Selection value for the listbox-mode parent." },
		{ name: 'variant', type: "'default' | 'flat'", required: false, default: "'default'", description: 'Visual variant for the row.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Override list color.' },
		{ name: 'size', type: 'Size', required: false, default: null, description: 'Override list size.' },
		{ name: 'active', type: 'boolean', required: false, default: 'false', description: 'Current navigation target — sets aria-current="page".' },
		{ name: 'selected', type: 'boolean', required: false, default: 'false', description: "Selected state for role: 'listbox' parents." },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled — sets aria-disabled, blocks selection, keeps focus visible.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Loading overlay — disables interaction.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Click ripple. Set false to opt out.' },
		{ name: 'static', type: 'boolean', required: false, default: 'false', description: 'Render as a non-interactive <div> — no hover, no ripple, not focusable.' },
		{ name: 'href', type: 'string', required: false, default: null, description: 'Renders the row as <a>; otherwise <button> (or <div> with static).' },
		{ name: 'onclick', type: '(event: MouseEvent) => void', required: false, default: null, description: 'Click handler.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Row content — List.ItemLead / List.ItemContent / List.ItemTrail.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own row element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const itemLeadApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Leading visual (avatar / icon).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the lead element.' }
	];

	const itemContentApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Stacked primary + secondary text — List.ItemLabel / List.ItemDescription.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the content element.' }
	];

	const itemLabelApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Primary text (ellipsis-truncated).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' }
	];

	const itemDescriptionApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Secondary text under the label (ellipsis-truncated).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the description element.' }
	];

	const itemTrailApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trailing visual (badge / arrow / chip).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trail element.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Body — usually List.GroupLabel + List.Item children.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const groupLabelApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Caption content (small uppercase). Registered for aria-labelledby on the parent group.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group label element.' }
	];

	const separatorApi: ApiProp[] = [
		{ name: 'inset', type: 'boolean', required: false, default: 'false', description: 'Inset divider — leaves a gutter on the left to align with the item label.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLHRElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the divider element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.list.title')}</h2>
	<p>{t('playground.list.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.descriptionKey ? t(block.descriptionKey) : undefined}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="List.Root"
	api={rootApi}
	hint="The shell. All visual / selection config and bind:selected + onSelectedChange live here and flow to the parts via context. Generic over the option value T. Publishes data-variant / data-size / data-divided / data-interactive / data-disabled hooks. Compose with List.Header / List.Label / List.Body / List.Footer. Plus every native HTML attribute forwarded to the root element."
/>
<ApiTable
	title="List.Body"
	api={bodyApi}
	hint="The items container — holds List.Item / List.Group / List.Separator / List.Empty. Renders the styled surface and the listbox/menu/list role. ariaLabel lives here. Plus every native HTML attribute forwarded to the body element."
/>
<ApiTable
	title="List.Header"
	api={headerApi}
	hint="Optional caption rendered above List.Body. Plus every native HTML attribute forwarded to the header element."
/>
<ApiTable
	title="List.Footer"
	api={footerApi}
	hint="Optional footer rendered below List.Body. Plus every native HTML attribute forwarded to the footer element."
/>
<ApiTable
	title="List.Label"
	api={labelApi}
	hint="A section caption (small uppercase) placed between List.Body sections. Plus every native HTML attribute forwarded to the label element."
/>
<ApiTable
	title="List.Empty"
	api={emptyApi}
	hint="Empty-state content placed inside List.Body when there are no items. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.Item"
	api={itemApi}
	hint="A row, placed inside List.Body. Renders as <a> when href is set, else <button> (or <div> with static). Compose List.ItemLead / List.ItemContent / List.ItemTrail inside. Publishes data-active / data-selected / data-disabled / data-loading / data-interactive hooks. Plus every native HTML attribute forwarded to the row element."
/>
<ApiTable
	title="List.ItemLead"
	api={itemLeadApi}
	hint="Leading visual slot (avatar / icon) inside a List.Item. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.ItemContent"
	api={itemContentApi}
	hint="The stacked-text region inside a List.Item — wraps List.ItemLabel + List.ItemDescription. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.ItemLabel"
	api={itemLabelApi}
	hint="Primary text of a row, inside List.ItemContent. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.ItemDescription"
	api={itemDescriptionApi}
	hint="Secondary text under the label, inside List.ItemContent. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.ItemTrail"
	api={itemTrailApi}
	hint="Trailing visual slot (badge / arrow / chip) inside a List.Item. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.Group"
	api={groupApi}
	hint="A labelled section of rows (role=group), wired to its List.GroupLabel via aria-labelledby. Placed inside List.Body. Plus every native HTML attribute forwarded to the group element."
/>
<ApiTable
	title="List.GroupLabel"
	api={groupLabelApi}
	hint="The section label for a List.Group, styled as the menu section heading. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="List.Separator"
	api={separatorApi}
	hint="A hairline divider (<hr>) between rows or groups, placed inside List.Body. Plus every native HTML attribute forwarded to the element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
