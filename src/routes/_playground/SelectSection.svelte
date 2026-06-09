<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicSelect from './examples/select/BasicSelect.svelte';
	import ComposedSelect from './examples/select/ComposedSelect.svelte';
	import OpenAnimSelect from './examples/select/OpenAnimSelect.svelte';
	import MultiSelect from './examples/select/MultiSelect.svelte';
	import FilterSelect from './examples/select/FilterSelect.svelte';
	import VariantsSelect from './examples/select/VariantsSelect.svelte';
	import StatesSelect from './examples/select/StatesSelect.svelte';
	import CaretSelect from './examples/select/CaretSelect.svelte';
	import CustomSelect from './examples/select/CustomSelect.svelte';
	import CustomMultiSelect from './examples/select/CustomMultiSelect.svelte';

	import basicSrc from './examples/select/BasicSelect.svelte?raw';
	import composedSrc from './examples/select/ComposedSelect.svelte?raw';
	import openAnimSrc from './examples/select/OpenAnimSelect.svelte?raw';
	import multiSrc from './examples/select/MultiSelect.svelte?raw';
	import filterSrc from './examples/select/FilterSelect.svelte?raw';
	import variantsSrc from './examples/select/VariantsSelect.svelte?raw';
	import statesSrc from './examples/select/StatesSelect.svelte?raw';
	import caretSrc from './examples/select/CaretSelect.svelte?raw';
	import customSrc from './examples/select/CustomSelect.svelte?raw';
	import customMultiSrc from './examples/select/CustomMultiSelect.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.select.basic.label', Component: BasicSelect, src: basicSrc },
		{ labelKey: 'playground.select.composed.label', descriptionKey: 'playground.select.composed.description', Component: ComposedSelect, src: composedSrc },
		{ labelKey: 'playground.select.openAnim.label', descriptionKey: 'playground.select.openAnim.description', Component: OpenAnimSelect, src: openAnimSrc },
		{ labelKey: 'playground.select.multi.label', Component: MultiSelect, src: multiSrc },
		{ labelKey: 'playground.select.filter.label', Component: FilterSelect, src: filterSrc },
		{ labelKey: 'playground.select.variants.label', Component: VariantsSelect, src: variantsSrc },
		{ labelKey: 'playground.select.states.label', Component: StatesSelect, src: statesSrc },
		{ labelKey: 'playground.select.caret.label', descriptionKey: 'playground.select.caret.description', Component: CaretSelect, src: caretSrc },
		{ labelKey: 'playground.select.custom.label', descriptionKey: 'playground.select.custom.description', Component: CustomSelect, src: customSrc },
		{ labelKey: 'playground.select.customMulti.label', descriptionKey: 'playground.select.customMulti.description', Component: CustomMultiSelect, src: customMultiSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.select.title')}</h2>
	<p>{t('playground.select.description')}</p>
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

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
