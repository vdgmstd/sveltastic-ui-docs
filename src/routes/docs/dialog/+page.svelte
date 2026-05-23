<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicDialog from '../../_playground/examples/dialog/BasicDialog.svelte';
	import PersistentDialog from '../../_playground/examples/dialog/PersistentDialog.svelte';
	import SizesDialog from '../../_playground/examples/dialog/SizesDialog.svelte';
	import FormDialog from '../../_playground/examples/dialog/FormDialog.svelte';
	import ScrollDialog from '../../_playground/examples/dialog/ScrollDialog.svelte';

	import basicSrc from '../../_playground/examples/dialog/BasicDialog.svelte?raw';
	import persistentSrc from '../../_playground/examples/dialog/PersistentDialog.svelte?raw';
	import sizesSrc from '../../_playground/examples/dialog/SizesDialog.svelte?raw';
	import formSrc from '../../_playground/examples/dialog/FormDialog.svelte?raw';
	import scrollSrc from '../../_playground/examples/dialog/ScrollDialog.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.dialog.basic.label', Component: BasicDialog, src: basicSrc },
		{ labelKey: 'playground.dialog.persistent.label', Component: PersistentDialog, src: persistentSrc },
		{ labelKey: 'playground.dialog.sizes.label', Component: SizesDialog, src: sizesSrc },
		{ labelKey: 'playground.dialog.form.label', Component: FormDialog, src: formSrc },
		{ labelKey: 'playground.dialog.scroll.label', Component: ScrollDialog, src: scrollSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import dialogApi from 'sveltastic-ui/components/Dialog/Dialog.api.json';
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.dialog.title')}</h2>
	<p>{t('playground.dialog.description')}</p>
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
	title="Dialog"
	api={dialogApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <dialog>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
