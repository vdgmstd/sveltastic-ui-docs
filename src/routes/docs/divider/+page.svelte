<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/DividerSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'orientation', type: 'DividerOrientation', required: false, default: "'horizontal'", description: "Axis of the divider: 'horizontal' | 'vertical'." },
		{ name: 'variant', type: 'DividerVariant', required: false, default: "'solid'", description: "Line style: 'solid' | 'dashed' | 'dotted'." },
		{ name: 'thickness', type: 'number | string', required: false, default: '1', description: 'Line thickness — number (px) or any CSS length.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Palette name or hex / rgb(...) / r,g,b. Defaults to a subtle --text mix.' },
		{ name: 'inset', type: 'boolean | string', required: false, default: 'false', description: 'Leading inset gutter — true = 1.5rem, or any CSS length.' },
		{ name: 'labelPlacement', type: 'DividerLabelPlacement', required: false, default: "'center'", description: "Where the label sits along the line: 'start' | 'center' | 'end'. Ignored when there is no label." },
		{ name: 'decorative', type: 'boolean', required: false, default: 'false', description: 'Purely visual — sets aria-hidden, drops the separator role. No-op when a label is present.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element (<hr> / <div>).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged prop bag and render your own element. Ignored when a label is present.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Compose Divider.Line / Divider.Label for a labelled divider.' }
	];

	const lineApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the line element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the line element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Optional content rendered inside the line segment.' }
	];

	const labelApi: ApiProp[] = [
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the label element.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: replaces the label element with your own.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label content sitting between the line segments. Placement follows Divider.Root labelPlacement.' }
	];
</script>

<DocHeader category="Display" />
<Section />

<ApiTable
	title="Divider.Root"
	api={rootApi}
	hint="The separator. A plain line renders as <Divider.Root /> (<hr> / <div>); a labelled divider composes Divider.Line / Divider.Label / Divider.Line as children. Publishes data-orientation / data-variant / data-decorative / data-placement state hooks. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="Divider.Line"
	api={lineApi}
	hint="A line segment inside a labelled Divider.Root (place one on each side of Divider.Label). Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Divider.Label"
	api={labelApi}
	hint="The caption sitting between the line segments of a labelled divider; wired to the root via aria-labelledby. Plus every native HTML attribute forwarded to the element."
/>
