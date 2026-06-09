<script lang="ts">
	import type { Component } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import BasicInput from './examples/input/BasicInput.svelte';
	import LabelInput from './examples/input/LabelInput.svelte';
	import IconsInput from './examples/input/IconsInput.svelte';
	import IconColorInput from './examples/input/IconColorInput.svelte';
	import VariantsInput from './examples/input/VariantsInput.svelte';
	import StatesInput from './examples/input/StatesInput.svelte';
	import PasswordInput from './examples/input/PasswordInput.svelte';
	import ProgressInput from './examples/input/ProgressInput.svelte';
	import LoadingInput from './examples/input/LoadingInput.svelte';
	import MessageInput from './examples/input/MessageInput.svelte';
	import BlockInput from './examples/input/BlockInput.svelte';
	import MaskInput from './examples/input/MaskInput.svelte';
	import ChildInput from './examples/input/ChildInput.svelte';
	import EventsInput from './examples/input/EventsInput.svelte';

	import basicSrc from './examples/input/BasicInput.svelte?raw';
	import labelSrc from './examples/input/LabelInput.svelte?raw';
	import iconsSrc from './examples/input/IconsInput.svelte?raw';
	import iconColorSrc from './examples/input/IconColorInput.svelte?raw';
	import variantsSrc from './examples/input/VariantsInput.svelte?raw';
	import statesSrc from './examples/input/StatesInput.svelte?raw';
	import passwordSrc from './examples/input/PasswordInput.svelte?raw';
	import progressSrc from './examples/input/ProgressInput.svelte?raw';
	import loadingSrc from './examples/input/LoadingInput.svelte?raw';
	import messageSrc from './examples/input/MessageInput.svelte?raw';
	import blockSrc from './examples/input/BlockInput.svelte?raw';
	import maskSrc from './examples/input/MaskInput.svelte?raw';
	import childSrc from './examples/input/ChildInput.svelte?raw';
	import eventsSrc from './examples/input/EventsInput.svelte?raw';

	const t = (key: string) => i18n.t(key);

	type Block = { labelKey: string; descriptionKey?: string; Component: Component; src: string };

	const blocks: Block[] = [
		{ labelKey: 'playground.input.basic.label', Component: BasicInput, src: basicSrc },
		{ labelKey: 'playground.input.label.label', Component: LabelInput, src: labelSrc },
		{ labelKey: 'playground.input.icons.label', Component: IconsInput, src: iconsSrc },
		{ labelKey: 'playground.input.iconColor.label', Component: IconColorInput, src: iconColorSrc },
		{ labelKey: 'playground.input.variants.label', Component: VariantsInput, src: variantsSrc },
		{ labelKey: 'playground.input.states.label', Component: StatesInput, src: statesSrc },
		{ labelKey: 'playground.input.password.label', Component: PasswordInput, src: passwordSrc },
		{ labelKey: 'playground.input.progress.label', Component: ProgressInput, src: progressSrc },
		{ labelKey: 'playground.input.loading.label', Component: LoadingInput, src: loadingSrc },
		{ labelKey: 'playground.input.message.label', Component: MessageInput, src: messageSrc },
		{ labelKey: 'playground.input.block.label', Component: BlockInput, src: blockSrc },
		{ labelKey: 'playground.input.mask.label', Component: MaskInput, src: maskSrc },
		{ labelKey: 'playground.input.child.label', descriptionKey: 'playground.input.child.hint', Component: ChildInput, src: childSrc },
		{ labelKey: 'playground.input.events.label', descriptionKey: 'playground.input.events.hint', Component: EventsInput, src: eventsSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.input.title')}</h2>
	<p>{t('playground.input.description')}</p>
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
