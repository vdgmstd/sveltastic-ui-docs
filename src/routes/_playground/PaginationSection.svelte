<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicPagination from './examples/pagination/BasicPagination.svelte';
	import VariantsPagination from './examples/pagination/VariantsPagination.svelte';
	import SizesPagination from './examples/pagination/SizesPagination.svelte';
	import ShapesPagination from './examples/pagination/ShapesPagination.svelte';
	import ColorsPagination from './examples/pagination/ColorsPagination.svelte';
	import DotsPagination from './examples/pagination/DotsPagination.svelte';
	import ProgressPagination from './examples/pagination/ProgressPagination.svelte';
	import InfinitePagination from './examples/pagination/InfinitePagination.svelte';
	import ArrowsOnlyPagination from './examples/pagination/ArrowsOnlyPagination.svelte';
	import StatesPagination from './examples/pagination/StatesPagination.svelte';

	import basicSrc from './examples/pagination/BasicPagination.svelte?raw';
	import variantsSrc from './examples/pagination/VariantsPagination.svelte?raw';
	import sizesSrc from './examples/pagination/SizesPagination.svelte?raw';
	import shapesSrc from './examples/pagination/ShapesPagination.svelte?raw';
	import colorsSrc from './examples/pagination/ColorsPagination.svelte?raw';
	import dotsSrc from './examples/pagination/DotsPagination.svelte?raw';
	import progressSrc from './examples/pagination/ProgressPagination.svelte?raw';
	import infiniteSrc from './examples/pagination/InfinitePagination.svelte?raw';
	import arrowsOnlySrc from './examples/pagination/ArrowsOnlyPagination.svelte?raw';
	import statesSrc from './examples/pagination/StatesPagination.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ label: 'Basic', Component: BasicPagination, src: basicSrc },
		{ label: 'Variants', Component: VariantsPagination, src: variantsSrc },
		{ label: 'Sizes', Component: SizesPagination, src: sizesSrc },
		{ label: 'Shapes', Component: ShapesPagination, src: shapesSrc },
		{ label: 'Colors', Component: ColorsPagination, src: colorsSrc },
		{ label: 'Dots', Component: DotsPagination, src: dotsSrc },
		{ label: 'Progress bar', Component: ProgressPagination, src: progressSrc },
		{ label: 'Infinite (wrap-around)', Component: InfinitePagination, src: infiniteSrc },
		{ label: 'Arrows only', Component: ArrowsOnlyPagination, src: arrowsOnlySrc },
		{ label: 'Disabled / loading items', Component: StatesPagination, src: statesSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.pagination.title')}</h2>
	<p>{t('playground.pagination.description')}</p>
</header>

{#each blocks as block (block.label)}
	<DemoBlock
		label={block.label}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
