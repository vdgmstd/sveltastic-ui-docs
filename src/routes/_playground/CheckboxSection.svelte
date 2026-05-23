<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import StatesCheckbox from './examples/checkbox/StatesCheckbox.svelte';
	import ColorsCheckbox from './examples/checkbox/ColorsCheckbox.svelte';
	import LabelCheckbox from './examples/checkbox/LabelCheckbox.svelte';
	import IconCheckbox from './examples/checkbox/IconCheckbox.svelte';
	import GroupCheckbox from './examples/checkbox/GroupCheckbox.svelte';

	import statesSrc from './examples/checkbox/StatesCheckbox.svelte?raw';
	import colorsSrc from './examples/checkbox/ColorsCheckbox.svelte?raw';
	import labelSrc from './examples/checkbox/LabelCheckbox.svelte?raw';
	import iconSrc from './examples/checkbox/IconCheckbox.svelte?raw';
	import groupSrc from './examples/checkbox/GroupCheckbox.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.checkbox.states.label', Component: StatesCheckbox, src: statesSrc },
		{ labelKey: 'playground.checkbox.colors.label', Component: ColorsCheckbox, src: colorsSrc },
		{ labelKey: 'playground.checkbox.label.label', Component: LabelCheckbox, src: labelSrc },
		{ labelKey: 'playground.checkbox.icon.label', Component: IconCheckbox, src: iconSrc },
		{
			labelKey: 'playground.checkbox.group.label',
			descriptionKey: 'playground.checkbox.group.description',
			Component: GroupCheckbox,
			src: groupSrc
		}
	];
</script>

<header class="section__header">
	<h2>{t('playground.checkbox.title')}</h2>
	<p>{t('playground.checkbox.description')}</p>
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
