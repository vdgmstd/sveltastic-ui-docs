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
	import ChildDropzoneUpload from '../../_playground/examples/upload/ChildDropzoneUpload.svelte';
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
	import childDropzoneSrc from '../../_playground/examples/upload/ChildDropzoneUpload.svelte?raw';
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
		{ labelKey: 'playground.upload.mobile.label', descriptionKey: 'playground.upload.mobile.description', Component: MobileUpload, src: mobileSrc },
		{ labelKey: 'playground.upload.customItem.label', descriptionKey: 'playground.upload.customItem.description', Component: CustomItemUpload, src: customItemSrc },
		{ labelKey: 'playground.upload.childDropzone.label', descriptionKey: 'playground.upload.childDropzone.description', Component: ChildDropzoneUpload, src: childDropzoneSrc },
		{ labelKey: 'playground.upload.withFiles.label', descriptionKey: 'playground.upload.withFiles.description', Component: WithFilesUpload, src: withFilesSrc }
	];

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'files', type: 'File[]', required: false, default: '$bindable([])', description: 'Selected files. bind:files for two-way; pair with onValueChange for callback control.' },
		{ name: 'multiple', type: 'boolean', required: false, default: 'false', description: 'Allow selecting more than one file.' },
		{ name: 'accept', type: 'string', required: false, default: null, description: "Native accept filter (e.g. 'image/*', '.pdf,.doc') — also enforced on drop." },
		{ name: 'maxSize', type: 'number', required: false, default: null, description: 'Reject files larger than this many bytes.' },
		{ name: 'maxFiles', type: 'number', required: false, default: null, description: 'Cap the total number of files.' },
		{ name: 'variant', type: 'UploadVariant', required: false, default: "'default'", description: "Drop area style: 'default' (dashed) | 'flat' (soft fill) | 'border' (solid 2px)." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Predefined size — same scale as Button / Input.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state.' },
		{ name: 'buttonOnly', type: 'boolean', required: false, default: 'false', description: 'Render as a single button — no card chrome, no list.' },
		{ name: 'wide', type: 'boolean', required: false, default: 'false', description: 'Wider max-width (480px vs default 360px).' },
		{ name: 'fullWidth', type: 'boolean', required: false, default: 'false', description: 'Drop the max-width cap and stretch to the parent. Mutually exclusive with wide.' },
		{ name: 'clearable', type: 'boolean', required: false, default: 'false', description: 'Show a Clear all action in the footer when files are selected.' },
		{ name: 'hideList', type: 'boolean', required: false, default: 'false', description: 'Hide the file list even when files are selected.' },
		{ name: 'thumbnails', type: 'boolean', required: false, default: null, description: 'Force-on / force-off image thumbnails. Defaults to auto (any image file in the list).' },
		{ name: 'hint', type: 'string', required: false, default: null, description: "Tertiary hint under the dropzone (e.g. 'PNG, JPG up to 5 MB')." },
		{ name: 'error', type: 'string', required: false, default: null, description: 'External error message. Pair with onerror. Replaces hint when set.' },
		{ name: 'messages', type: 'Partial<UploadMessages>', required: false, default: null, description: 'Override the screen-reader announcements for add / remove / clear (English defaults).' },
		{ name: 'onValueChange', type: '(files: File[]) => void', required: false, default: null, description: 'Canonical change callback — fires on file selection / drop after validation.' },
		{ name: 'onerror', type: '(errors: UploadError[]) => void', required: false, default: null, description: 'Fires with rejected files when validation trims the input.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place Upload.Dropzone / Upload.List / Upload.Footer here.' }
	];

	const dropzoneApi: ApiProp[] = [
		{ name: 'label', type: 'string', required: false, default: "'Drop files here'", description: 'Drop-zone primary label (the bold headline).' },
		{ name: 'sublabel', type: 'string', required: false, default: "'or click to browse'", description: 'Secondary line under label.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the drop zone / button when no visible label is rendered (→ aria-label).' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the drop-zone button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own trigger button.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom drop-zone content (replaces the icon + label).' }
	];

	const listApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLUListElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the <ul> list element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own list element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom row loop (one Upload.Item per file). Defaults to auto-iterating the uploaded files.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'file', type: 'File', required: true, default: null, description: 'The file this row represents.' },
		{ name: 'ref', type: 'HTMLLIElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the <li> row.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own <li>.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom row content (replaces thumbnail + name + size + remove, keeps the wrapper + slide transition).' }
	];

	const itemRemoveApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the remove button.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own button.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom button content (defaults to an X glyph).' }
	];

	const footerApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the footer element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own footer element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom footer content (replaces the built-in count + Clear all row).' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.upload.title')}</h2>
	<p>{t('playground.upload.description')}</p>
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

<ApiTable
	title="Upload.Root"
	api={rootApi}
	hint="The shell — owns files, validation, and all visual config, sharing state with the parts via context. Compose it with Upload.Dropzone, Upload.List (Upload.Item / Upload.ItemRemove) and Upload.Footer. Publishes data-state / data-drag-over / data-disabled / data-clearable / data-has-files / data-has-error hooks. Plus every native HTML attribute forwarded to the root element."
/>
<ApiTable
	title="Upload.Dropzone"
	api={dropzoneApi}
	hint="The click / drop target. In buttonOnly mode it is the only part rendered. Plus every native HTML button attribute forwarded to the trigger."
/>
<ApiTable
	title="Upload.List"
	api={listApi}
	hint="The file list. Renders (and slide-transitions) only when files are present and hideList is false. Pass a children loop of Upload.Item for a custom layout, or leave empty to auto-iterate. Plus every native HTML ul attribute."
/>
<ApiTable
	title="Upload.Item"
	api={itemApi}
	hint="A single file row with the slide-in/out transition. Provide children to replace the default thumbnail + name + size + remove content while keeping the wrapper. Plus every native HTML li attribute."
/>
<ApiTable
	title="Upload.ItemRemove"
	api={itemRemoveApi}
	hint="The styled × button that removes its parent Upload.Item's file. Use only inside Upload.Item. Plus every native HTML button attribute."
/>
<ApiTable
	title="Upload.Footer"
	api={footerApi}
	hint="The count + Clear all row. Renders only when files are present and either clearable is set or custom children are provided. Plus every native HTML attribute."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
