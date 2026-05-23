<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import VariantsCollapse from '../../_playground/examples/collapse/VariantsCollapse.svelte';
	import ColorsCollapse from '../../_playground/examples/collapse/ColorsCollapse.svelte';
	import SizesCollapse from '../../_playground/examples/collapse/SizesCollapse.svelte';
	import SlotsCollapse from '../../_playground/examples/collapse/SlotsCollapse.svelte';
	import ComposedCollapse from '../../_playground/examples/collapse/ComposedCollapse.svelte';
	import GroupSingleCollapse from '../../_playground/examples/collapse/GroupSingleCollapse.svelte';
	import GroupMultipleCollapse from '../../_playground/examples/collapse/GroupMultipleCollapse.svelte';
	import GroupFusedCollapse from '../../_playground/examples/collapse/GroupFusedCollapse.svelte';
	import GroupCardCollapse from '../../_playground/examples/collapse/GroupCardCollapse.svelte';
	import StatesCollapse from '../../_playground/examples/collapse/StatesCollapse.svelte';

	import variantsSrc from '../../_playground/examples/collapse/VariantsCollapse.svelte?raw';
	import colorsSrc from '../../_playground/examples/collapse/ColorsCollapse.svelte?raw';
	import sizesSrc from '../../_playground/examples/collapse/SizesCollapse.svelte?raw';
	import slotsSrc from '../../_playground/examples/collapse/SlotsCollapse.svelte?raw';
	import composedSrc from '../../_playground/examples/collapse/ComposedCollapse.svelte?raw';
	import groupSingleSrc from '../../_playground/examples/collapse/GroupSingleCollapse.svelte?raw';
	import groupMultipleSrc from '../../_playground/examples/collapse/GroupMultipleCollapse.svelte?raw';
	import groupFusedSrc from '../../_playground/examples/collapse/GroupFusedCollapse.svelte?raw';
	import groupCardSrc from '../../_playground/examples/collapse/GroupCardCollapse.svelte?raw';
	import statesSrc from '../../_playground/examples/collapse/StatesCollapse.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.collapse.variants.label', Component: VariantsCollapse, src: variantsSrc },
		{ labelKey: 'playground.collapse.colors.label', Component: ColorsCollapse, src: colorsSrc },
		{ labelKey: 'playground.collapse.sizes.label', Component: SizesCollapse, src: sizesSrc },
		{ labelKey: 'playground.collapse.slots.label', Component: SlotsCollapse, src: slotsSrc },
		{ labelKey: 'playground.collapse.composed.label', Component: ComposedCollapse, src: composedSrc },
		{ labelKey: 'playground.collapse.group.singleLabel', Component: GroupSingleCollapse, src: groupSingleSrc },
		{ labelKey: 'playground.collapse.group.multipleLabel', Component: GroupMultipleCollapse, src: groupMultipleSrc },
		{ labelKey: 'playground.collapse.group.fusedLabel', Component: GroupFusedCollapse, src: groupFusedSrc },
		{ labelKey: 'playground.collapse.group.cardLabel', Component: GroupCardCollapse, src: groupCardSrc },
		{ labelKey: 'playground.collapse.states.label', Component: StatesCollapse, src: statesSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import collapseApi from 'sveltastic-ui/components/Collapse/Collapse.api.json';
	import collapseGroupApi from 'sveltastic-ui/components/Collapse/CollapseGroup.api.json';
</script>

<DocHeader category="Composite" />

<header class="section__header">
	<h2>{t('playground.collapse.title')}</h2>
	<p>{t('playground.collapse.description')}</p>
</header>

<div class="collapse-docs">
	{#each blocks as block (block.labelKey)}
		<DemoBlock
			label={t(block.labelKey)}
			codeLabel={t('playground.code.label')}
			Component={block.Component}
			src={block.src}
		/>
	{/each}
</div>

<ApiTable
	title="Collapse"
	api={collapseApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <collapse>'s root element."
/>
<ApiTable
	title="CollapseGroup"
	api={collapseGroupApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <collapsegroup>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.collapse-docs :global(.stage--compact) {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: stretch;
	}
</style>
