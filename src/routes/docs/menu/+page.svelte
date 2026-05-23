<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicMenu from '../../_playground/examples/menu/BasicMenu.svelte';
	import PlacementsMenu from '../../_playground/examples/menu/PlacementsMenu.svelte';
	import HoverMenu from '../../_playground/examples/menu/HoverMenu.svelte';
	import CustomMenu from '../../_playground/examples/menu/CustomMenu.svelte';
	import ManualMenu from '../../_playground/examples/menu/ManualMenu.svelte';
	import BlockMenu from '../../_playground/examples/menu/BlockMenu.svelte';
	import OpenAnimMenu from '../../_playground/examples/menu/OpenAnimMenu.svelte';
	import TimingMenu from '../../_playground/examples/menu/TimingMenu.svelte';

	import basicSrc from '../../_playground/examples/menu/BasicMenu.svelte?raw';
	import placementsSrc from '../../_playground/examples/menu/PlacementsMenu.svelte?raw';
	import hoverSrc from '../../_playground/examples/menu/HoverMenu.svelte?raw';
	import customSrc from '../../_playground/examples/menu/CustomMenu.svelte?raw';
	import manualSrc from '../../_playground/examples/menu/ManualMenu.svelte?raw';
	import blockSrc from '../../_playground/examples/menu/BlockMenu.svelte?raw';
	import openAnimSrc from '../../_playground/examples/menu/OpenAnimMenu.svelte?raw';
	import timingSrc from '../../_playground/examples/menu/TimingMenu.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.menu.basic.label', Component: BasicMenu, src: basicSrc },
		{ labelKey: 'playground.menu.placements.label', Component: PlacementsMenu, src: placementsSrc },
		{ labelKey: 'playground.menu.hover.label', descriptionKey: 'playground.menu.hover.hint', Component: HoverMenu, src: hoverSrc },
		{ labelKey: 'playground.menu.custom.label', descriptionKey: 'playground.menu.custom.hint', Component: CustomMenu, src: customSrc },
		{ labelKey: 'playground.menu.manual.label', descriptionKey: 'playground.menu.manual.hint', Component: ManualMenu, src: manualSrc },
		{ labelKey: 'playground.menu.block.label', descriptionKey: 'playground.menu.block.hint', Component: BlockMenu, src: blockSrc },
		{ labelKey: 'playground.menu.openAnim.label', descriptionKey: 'playground.menu.openAnim.description', Component: OpenAnimMenu, src: openAnimSrc },
		{ labelKey: 'playground.menu.timing.label', descriptionKey: 'playground.menu.timing.description', Component: TimingMenu, src: timingSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import menuApi from 'sveltastic-ui/components/Menu/Menu.api.json';
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
	title="Menu"
	api={menuApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <menu>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
