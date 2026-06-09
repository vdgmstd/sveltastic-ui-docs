<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/AvatarSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Palette name or hex / rgb(...) / r,g,b. Falls back to the neutral gray-2 token.' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "'default' squircle, 'circle' perfect round, or 'square' for kit-radius corners." },
		{ name: 'size', type: 'number | string', required: false, default: '44', description: 'Width and height in px — number or numeric string.' },
		{ name: 'pointer', type: 'boolean', required: false, default: 'false', description: 'Show cursor: pointer on hover.' },
		{ name: 'history', type: 'boolean', required: false, default: 'false', description: 'Coloured "story" ring around the avatar.' },
		{ name: 'historyGradient', type: 'boolean', required: false, default: 'false', description: 'When history is set, use the Instagram-style three-stop gradient ring.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Full-cover overlay with a two-ring spinner. Distinct from loadingStatus (the image-probe state).' },
		{ name: 'loadingStatus', type: 'AvatarLoadingStatus', required: false, default: "'loading'", description: "Image load lifecycle ('loading' | 'loaded' | 'error'), driven by Avatar.Image. Bind with bind:loadingStatus." },
		{ name: 'onLoadingStatusChange', type: '(status) => void', required: false, default: null, description: 'Fires whenever the image load status changes.' },
		{ name: 'delayMs', type: 'number', required: false, default: '0', description: 'Delay in ms before a successful image load flips status to loaded.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for an image/icon-only avatar with no visible text.' },
		{ name: 'moreLabel', type: 'string', required: false, default: "'more'", description: "Word appended to the +N overflow counter's accessible name." },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged root props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Compose Avatar.Image / Avatar.Fallback / Avatar.Badge / Avatar.Icons.' }
	];

	const imageApi: ApiProp[] = [
		{ name: 'src', type: 'string', required: false, default: null, description: 'Image URL. Drives the root loading status via an off-DOM probe.' },
		{ name: 'alt', type: 'string', required: false, default: null, description: 'Accessible name for the image.' },
		{ name: 'ref', type: 'HTMLImageElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the <img> element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' }
	];

	const fallbackApi: ApiProp[] = [
		{ name: 'letters', type: 'number', required: false, default: null, description: 'Pre-computed letter count for SSR-stable font scaling; self-measured when omitted.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the fallback element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Initials/icon shown while the image is loading or errored.' }
	];

	const badgeApi: ApiProp[] = [
		{ name: 'position', type: 'AvatarBadgePosition', required: false, default: "'bottom-right'", description: "Corner placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Badge background colour.' },
		{ name: 'writing', type: 'boolean', required: false, default: 'false', description: 'Bouncing three-dot "typing" indicator instead of a dot/content.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the badge element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Rich badge content. Renders a filled pill when present.' }
	];

	const iconsApi: ApiProp[] = [
		{ name: 'placement', type: 'AvatarIconsPlacement', required: false, default: "'vertical'", description: "'vertical' hugs the right edge, 'horizontal' the bottom." },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icons element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Action icons; each renders as a cut-out badge revealed on hover.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'max', type: 'number', required: false, default: null, description: 'Max number of visible avatars. The last visible child shows a +N counter.' },
		{ name: 'float', type: 'boolean', required: false, default: 'false', description: 'Avatars wrap and each renders with a background-coloured border instead of overlapping.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Member Avatar.Root avatars, in any order.' }
	];
</script>

<DocHeader category="Display" />
<Section />

<ApiTable
	title="Avatar.Root"
	api={rootApi}
	hint="The avatar container. Compose Avatar.Image / Avatar.Fallback / Avatar.Badge / Avatar.Icons as children. Publishes data-status / data-shape / data-loading / data-in-group state hooks; the child snippet swaps the root element and bind:ref exposes it. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="Avatar.Image"
	api={imageApi}
	hint="The avatar image. Probes the URL off-DOM and drives the root loadingStatus; the rendered <img> only appears once the probe resolves. Plus every native <img> attribute forwarded to the element."
/>
<ApiTable
	title="Avatar.Fallback"
	api={fallbackApi}
	hint="Initials or an icon shown while the image is loading or has errored. Font size auto-scales to the letter count. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Avatar.Badge"
	api={badgeApi}
	hint="A corner status dot, count pill, or typing indicator. Filled when it has children. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Avatar.Icons"
	api={iconsApi}
	hint="A cluster of action icons revealed on hover, hugging the right edge or bottom of the avatar. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Avatar.Group"
	api={groupApi}
	hint="Overlaps or floats a set of Avatar.Root children and renders a +N overflow counter past max. Plus every native HTML attribute forwarded to the group element."
/>
