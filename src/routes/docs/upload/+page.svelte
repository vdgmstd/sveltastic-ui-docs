<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicUpload from '../../_playground/examples/upload/BasicUpload.svelte';
	import MultipleUpload from '../../_playground/examples/upload/MultipleUpload.svelte';
	import ImagesUpload from '../../_playground/examples/upload/ImagesUpload.svelte';
	import VariantsUpload from '../../_playground/examples/upload/VariantsUpload.svelte';
	import SizesUpload from '../../_playground/examples/upload/SizesUpload.svelte';
	import ButtonOnlyUpload from '../../_playground/examples/upload/ButtonOnlyUpload.svelte';
	import ValidationUpload from '../../_playground/examples/upload/ValidationUpload.svelte';
	import StatesUpload from '../../_playground/examples/upload/StatesUpload.svelte';
	import MobileUpload from '../../_playground/examples/upload/MobileUpload.svelte';
	import CustomItemUpload from '../../_playground/examples/upload/CustomItemUpload.svelte';
	import WithFilesUpload from '../../_playground/examples/upload/WithFilesUpload.svelte';

	import basicSrc from '../../_playground/examples/upload/BasicUpload.svelte?raw';
	import multipleSrc from '../../_playground/examples/upload/MultipleUpload.svelte?raw';
	import imagesSrc from '../../_playground/examples/upload/ImagesUpload.svelte?raw';
	import variantsSrc from '../../_playground/examples/upload/VariantsUpload.svelte?raw';
	import sizesSrc from '../../_playground/examples/upload/SizesUpload.svelte?raw';
	import buttonOnlySrc from '../../_playground/examples/upload/ButtonOnlyUpload.svelte?raw';
	import validationSrc from '../../_playground/examples/upload/ValidationUpload.svelte?raw';
	import statesSrc from '../../_playground/examples/upload/StatesUpload.svelte?raw';
	import mobileSrc from '../../_playground/examples/upload/MobileUpload.svelte?raw';
	import customItemSrc from '../../_playground/examples/upload/CustomItemUpload.svelte?raw';
	import withFilesSrc from '../../_playground/examples/upload/WithFilesUpload.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.upload.basic.label', Component: BasicUpload, src: basicSrc },
		{ labelKey: 'playground.upload.multiple.label', Component: MultipleUpload, src: multipleSrc },
		{ labelKey: 'playground.upload.imagesOnly.label', Component: ImagesUpload, src: imagesSrc },
		{ labelKey: 'playground.upload.variants.label', Component: VariantsUpload, src: variantsSrc },
		{ labelKey: 'playground.upload.sizes.label', Component: SizesUpload, src: sizesSrc },
		{ labelKey: 'playground.upload.buttonOnly.label', Component: ButtonOnlyUpload, src: buttonOnlySrc },
		{ labelKey: 'playground.upload.validation.label', Component: ValidationUpload, src: validationSrc },
		{ labelKey: 'playground.upload.states.label', Component: StatesUpload, src: statesSrc },
		{ label: 'Mobile / narrow', description: 'Container query — at < 460px wide, hero shifts below the list.', Component: MobileUpload, src: mobileSrc },
		{ labelKey: 'playground.upload.customItem.label', descriptionKey: 'playground.upload.customItem.description', Component: CustomItemUpload, src: customItemSrc },
		{ labelKey: 'playground.upload.withFiles.label', descriptionKey: 'playground.upload.withFiles.description', Component: WithFilesUpload, src: withFilesSrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import uploadApi from 'sveltastic-ui/components/Upload/Upload.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.upload.title')}</h2>
	<p>{t('playground.upload.description')}</p>
</header>

{#each blocks as block (block.labelKey ?? block.label)}
	<DemoBlock
		label={block.labelKey ? t(block.labelKey) : (block.label ?? '')}
		description={block.descriptionKey ? t(block.descriptionKey) : block.description}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Upload"
	api={uploadApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <upload>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
