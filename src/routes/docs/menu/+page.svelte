<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import BasicMenu from '../../_playground/examples/menu/BasicMenu.svelte';
	import PlacementsMenu from '../../_playground/examples/menu/PlacementsMenu.svelte';
	import HoverMenu from '../../_playground/examples/menu/HoverMenu.svelte';
	import CustomMenu from '../../_playground/examples/menu/CustomMenu.svelte';
	import CheckboxRadioMenu from '../../_playground/examples/menu/CheckboxRadioMenu.svelte';
	import GroupsMenu from '../../_playground/examples/menu/GroupsMenu.svelte';
	import HeaderFooterMenu from '../../_playground/examples/menu/HeaderFooterMenu.svelte';
	import ManualMenu from '../../_playground/examples/menu/ManualMenu.svelte';
	import BlockMenu from '../../_playground/examples/menu/BlockMenu.svelte';
	import OpenAnimMenu from '../../_playground/examples/menu/OpenAnimMenu.svelte';
	import TimingMenu from '../../_playground/examples/menu/TimingMenu.svelte';

	import basicSrc from '../../_playground/examples/menu/BasicMenu.svelte?raw';
	import placementsSrc from '../../_playground/examples/menu/PlacementsMenu.svelte?raw';
	import hoverSrc from '../../_playground/examples/menu/HoverMenu.svelte?raw';
	import customSrc from '../../_playground/examples/menu/CustomMenu.svelte?raw';
	import checkboxRadioSrc from '../../_playground/examples/menu/CheckboxRadioMenu.svelte?raw';
	import groupsSrc from '../../_playground/examples/menu/GroupsMenu.svelte?raw';
	import headerFooterSrc from '../../_playground/examples/menu/HeaderFooterMenu.svelte?raw';
	import manualSrc from '../../_playground/examples/menu/ManualMenu.svelte?raw';
	import blockSrc from '../../_playground/examples/menu/BlockMenu.svelte?raw';
	import openAnimSrc from '../../_playground/examples/menu/OpenAnimMenu.svelte?raw';
	import timingSrc from '../../_playground/examples/menu/TimingMenu.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.menu.basic.label', descriptionKey: 'playground.menu.basic.hint', Component: BasicMenu, src: basicSrc },
		{ labelKey: 'playground.menu.placements.label', Component: PlacementsMenu, src: placementsSrc },
		{ labelKey: 'playground.menu.hover.label', descriptionKey: 'playground.menu.hover.hint', Component: HoverMenu, src: hoverSrc },
		{ labelKey: 'playground.menu.custom.label', descriptionKey: 'playground.menu.custom.hint', Component: CustomMenu, src: customSrc },
		{ labelKey: 'playground.menu.checkboxRadio.label', descriptionKey: 'playground.menu.checkboxRadio.hint', Component: CheckboxRadioMenu, src: checkboxRadioSrc },
		{ labelKey: 'playground.menu.groups.label', descriptionKey: 'playground.menu.groups.hint', Component: GroupsMenu, src: groupsSrc },
		{ labelKey: 'playground.menu.headerFooter.label', descriptionKey: 'playground.menu.headerFooter.hint', Component: HeaderFooterMenu, src: headerFooterSrc },
		{ labelKey: 'playground.menu.manual.label', descriptionKey: 'playground.menu.manual.hint', Component: ManualMenu, src: manualSrc },
		{ labelKey: 'playground.menu.block.label', descriptionKey: 'playground.menu.block.hint', Component: BlockMenu, src: blockSrc },
		{ labelKey: 'playground.menu.openAnim.label', descriptionKey: 'playground.menu.openAnim.description', Component: OpenAnimMenu, src: openAnimSrc },
		{ labelKey: 'playground.menu.timing.label', descriptionKey: 'playground.menu.timing.description', Component: TimingMenu, src: timingSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Open state. Two-way bindable.' },
		{ name: 'placement', type: 'MenuPlacement', required: false, default: "'bottom-start'", description: 'Popup placement relative to the trigger.' },
		{ name: 'triggerOn', type: "'click' | 'hover' | 'manual'", required: false, default: "'click'", description: "How the menu opens. 'manual' means the consumer drives open directly." },
		{ name: 'offset', type: 'number', required: false, default: '4', description: 'Px gap between trigger and popup.' },
		{ name: 'closeOnClickOutside', type: 'boolean', required: false, default: "triggerOn !== 'manual'", description: 'Close when pointer lands outside.' },
		{ name: 'closeOnEsc', type: 'boolean', required: false, default: 'true', description: 'Close on Esc key.' },
		{ name: 'closeOnSelect', type: 'boolean', required: false, default: 'true', description: 'Close when a row is chosen.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable interaction.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: "Stretch the trigger anchor to its parent's width." },
		{ name: 'matchWidth', type: 'boolean', required: false, default: 'false', description: "Match the trigger's width on the popup." },
		{ name: 'openAnim', type: "'pop' | 'slide' | 'fade' | 'spring'", required: false, default: "'pop'", description: 'Open / close animation preset.' },
		{ name: 'openDuration', type: 'number', required: false, default: null, description: 'Override animation duration (ms).' },
		{ name: 'openEasing', type: '(t: number) => number', required: false, default: null, description: 'Override JS easing function (from svelte/easing or custom).' },
		{ name: 'popupRole', type: "'menu' | 'listbox' | 'dialog'", required: false, default: "'menu'", description: 'Popup ARIA role.' },
		{ name: 'autoFocus', type: 'boolean', required: false, default: 'true', description: 'Focus the first row on keyboard-initiated open.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the popup when it has no visible heading.' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever open changes (open or close).' },
		{ name: 'onOpenChangeComplete', type: '(open: boolean) => void', required: false, default: null, description: 'Fires after the close transition finishes (popup fully removed).' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the trigger anchor.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the trigger anchor.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Menu.Trigger / Menu.Content (and optional Menu.Header / Menu.Footer) here.' }
	];

	const triggerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Trigger content rendered as the anchor.' },
		{ name: 'child', type: 'Snippet<[{ props; open }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged anchor props + open and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the trigger element.' }
	];

	const contentApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet<[() => void]>', required: false, default: null, description: 'Menu rows — Menu.Item / Menu.CheckboxItem / Menu.RadioGroup / Menu.Group / Menu.Separator. Receives a close callback so custom content can dismiss the menu.' },
		{ name: 'child', type: 'Snippet<[{ props, body }]>', required: false, default: null, description: 'Render-delegation: spread props on your own panel-body element and {@render body()} for the rows.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: 'null', description: 'Bindable reference to the rendered panel-body element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the panel-body element.' },
		{ name: '…rest', type: 'HTMLAttributes', required: false, default: null, description: 'Every native HTML / data-* / aria-* attribute, forwarded to the panel-body element.' }
	];

	const headerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet<[() => void]>', required: false, default: null, description: 'Sticky popup header content. Receives a close callback.' }
	];

	const footerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet<[() => void]>', required: false, default: null, description: 'Sticky popup footer content. Receives a close callback.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert row, cannot be picked.' },
		{ name: 'danger', type: 'boolean', required: false, default: 'false', description: 'Destructive action — colours and hover state shift to the danger palette.' },
		{ name: 'selected', type: 'boolean', required: false, default: 'false', description: 'Renders a checkmark on the right and tints the row.' },
		{ name: 'closeOnSelect', type: 'boolean', required: false, default: null, description: 'Override the root closeOnSelect for this row.' },
		{ name: 'onSelect', type: '(event: MenuItemSelectEvent) => void', required: false, default: null, description: 'Fires on pick. Call event.preventDefault() to keep the menu open.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Row label / content. Compose with Menu.ItemIcon / Menu.ItemTrailing.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const itemIconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Leading icon content, placed before the label inside Menu.Item.' }
	];

	const itemTrailingApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Right-aligned trailing content (shortcut hint, badge…), placed after the label inside Menu.Item.' }
	];

	const shortcutApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Keyboard shortcut text (e.g. ⌘Z). Rendered with muted tabular-figures typography.' }
	];

	const checkboxItemApi: ApiProp[] = [
		{ name: 'checked', type: 'boolean', required: false, default: '$bindable(false)', description: 'Checked state. Two-way bindable.' },
		{ name: 'onCheckedChange', type: '(checked: boolean) => void', required: false, default: null, description: 'Fires when checked changes.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert row, cannot be picked.' },
		{ name: 'closeOnSelect', type: 'boolean', required: false, default: null, description: 'Override the root closeOnSelect for this row.' },
		{ name: 'onSelect', type: '(event: MenuItemSelectEvent) => void', required: false, default: null, description: 'Fires on pick. Call event.preventDefault() to keep the menu open.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Row label / content. Compose with Menu.ItemIcon / Menu.ItemTrailing.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const radioGroupApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: false, default: '$bindable()', description: 'Selected value. Two-way bindable.' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fires when the selected value changes.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the group.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Menu.RadioItem rows.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const radioItemApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: true, default: null, description: 'Value stored on the group when this row is picked.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert row, cannot be picked.' },
		{ name: 'closeOnSelect', type: 'boolean', required: false, default: null, description: 'Override the root closeOnSelect for this row.' },
		{ name: 'onSelect', type: '(event: MenuItemSelectEvent) => void', required: false, default: null, description: 'Fires on pick. Call event.preventDefault() to keep the menu open.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Row label / content. Compose with Menu.ItemIcon / Menu.ItemTrailing.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the row element.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name when no Menu.GroupHeading is present.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'A Menu.GroupHeading plus its rows.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const groupHeadingApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Heading text for the parent Menu.Group; registered for aria-labelledby.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the heading element.' }
	];

	const separatorApi: ApiProp[] = [
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the separator element.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the separator element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the separator element.' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.menu.title')}</h2>
	<p>{t('playground.menu.description')}</p>
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
	title="Menu.Root"
	api={rootApi}
	hint="The shell. All open / placement / timing config and bind:open + onOpenChange live here and flow to the parts via context. Publishes data-state (open / closed) on the trigger. Compose with Menu.Trigger and Menu.Content (plus optional Menu.Header / Menu.Footer). Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the trigger anchor."
/>
<ApiTable
	title="Menu.Trigger"
	api={triggerApi}
	hint="The anchor that opens the menu. Use the child snippet to delegate rendering to your own element (Button, span…), spreading the merged props it hands you. Publishes data-state / data-disabled hooks. Plus every native HTML attribute forwarded to the anchor."
/>
<ApiTable
	title="Menu.Content"
	api={contentApi}
	hint="The popup body. Place Menu.Item / Menu.CheckboxItem / Menu.RadioGroup / Menu.Group / Menu.Separator rows here; the children snippet receives a close callback. Exposes ref, the child render-delegation snippet, class / data-* pass-through and a data-state hook."
/>
<ApiTable
	title="Menu.Header"
	api={headerApi}
	hint="Optional sticky region above the rows. Place as a sibling of Menu.Content inside Menu.Root."
/>
<ApiTable
	title="Menu.Footer"
	api={footerApi}
	hint="Optional sticky region below the rows. Place as a sibling of Menu.Content inside Menu.Root; the children snippet receives a close callback."
/>
<ApiTable
	title="Menu.Item"
	api={itemApi}
	hint="A selectable row. Plain children become the label; compose Menu.ItemIcon (leading) and Menu.ItemTrailing (shortcut / badge) as siblings. Publishes data-selected / data-danger / data-disabled / data-highlighted hooks."
/>
<ApiTable
	title="Menu.ItemIcon"
	api={itemIconApi}
	hint="Leading icon for a row, placed inside Menu.Item / Menu.CheckboxItem / Menu.RadioItem."
/>
<ApiTable
	title="Menu.ItemTrailing"
	api={itemTrailingApi}
	hint="Right-aligned trailing content for a row (shortcut hint, badge). Wrap a keyboard shortcut in Menu.Shortcut for the muted tabular-figures typography. Placed inside Menu.Item / Menu.CheckboxItem / Menu.RadioItem."
/>
<ApiTable
	title="Menu.Shortcut"
	api={shortcutApi}
	hint="Keyboard-hint typography (muted, tabular-nums). Place inside Menu.ItemTrailing."
/>
<ApiTable
	title="Menu.CheckboxItem"
	api={checkboxItemApi}
	hint="A toggle row (role=menuitemcheckbox) with bind:checked + onCheckedChange. Renders a check when checked. Publishes data-state (checked / unchecked) hooks."
/>
<ApiTable
	title="Menu.RadioGroup"
	api={radioGroupApi}
	hint="A single-select group (role=group) sharing bind:value + onValueChange with its Menu.RadioItem rows via context."
/>
<ApiTable
	title="Menu.RadioItem"
	api={radioItemApi}
	hint="A radio row (role=menuitemradio) inside a Menu.RadioGroup. Renders a check when its value matches the group. Publishes data-state (checked / unchecked) hooks."
/>
<ApiTable
	title="Menu.Group"
	api={groupApi}
	hint="A labelled section of rows (role=group), wired to its Menu.GroupHeading via aria-labelledby."
/>
<ApiTable
	title="Menu.GroupHeading"
	api={groupHeadingApi}
	hint="The section label for a Menu.Group, styled as the menu section heading."
/>
<ApiTable
	title="Menu.Separator"
	api={separatorApi}
	hint="A horizontal rule between rows or groups. Plus every native HTML attribute forwarded to the element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
