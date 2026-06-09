<script lang="ts">
	import type { Component } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicRadio from './examples/radio/BasicRadio.svelte';
	import GroupRadio from './examples/radio/GroupRadio.svelte';
	import ColorsRadio from './examples/radio/ColorsRadio.svelte';
	import StatesRadio from './examples/radio/StatesRadio.svelte';
	import IconRadio from './examples/radio/IconRadio.svelte';
	import LabelRadio from './examples/radio/LabelRadio.svelte';
	import ChildRadio from './examples/radio/ChildRadio.svelte';
	import EventsRadio from './examples/radio/EventsRadio.svelte';

	import basicSrc from './examples/radio/BasicRadio.svelte?raw';
	import groupSrc from './examples/radio/GroupRadio.svelte?raw';
	import colorsSrc from './examples/radio/ColorsRadio.svelte?raw';
	import statesSrc from './examples/radio/StatesRadio.svelte?raw';
	import iconSrc from './examples/radio/IconRadio.svelte?raw';
	import labelSrc from './examples/radio/LabelRadio.svelte?raw';
	import childSrc from './examples/radio/ChildRadio.svelte?raw';
	import eventsSrc from './examples/radio/EventsRadio.svelte?raw';

	const t = (key: string) => i18n.t(key);

	type Block = {
		labelKey: string;
		descriptionKey?: string;
		Component: Component<Record<string, never>, any, any>;
		src: string;
	};

	const blocks: Block[] = [
		{ labelKey: 'playground.radio.basic.label', Component: BasicRadio, src: basicSrc },
		{ labelKey: 'playground.radio.group.label', descriptionKey: 'playground.radio.group.hint', Component: GroupRadio, src: groupSrc },
		{ labelKey: 'playground.radio.colors.label', Component: ColorsRadio, src: colorsSrc },
		{ labelKey: 'playground.radio.states.label', Component: StatesRadio, src: statesSrc },
		{ labelKey: 'playground.radio.icon.label', Component: IconRadio, src: iconSrc },
		{ labelKey: 'playground.radio.label.label', Component: LabelRadio, src: labelSrc },
		{ labelKey: 'playground.radio.child.label', descriptionKey: 'playground.radio.child.hint', Component: ChildRadio, src: childSrc },
		{ labelKey: 'playground.radio.events.label', Component: EventsRadio, src: eventsSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.radio.title')}</h2>
	<p>{t('playground.radio.description')}</p>
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
