<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicDivider from './examples/divider/BasicDivider.svelte';
	import VariantsDivider from './examples/divider/VariantsDivider.svelte';
	import LabelDivider from './examples/divider/LabelDivider.svelte';
	import ColorsDivider from './examples/divider/ColorsDivider.svelte';
	import ThicknessDivider from './examples/divider/ThicknessDivider.svelte';
	import InsetDivider from './examples/divider/InsetDivider.svelte';
	import VerticalDivider from './examples/divider/VerticalDivider.svelte';

	import basicSrc from './examples/divider/BasicDivider.svelte?raw';
	import variantsSrc from './examples/divider/VariantsDivider.svelte?raw';
	import labelSrc from './examples/divider/LabelDivider.svelte?raw';
	import colorsSrc from './examples/divider/ColorsDivider.svelte?raw';
	import thicknessSrc from './examples/divider/ThicknessDivider.svelte?raw';
	import insetSrc from './examples/divider/InsetDivider.svelte?raw';
	import verticalSrc from './examples/divider/VerticalDivider.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ label: t('playground.divider.basic.label'), Component: BasicDivider, src: basicSrc },
		{ label: t('playground.divider.variants.label'), Component: VariantsDivider, src: variantsSrc },
		{ label: t('playground.divider.label.label'), Component: LabelDivider, src: labelSrc },
		{ label: t('playground.divider.colors.label'), Component: ColorsDivider, src: colorsSrc },
		{ label: t('playground.divider.thickness.label'), Component: ThicknessDivider, src: thicknessSrc },
		{ label: t('playground.divider.inset.label'), Component: InsetDivider, src: insetSrc },
		{ label: t('playground.divider.vertical.label'), Component: VerticalDivider, src: verticalSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.divider.title')}</h2>
	<p>{t('playground.divider.description')}</p>
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
