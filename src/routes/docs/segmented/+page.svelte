<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicSegmented from '../../_playground/examples/segmented/BasicSegmented.svelte';
	import VariantsSegmented from '../../_playground/examples/segmented/VariantsSegmented.svelte';
	import SizesSegmented from '../../_playground/examples/segmented/SizesSegmented.svelte';
	import IconsSegmented from '../../_playground/examples/segmented/IconsSegmented.svelte';
	import ColorsSegmented from '../../_playground/examples/segmented/ColorsSegmented.svelte';
	import BlockSegmented from '../../_playground/examples/segmented/BlockSegmented.svelte';
	import DisabledSegmented from '../../_playground/examples/segmented/DisabledSegmented.svelte';

	import basicSrc from '../../_playground/examples/segmented/BasicSegmented.svelte?raw';
	import variantsSrc from '../../_playground/examples/segmented/VariantsSegmented.svelte?raw';
	import sizesSrc from '../../_playground/examples/segmented/SizesSegmented.svelte?raw';
	import iconsSrc from '../../_playground/examples/segmented/IconsSegmented.svelte?raw';
	import colorsSrc from '../../_playground/examples/segmented/ColorsSegmented.svelte?raw';
	import blockSrc from '../../_playground/examples/segmented/BlockSegmented.svelte?raw';
	import disabledSrc from '../../_playground/examples/segmented/DisabledSegmented.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.segmented.basic.label', Component: BasicSegmented, src: basicSrc },
		{ labelKey: 'playground.segmented.variants.label', descriptionKey: 'playground.segmented.variants.hint', Component: VariantsSegmented, src: variantsSrc },
		{ labelKey: 'playground.segmented.sizes.label', description: 'Outer height matches a Button at the same size.', Component: SizesSegmented, src: sizesSrc },
		{ labelKey: 'playground.segmented.icons.label', Component: IconsSegmented, src: iconsSrc },
		{ labelKey: 'playground.segmented.colors.label', Component: ColorsSegmented, src: colorsSrc },
		{ labelKey: 'playground.segmented.block.label', Component: BlockSegmented, src: blockSrc },
		{ labelKey: 'playground.segmented.disabled.label', Component: DisabledSegmented, src: disabledSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import segmentedApi from 'sveltastic-ui/components/Segmented/Segmented.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.segmented.title')}</h2>
	<p>{t('playground.segmented.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.descriptionKey ? t(block.descriptionKey) : block.description}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Segmented"
	api={segmentedApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <segmented>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
