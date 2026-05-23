<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicAlert from '../../_playground/examples/alert/BasicAlert.svelte';
	import VariantsAlert from '../../_playground/examples/alert/VariantsAlert.svelte';
	import IconAlert from '../../_playground/examples/alert/IconAlert.svelte';
	import ClosableAlert from '../../_playground/examples/alert/ClosableAlert.svelte';
	import CollapsibleAlert from '../../_playground/examples/alert/CollapsibleAlert.svelte';
	import PagesAlert from '../../_playground/examples/alert/PagesAlert.svelte';

	import basicSrc from '../../_playground/examples/alert/BasicAlert.svelte?raw';
	import variantsSrc from '../../_playground/examples/alert/VariantsAlert.svelte?raw';
	import iconSrc from '../../_playground/examples/alert/IconAlert.svelte?raw';
	import closableSrc from '../../_playground/examples/alert/ClosableAlert.svelte?raw';
	import collapsibleSrc from '../../_playground/examples/alert/CollapsibleAlert.svelte?raw';
	import pagesSrc from '../../_playground/examples/alert/PagesAlert.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.alert.basic.label', Component: BasicAlert, src: basicSrc },
		{ labelKey: 'playground.alert.variants.label', Component: VariantsAlert, src: variantsSrc },
		{ labelKey: 'playground.alert.icon.label', Component: IconAlert, src: iconSrc },
		{ labelKey: 'playground.alert.closable.label', Component: ClosableAlert, src: closableSrc },
		{ labelKey: 'playground.alert.collapsible.label', Component: CollapsibleAlert, src: collapsibleSrc },
		{ labelKey: 'playground.alert.pages.label', Component: PagesAlert, src: pagesSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import alertApi from 'sveltastic-ui/components/Alert/Alert.api.json';
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.alert.title')}</h2>
	<p>{t('playground.alert.description')}</p>
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
	title="Alert"
	api={alertApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <alert>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
