<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import VariantsChip from '../../_playground/examples/chip/VariantsChip.svelte';
	import ColorsChip from '../../_playground/examples/chip/ColorsChip.svelte';
	import SizesChip from '../../_playground/examples/chip/SizesChip.svelte';
	import ShapesChip from '../../_playground/examples/chip/ShapesChip.svelte';
	import IconChip from '../../_playground/examples/chip/IconChip.svelte';
	import ActiveChip from '../../_playground/examples/chip/ActiveChip.svelte';
	import ClickableChip from '../../_playground/examples/chip/ClickableChip.svelte';
	import ClosableChip from '../../_playground/examples/chip/ClosableChip.svelte';
	import DisabledChip from '../../_playground/examples/chip/DisabledChip.svelte';
	import HarmonyChip from '../../_playground/examples/chip/HarmonyChip.svelte';

	import variantsSrc from '../../_playground/examples/chip/VariantsChip.svelte?raw';
	import colorsSrc from '../../_playground/examples/chip/ColorsChip.svelte?raw';
	import sizesSrc from '../../_playground/examples/chip/SizesChip.svelte?raw';
	import shapesSrc from '../../_playground/examples/chip/ShapesChip.svelte?raw';
	import iconSrc from '../../_playground/examples/chip/IconChip.svelte?raw';
	import activeSrc from '../../_playground/examples/chip/ActiveChip.svelte?raw';
	import clickableSrc from '../../_playground/examples/chip/ClickableChip.svelte?raw';
	import closableSrc from '../../_playground/examples/chip/ClosableChip.svelte?raw';
	import disabledSrc from '../../_playground/examples/chip/DisabledChip.svelte?raw';
	import harmonySrc from '../../_playground/examples/chip/HarmonyChip.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.chip.variants.label', Component: VariantsChip, src: variantsSrc },
		{ labelKey: 'playground.chip.colors.label', Component: ColorsChip, src: colorsSrc },
		{ labelKey: 'playground.chip.sizes.label', Component: SizesChip, src: sizesSrc },
		{ labelKey: 'playground.chip.shapes.label', Component: ShapesChip, src: shapesSrc },
		{ labelKey: 'playground.chip.icon.label', Component: IconChip, src: iconSrc },
		{ labelKey: 'playground.chip.active.label', descriptionKey: 'playground.chip.active.hint', Component: ActiveChip, src: activeSrc },
		{ labelKey: 'playground.chip.clickable.label', Component: ClickableChip, src: clickableSrc },
		{ labelKey: 'playground.chip.closable.label', Component: ClosableChip, src: closableSrc },
		{ labelKey: 'playground.chip.disabled.label', Component: DisabledChip, src: disabledSrc },
		{ labelKey: 'playground.chip.harmony.label', descriptionKey: 'playground.chip.harmony.hint', Component: HarmonyChip, src: harmonySrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import chipApi from 'sveltastic-ui/components/Chip/Chip.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.chip.title')}</h2>
	<p>{t('playground.chip.description')}</p>
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
	title="Chip"
	api={chipApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <chip>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
