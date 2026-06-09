<script lang="ts">
	import type { Component } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicSwitch from './examples/switch/BasicSwitch.svelte';
	import SizesSwitch from './examples/switch/SizesSwitch.svelte';
	import ShapesSwitch from './examples/switch/ShapesSwitch.svelte';
	import ColorsSwitch from './examples/switch/ColorsSwitch.svelte';
	import IconsSwitch from './examples/switch/IconsSwitch.svelte';
	import TextSwitch from './examples/switch/TextSwitch.svelte';
	import GhostSwitch from './examples/switch/GhostSwitch.svelte';
	import ThumbSwitch from './examples/switch/ThumbSwitch.svelte';
	import StatesSwitch from './examples/switch/StatesSwitch.svelte';
	import EventsSwitch from './examples/switch/EventsSwitch.svelte';

	import basicSrc from './examples/switch/BasicSwitch.svelte?raw';
	import sizesSrc from './examples/switch/SizesSwitch.svelte?raw';
	import shapesSrc from './examples/switch/ShapesSwitch.svelte?raw';
	import colorsSrc from './examples/switch/ColorsSwitch.svelte?raw';
	import iconsSrc from './examples/switch/IconsSwitch.svelte?raw';
	import textSrc from './examples/switch/TextSwitch.svelte?raw';
	import ghostSrc from './examples/switch/GhostSwitch.svelte?raw';
	import thumbSrc from './examples/switch/ThumbSwitch.svelte?raw';
	import statesSrc from './examples/switch/StatesSwitch.svelte?raw';
	import eventsSrc from './examples/switch/EventsSwitch.svelte?raw';

	const t = (key: string) => i18n.t(key);

	type Block = { labelKey: string; descriptionKey?: string; Component: Component; src: string };

	const blocks: Block[] = [
		{ labelKey: 'playground.switch.basic.label', Component: BasicSwitch, src: basicSrc },
		{ labelKey: 'playground.switch.sizes.label', Component: SizesSwitch, src: sizesSrc },
		{ labelKey: 'playground.switch.shapes.label', Component: ShapesSwitch, src: shapesSrc },
		{ labelKey: 'playground.switch.colors.label', Component: ColorsSwitch, src: colorsSrc },
		{ labelKey: 'playground.switch.icons.label', Component: IconsSwitch, src: iconsSrc },
		{ labelKey: 'playground.switch.text.label', Component: TextSwitch, src: textSrc },
		{ labelKey: 'playground.switch.ghost.label', Component: GhostSwitch, src: ghostSrc },
		{
			labelKey: 'playground.switch.thumb.label',
			descriptionKey: 'playground.switch.thumb.description',
			Component: ThumbSwitch,
			src: thumbSrc
		},
		{ labelKey: 'playground.switch.states.label', Component: StatesSwitch, src: statesSrc },
		{
			labelKey: 'playground.switch.events.label',
			descriptionKey: 'playground.switch.events.description',
			Component: EventsSwitch,
			src: eventsSrc
		}
	];
</script>

<header class="section__header">
	<h2>{t('playground.switch.title')}</h2>
	<p>{t('playground.switch.description')}</p>
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
