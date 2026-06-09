<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicPagination from '../../_playground/examples/pagination/BasicPagination.svelte';
	import VariantsPagination from '../../_playground/examples/pagination/VariantsPagination.svelte';
	import SizesPagination from '../../_playground/examples/pagination/SizesPagination.svelte';
	import ShapesPagination from '../../_playground/examples/pagination/ShapesPagination.svelte';
	import ColorsPagination from '../../_playground/examples/pagination/ColorsPagination.svelte';
	import DotsPagination from '../../_playground/examples/pagination/DotsPagination.svelte';
	import ProgressPagination from '../../_playground/examples/pagination/ProgressPagination.svelte';
	import InfinitePagination from '../../_playground/examples/pagination/InfinitePagination.svelte';
	import ArrowsOnlyPagination from '../../_playground/examples/pagination/ArrowsOnlyPagination.svelte';
	import StatesPagination from '../../_playground/examples/pagination/StatesPagination.svelte';
	import RenderLoopPagination from '../../_playground/examples/pagination/RenderLoopPagination.svelte';
	import ChildPagination from '../../_playground/examples/pagination/ChildPagination.svelte';

	import basicSrc from '../../_playground/examples/pagination/BasicPagination.svelte?raw';
	import variantsSrc from '../../_playground/examples/pagination/VariantsPagination.svelte?raw';
	import sizesSrc from '../../_playground/examples/pagination/SizesPagination.svelte?raw';
	import shapesSrc from '../../_playground/examples/pagination/ShapesPagination.svelte?raw';
	import colorsSrc from '../../_playground/examples/pagination/ColorsPagination.svelte?raw';
	import dotsSrc from '../../_playground/examples/pagination/DotsPagination.svelte?raw';
	import progressSrc from '../../_playground/examples/pagination/ProgressPagination.svelte?raw';
	import infiniteSrc from '../../_playground/examples/pagination/InfinitePagination.svelte?raw';
	import arrowsOnlySrc from '../../_playground/examples/pagination/ArrowsOnlyPagination.svelte?raw';
	import statesSrc from '../../_playground/examples/pagination/StatesPagination.svelte?raw';
	import renderLoopSrc from '../../_playground/examples/pagination/RenderLoopPagination.svelte?raw';
	import childSrc from '../../_playground/examples/pagination/ChildPagination.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.pagination.basic.label', descriptionKey: 'playground.pagination.basic.hint', Component: BasicPagination, src: basicSrc },
		{ labelKey: 'playground.pagination.variants.label', descriptionKey: 'playground.pagination.variants.hint', Component: VariantsPagination, src: variantsSrc },
		{ labelKey: 'playground.pagination.sizes.label', descriptionKey: 'playground.pagination.sizes.hint', Component: SizesPagination, src: sizesSrc },
		{ labelKey: 'playground.pagination.shapes.label', descriptionKey: 'playground.pagination.shapes.hint', Component: ShapesPagination, src: shapesSrc },
		{ labelKey: 'playground.pagination.colors.label', descriptionKey: 'playground.pagination.colors.hint', Component: ColorsPagination, src: colorsSrc },
		{ labelKey: 'playground.pagination.dots.label', descriptionKey: 'playground.pagination.dots.hint', Component: DotsPagination, src: dotsSrc },
		{ labelKey: 'playground.pagination.progress.label', descriptionKey: 'playground.pagination.progress.hint', Component: ProgressPagination, src: progressSrc },
		{ labelKey: 'playground.pagination.infinite.label', descriptionKey: 'playground.pagination.infinite.hint', Component: InfinitePagination, src: infiniteSrc },
		{ labelKey: 'playground.pagination.arrowsOnly.label', descriptionKey: 'playground.pagination.arrowsOnly.hint', Component: ArrowsOnlyPagination, src: arrowsOnlySrc },
		{ labelKey: 'playground.pagination.states.label', descriptionKey: 'playground.pagination.states.hint', Component: StatesPagination, src: statesSrc },
		{ labelKey: 'playground.pagination.renderLoop.label', descriptionKey: 'playground.pagination.renderLoop.hint', Component: RenderLoopPagination, src: renderLoopSrc },
		{ labelKey: 'playground.pagination.child.label', descriptionKey: 'playground.pagination.child.hint', Component: ChildPagination, src: childSrc }
	];

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'page', type: 'number', required: false, default: '$bindable(1)', description: 'Currently selected page (1-based). Two-way bindable.' },
		{ name: 'length', type: 'number', required: false, default: '0', description: 'Total number of pages.' },
		{ name: 'max', type: 'number', required: false, default: '9', description: 'Max number of buttons rendered before ellipses appear.' },
		{ name: 'dottedJump', type: 'number', required: false, default: '5', description: 'Pages to jump when an ellipsis is clicked.' },
		{ name: 'infinite', type: 'boolean', required: false, default: 'false', description: 'Wrap around at the edges.' },
		{ name: 'progress', type: 'boolean', required: false, default: 'false', description: 'Render a thin progress bar below the control.' },
		{ name: 'mode', type: 'PaginationMode', required: false, default: "'numbers'", description: "Numeric buttons or dot indicators: 'numbers' | 'dots'." },
		{ name: 'arrows', type: 'boolean', required: false, default: 'true', description: 'Show prev/next arrows.' },
		{ name: 'arrowsOnly', type: 'boolean', required: false, default: 'false', description: 'Hide the buttons; render only prev/next arrows.' },
		{ name: 'variant', type: 'PaginationVariant', required: false, default: "'flat'", description: "Visual variant of the page buttons: 'default' | 'flat' | 'border' | 'transparent'." },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Predefined size (matches the kit's Button sizes)." },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Border-radius shape: 'default' | 'circle' | 'square'." },
		{ name: 'disabledItems', type: 'number[]', required: false, default: '[]', description: 'Disable individual pages (non-clickable).' },
		{ name: 'loadingItems', type: 'number[]', required: false, default: '[]', description: 'Pages that show a loading spinner.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the entire control.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Emit a click ripple on selection.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: "Stretch the control to the parent's width." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette color or hex / rgb(...).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Pagination'", description: 'Label for the wrapping <nav>.' },
		{ name: 'ariaLabelPrev', type: 'string', required: false, default: "'Previous page'", description: 'Aria-label for the prev arrow.' },
		{ name: 'ariaLabelNext', type: 'string', required: false, default: "'Next page'", description: 'Aria-label for the next arrow.' },
		{ name: 'pageLabel', type: '(page: number) => string', required: false, default: 'p => `Page ${p}`', description: 'Accessible name for a page button, given its 1-based number.' },
		{ name: 'ariaLabelJumpPrev', type: 'string', required: false, default: "'Previous pages'", description: 'Aria-label for the "jump back" ellipsis.' },
		{ name: 'ariaLabelJumpNext', type: 'string', required: false, default: "'Next pages'", description: 'Aria-label for the "jump forward" ellipsis.' },
		{ name: 'onPageChange', type: '(page: number) => void', required: false, default: null, description: 'Fired on selection with the new page.' },
		{ name: 'children', type: 'Snippet<[PaginationSnippetProps]>', required: false, default: null, description: 'Render-loop escape hatch (bits-ui parity): receives { pages, range, currentPage } and replaces the default styled control.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own root <nav>.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' }
	];

	const pageApi: ApiProp[] = [
		{ name: 'page', type: 'PaginationPageItem', required: true, default: null, description: 'The page descriptor to render ({ kind: "page"; n }).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own page element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the page button.' }
	];

	const ellipsisApi: ApiProp[] = [
		{ name: 'page', type: 'PaginationGapItem', required: true, default: null, description: 'Which jump-gap this is ({ kind: "gap"; direction }).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom ellipsis glyph (replaces the default dots).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own ellipsis element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the ellipsis button.' }
	];

	const arrowApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name; defaults to the matching Root aria-label.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom arrow glyph (replaces the default caret).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own arrow element.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the arrow button.' }
	];

	const progressApi: ApiProp[] = [
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged role="progressbar" props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the progress element.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.pagination.title')}</h2>
	<p>{t('playground.pagination.description')}</p>
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
	title="Pagination.Root"
	api={rootApi}
	hint="The shell. Control with bind:page + onPageChange. It renders the full styled control by default; compose Pagination.Page / Ellipsis / PrevButton / NextButton / Progress, or use the children render-loop / child render-delegation snippets. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root <nav>."
/>
<ApiTable
	title="Pagination.Page"
	api={pageApi}
	hint="A single page button, driven by the descriptor it receives. Reads variant / size / shape / color / active / disabled / loading state from Root context."
/>
<ApiTable
	title="Pagination.Ellipsis"
	api={ellipsisApi}
	hint="A clickable jump-gap (skips dottedJump pages). Reads variant / shape from Root context."
/>
<ApiTable
	title="Pagination.PrevButton / Pagination.NextButton"
	api={arrowApi}
	hint="Prev / next arrows. Same prop surface (the only difference is the baked-in direction). Disabled at the edges unless infinite is set."
/>
<ApiTable
	title="Pagination.Progress"
	api={progressApi}
	hint="A thin progressbar reflecting page / length. Rendered automatically when Root has progress; can also be composed manually."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
