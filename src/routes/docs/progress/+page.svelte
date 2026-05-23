<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import LinearProgress from '../../_playground/examples/progress/LinearProgress.svelte';
	import ColorsProgress from '../../_playground/examples/progress/ColorsProgress.svelte';
	import StripesProgress from '../../_playground/examples/progress/StripesProgress.svelte';
	import IndeterminateProgress from '../../_playground/examples/progress/IndeterminateProgress.svelte';
	import CircularProgress from '../../_playground/examples/progress/CircularProgress.svelte';
	import InteractiveProgress from '../../_playground/examples/progress/InteractiveProgress.svelte';

	import linearSrc from '../../_playground/examples/progress/LinearProgress.svelte?raw';
	import colorsSrc from '../../_playground/examples/progress/ColorsProgress.svelte?raw';
	import stripesSrc from '../../_playground/examples/progress/StripesProgress.svelte?raw';
	import indeterminateSrc from '../../_playground/examples/progress/IndeterminateProgress.svelte?raw';
	import circularSrc from '../../_playground/examples/progress/CircularProgress.svelte?raw';
	import interactiveSrc from '../../_playground/examples/progress/InteractiveProgress.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.progress.linear.label', Component: LinearProgress, src: linearSrc },
		{ labelKey: 'playground.progress.colors.label', Component: ColorsProgress, src: colorsSrc },
		{ labelKey: 'playground.progress.stripes.label', Component: StripesProgress, src: stripesSrc },
		{ labelKey: 'playground.progress.indeterminate.label', Component: IndeterminateProgress, src: indeterminateSrc },
		{ labelKey: 'playground.progress.circular.label', Component: CircularProgress, src: circularSrc },
		{ labelKey: 'playground.progress.interactive.label', Component: InteractiveProgress, src: interactiveSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import progressApi from 'sveltastic-ui/components/Progress/Progress.api.json';
</script>

<DocHeader category="Display" />

<header class="section__header">
	<h2>{t('playground.progress.title')}</h2>
	<p>{t('playground.progress.description')}</p>
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
	title="Progress"
	api={progressApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <progress>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
