<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicRating from '../../_playground/examples/rating-group/BasicRating.svelte';
	import HalfRating from '../../_playground/examples/rating-group/HalfRating.svelte';
	import ReadonlyRating from '../../_playground/examples/rating-group/ReadonlyRating.svelte';
	import CustomRating from '../../_playground/examples/rating-group/CustomRating.svelte';

	import basicSrc from '../../_playground/examples/rating-group/BasicRating.svelte?raw';
	import halfSrc from '../../_playground/examples/rating-group/HalfRating.svelte?raw';
	import readonlySrc from '../../_playground/examples/rating-group/ReadonlyRating.svelte?raw';
	import customSrc from '../../_playground/examples/rating-group/CustomRating.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.ratingGroup.basic.label', hintKey: 'playground.ratingGroup.basic.hint', Component: BasicRating, src: basicSrc },
		{ labelKey: 'playground.ratingGroup.half.label', hintKey: 'playground.ratingGroup.half.hint', Component: HalfRating, src: halfSrc },
		{ labelKey: 'playground.ratingGroup.readonly.label', hintKey: 'playground.ratingGroup.readonly.hint', Component: ReadonlyRating, src: readonlySrc },
		{ labelKey: 'playground.ratingGroup.custom.label', hintKey: 'playground.ratingGroup.custom.hint', Component: CustomRating, src: customSrc }
	];

	const rootApi: ApiProp[] = [
		{ name: 'value', type: 'number', required: false, default: '$bindable(0)', description: 'Current rating. Two-way bindable; also flows through onValueChange.' },
		{ name: 'max', type: 'number', required: false, default: '5', description: 'Number of items and the maximum value.' },
		{ name: 'min', type: 'number', required: false, default: '0', description: 'Minimum allowed value.' },
		{ name: 'allowHalf', type: 'boolean', required: false, default: 'false', description: 'Allow half-step values (e.g. 3.5); clicking / hovering the left half of an item sets the half value.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'View-only — keyboard + pointer cannot change the value (for displaying an average).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the whole control.' },
		{ name: 'hoverPreview', type: 'boolean', required: false, default: 'true', description: 'Show a live fill preview while hovering.' },
		{ name: 'orientation', type: "'horizontal' | 'vertical'", required: false, default: "'horizontal'", description: 'Layout + arrow-key axis.' },
		{ name: 'color', type: 'Color', required: false, default: "'warning'", description: 'Palette color for the filled stars (→ --c).' },
		{ name: 'name', type: 'string', required: false, default: null, description: 'Submit a hidden input with this name + the current value.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the slider.' },
		{ name: 'ariaValueText', type: 'string | ((value, max) => string)', required: false, default: '"{value} out of {max}"', description: 'Screen-reader value text.' },
		{ name: 'onValueChange', type: '(value: number) => void', required: false, default: null, description: 'Fires whenever the value changes.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Hand-place RatingGroup.Item children. Omit to auto-render `max` items.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the slider element.' }
	];

	const itemApi: ApiProp[] = [
		{ name: 'index', type: 'number', required: true, default: null, description: 'Zero-based position in the group (item value = index + 1).' },
		{ name: 'children', type: 'Snippet<[{ state, fraction }]>', required: false, default: null, description: 'Custom icon content; receives the item fill state (full / partial / empty) + fraction (0–1). Omit for the default two-layer star.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: spread the merged props on your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the item element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.ratingGroup.title')}</h2>
	<p>{t('playground.ratingGroup.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={t(block.hintKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="RatingGroup.Root"
	api={rootApi}
	hint="The widget — a single focusable slider (role=slider) carrying aria-valuemin/now/max/valuetext + aria-orientation. Owns the value, hover preview, and keyboard (arrows ±step RTL-aware, Home/End, digit keys). Auto-renders `max` items, or hand-place RatingGroup.Item children. Publishes data-rating-group-root / data-orientation / data-disabled / data-readonly."
/>
<ApiTable
	title="RatingGroup.Item"
	api={itemApi}
	hint="One star, addressed by index. Renders a two-layer star (empty outline + accent fill clipped to its fraction) or your own icon via children. Pointer-only (the Root slider owns keyboard); publishes data-state (full / partial / empty) / data-value / data-disabled / data-orientation."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
