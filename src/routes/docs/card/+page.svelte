<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/CardSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'variant', type: 'CardVariant', required: false, default: "'default'", description: "Layout variant: 'default' | 'caption' | 'horizontal' | 'compact' | 'frosted' | 'peek'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name or hex / rgb(...) / r,g,b. Exposes --c for descendants (Buttons, Avatars).' },
		{ name: 'wide', type: 'boolean', required: false, default: 'false', description: 'Wider max-width (480px instead of the default 350px).' },
		{ name: 'imgInset', type: 'boolean', required: false, default: 'false', description: 'Render the image with insets / padding instead of edge-to-edge. Implied by variant="compact".' },
		{ name: 'imgSize', type: 'number | string', required: false, default: null, description: "Override the image cell's main dimension. Number is treated as px; any CSS length is accepted as a string." },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Card parts — place Card.Media, Card.Body and Card.Footer here.' },
		{ name: 'child', type: 'Snippet<[{ props; card: Snippet }]>', required: false, default: null, description: 'Render-delegation: receive the merged prop bag and the kit card snippet, then render your own root element (e.g. <a>) with {@render card()} inside it.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root wrapper.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root wrapper.' }
	];

	const mediaApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Media frame content — place a Card.Image (clipped image holder) and an optional Card.Overlay here.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the .card__img element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the media element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the media element.' }
	];

	const imageApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Image / media — rendered inside the clipped .card__img-clip (overflow hidden, hover-zoom on the direct child). Put the <img> here.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the .card__img-clip element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the clip element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the clip element.' }
	];

	const overlayApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Overlay content — rendered inside the absolutely-positioned .card__interactions region. Place as a sibling of Card.Image, inside Card.Media.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the .card__interactions element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the overlay element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the overlay element.' }
	];

	const headerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Title content — rendered inside .card__title. Place inside Card.Body so the frozen CSS can target the body copy separately.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the .card__title element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the header element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the header element.' }
	];

	const bodyApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Body content — rendered inside .card__text. May contain a Card.Header followed by the body copy.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the .card__text element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the body element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the body element.' }
	];

	const footerApi: ApiProp[] = [
		{ name: 'floating', type: 'boolean', required: false, default: 'false', description: 'Float the strip absolutely, pinned to the card bottom edge and hung 50% outside it (.card__actions). Default renders the in-flow .card__buttons strip.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Footer content (buttons / actions).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the footer element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the footer element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the footer element.' }
	];
</script>

<DocHeader category="Display" />
<Section />

<ApiTable
	title="Card.Root"
	api={rootApi}
	hint="The shell. Holds the layout variant + color / wide / imgInset / imgSize config and renders the inner .card surface. Publishes data-variant / data-wide / data-img-inset hooks. Compose with Card.Media, Card.Body and Card.Footer. Plus every native HTML attribute (id, aria-*, data-*, …) forwarded to the root <div> (or the element you render via the child snippet)."
/>
<ApiTable
	title="Card.Media"
	api={mediaApi}
	hint="The outer media frame (.card__img). Place a Card.Image inside it for the clipped, hover-zoomed image, plus an optional Card.Overlay floating over it. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Card.Image"
	api={imageApi}
	hint="The clipped image holder (.card__img-clip) — overflow hidden with the signature hover-zoom on its direct child. Put the <img> here, inside Card.Media. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Card.Overlay"
	api={overlayApi}
	hint="The floating-over-image region (.card__interactions) — likes, chips, badges. Sibling of Card.Image inside Card.Media. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Card.Header"
	api={headerApi}
	hint="The card title (.card__title). Place INSIDE Card.Body — the frozen CSS uses .card__text > :not(.card__title) to target the body copy. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Card.Body"
	api={bodyApi}
	hint="The body copy region (.card__text). Holds the Card.Header followed by the body paragraphs. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Card.Footer"
	api={footerApi}
	hint="The action strip. Default renders the in-flow .card__buttons row; set floating to render the absolutely-pinned .card__actions row that hangs half outside the bottom edge. Publishes a data-floating hook. Plus every native HTML attribute forwarded to the element."
/>
