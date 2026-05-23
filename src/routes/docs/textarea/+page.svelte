<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicTextarea from '../../_playground/examples/textarea/BasicTextarea.svelte';
	import VariantsTextarea from '../../_playground/examples/textarea/VariantsTextarea.svelte';
	import StatesTextarea from '../../_playground/examples/textarea/StatesTextarea.svelte';
	import LabelTextarea from '../../_playground/examples/textarea/LabelTextarea.svelte';
	import AutoGrowTextarea from '../../_playground/examples/textarea/AutoGrowTextarea.svelte';
	import BlockTextarea from '../../_playground/examples/textarea/BlockTextarea.svelte';

	import basicSrc from '../../_playground/examples/textarea/BasicTextarea.svelte?raw';
	import variantsSrc from '../../_playground/examples/textarea/VariantsTextarea.svelte?raw';
	import statesSrc from '../../_playground/examples/textarea/StatesTextarea.svelte?raw';
	import labelSrc from '../../_playground/examples/textarea/LabelTextarea.svelte?raw';
	import autoGrowSrc from '../../_playground/examples/textarea/AutoGrowTextarea.svelte?raw';
	import blockSrc from '../../_playground/examples/textarea/BlockTextarea.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.textarea.basic.label', Component: BasicTextarea, src: basicSrc },
		{ labelKey: 'playground.textarea.variants.label', Component: VariantsTextarea, src: variantsSrc },
		{ labelKey: 'playground.textarea.states.label', Component: StatesTextarea, src: statesSrc },
		{ labelKey: 'playground.textarea.label.label', Component: LabelTextarea, src: labelSrc },
		{ labelKey: 'playground.textarea.autoGrow.label', Component: AutoGrowTextarea, src: autoGrowSrc },
		{ labelKey: 'playground.textarea.block.label', Component: BlockTextarea, src: blockSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import textareaApi from 'sveltastic-ui/components/Textarea/Textarea.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.textarea.title')}</h2>
	<p>{t('playground.textarea.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Textarea"
	api={textareaApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <textarea>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
