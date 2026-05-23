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
	import ListboxList from '../../_playground/examples/list/ListboxList.svelte';
	import MultiselectList from '../../_playground/examples/list/MultiselectList.svelte';
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
	import listboxSrc from '../../_playground/examples/list/ListboxList.svelte?raw';
	import multiselectSrc from '../../_playground/examples/list/MultiselectList.svelte?raw';
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
		{ labelKey: 'playground.list.listbox.label', descriptionKey: 'playground.list.listbox.hint', Component: ListboxList, src: listboxSrc },
		{ labelKey: 'playground.list.multiselect.label', descriptionKey: 'playground.list.multiselect.hint', Component: MultiselectList, src: multiselectSrc },
		{ labelKey: 'playground.list.empty.label', Component: EmptyList, src: emptySrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import listApi from 'sveltastic-ui/components/List/List.api.json';
	import listItemApi from 'sveltastic-ui/components/List/ListItem.api.json';
	import listGroupApi from 'sveltastic-ui/components/List/ListGroup.api.json';
	import listDividerApi from 'sveltastic-ui/components/List/ListDivider.api.json';
</script>

<DocHeader category="Display" />

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
	title="List"
	api={listApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <list>'s root element."
/>
<ApiTable
	title="ListItem"
	api={listItemApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <listitem>'s root element."
/>
<ApiTable
	title="ListGroup"
	api={listGroupApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <listgroup>'s root element."
/>
<ApiTable
	title="ListDivider"
	api={listDividerApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <listdivider>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
