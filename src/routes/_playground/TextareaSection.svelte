<script lang="ts">
	import type { Component } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicTextarea from './examples/textarea/BasicTextarea.svelte';
	import VariantsTextarea from './examples/textarea/VariantsTextarea.svelte';
	import StatesTextarea from './examples/textarea/StatesTextarea.svelte';
	import ColorTextarea from './examples/textarea/ColorTextarea.svelte';
	import LabelTextarea from './examples/textarea/LabelTextarea.svelte';
	import AutoGrowTextarea from './examples/textarea/AutoGrowTextarea.svelte';
	import BlockTextarea from './examples/textarea/BlockTextarea.svelte';
	import MaskTextarea from './examples/textarea/MaskTextarea.svelte';
	import EventsTextarea from './examples/textarea/EventsTextarea.svelte';

	import basicSrc from './examples/textarea/BasicTextarea.svelte?raw';
	import variantsSrc from './examples/textarea/VariantsTextarea.svelte?raw';
	import statesSrc from './examples/textarea/StatesTextarea.svelte?raw';
	import colorSrc from './examples/textarea/ColorTextarea.svelte?raw';
	import labelSrc from './examples/textarea/LabelTextarea.svelte?raw';
	import autoGrowSrc from './examples/textarea/AutoGrowTextarea.svelte?raw';
	import blockSrc from './examples/textarea/BlockTextarea.svelte?raw';
	import maskSrc from './examples/textarea/MaskTextarea.svelte?raw';
	import eventsSrc from './examples/textarea/EventsTextarea.svelte?raw';

	const t = (key: string) => i18n.t(key);

	type Block = { labelKey: string; descriptionKey?: string; Component: Component; src: string };

	const blocks: Block[] = [
		{ labelKey: 'playground.textarea.basic.label', Component: BasicTextarea, src: basicSrc },
		{ labelKey: 'playground.textarea.variants.label', Component: VariantsTextarea, src: variantsSrc },
		{ labelKey: 'playground.textarea.states.label', Component: StatesTextarea, src: statesSrc },
		{ labelKey: 'playground.textarea.color.label', Component: ColorTextarea, src: colorSrc },
		{ labelKey: 'playground.textarea.label.label', Component: LabelTextarea, src: labelSrc },
		{ labelKey: 'playground.textarea.autoGrow.label', Component: AutoGrowTextarea, src: autoGrowSrc },
		{ labelKey: 'playground.textarea.block.label', Component: BlockTextarea, src: blockSrc },
		{ labelKey: 'playground.textarea.mask.label', descriptionKey: 'playground.textarea.mask.hint', Component: MaskTextarea, src: maskSrc },
		{ labelKey: 'playground.textarea.events.label', descriptionKey: 'playground.textarea.events.hint', Component: EventsTextarea, src: eventsSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.textarea.title')}</h2>
	<p>{t('playground.textarea.description')}</p>
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
