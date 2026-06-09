<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import Section from '../../_playground/ButtonSection.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import BasicButtonGroup from '../../_playground/examples/buttongroup/BasicButtonGroup.svelte';
	import VariantsButtonGroup from '../../_playground/examples/buttongroup/VariantsButtonGroup.svelte';
	import ChildButtonGroup from '../../_playground/examples/buttongroup/ChildButtonGroup.svelte';

	import basicGroupSrc from '../../_playground/examples/buttongroup/BasicButtonGroup.svelte?raw';
	import variantsGroupSrc from '../../_playground/examples/buttongroup/VariantsButtonGroup.svelte?raw';
	import childGroupSrc from '../../_playground/examples/buttongroup/ChildButtonGroup.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const groupBlocks = [
		{ labelKey: 'playground.button.group.basic.label', Component: BasicButtonGroup, src: basicGroupSrc },
		{ labelKey: 'playground.button.group.variants.label', Component: VariantsButtonGroup, src: variantsGroupSrc },
		{
			labelKey: 'playground.button.group.child.label',
			descKey: 'playground.button.group.child.caption',
			Component: ChildButtonGroup,
			src: childGroupSrc
		}
	];

	const rootApi: ApiProp[] = [
		{ name: 'variant', type: 'Variant', required: false, default: "'default'", description: "Visual variant: 'default' | 'flat' | 'border' | 'gradient' | 'relief' | 'transparent' | 'shadow' | 'floating'." },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name or hex / rgb(...) / r,g,b.' },
		{ name: 'gradientEnd', type: 'Color', required: false, default: null, description: 'End-stop color for the gradient variant. Defaults to the --gradient-end token.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Predefined size or any custom value.' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "Border-radius shape: 'default' | 'circle' | 'square'." },
		{ name: 'iconOnly', type: 'boolean', required: false, default: 'false', description: 'Square padding, larger glyph, no text-side gap. Requires ariaLabel.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name — required for iconOnly buttons with no visible text.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Loading overlay. Blocks pointer events.' },
		{ name: 'upload', type: 'boolean', required: false, default: 'false', description: 'Animated diagonal sweep evoking an upload progress feel.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch to container width.' },
		{ name: 'active', type: 'boolean', required: false, default: '$bindable(false)', description: 'Force the pressed / selected state (toggle buttons). Exposes aria-pressed.' },
		{ name: 'onActiveChange', type: '(active: boolean) => void', required: false, default: null, description: 'Fired when an active-toggle button is activated, with the next pressed value.' },
		{ name: 'pressedDisabled', type: 'boolean', required: false, default: 'false', description: 'Active visuals + non-interactive (cursor + opacity).' },
		{ name: 'animationType', type: "'horizontal' | 'vertical' | 'scale' | 'rotate'", required: false, default: "'horizontal'", description: 'Hover-driven content swap when an animate snippet is provided.' },
		{ name: 'animateInactive', type: 'boolean', required: false, default: 'false', description: 'Disable the animate-snippet swap even if the snippet is present.' },
		{ name: 'fixedWidth', type: 'boolean', required: false, default: 'false', description: "Lock width to the wider of the two snippets so the swap doesn't reflow." },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Disable the click ripple by setting false.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled (button) / inert (link).' },
		{ name: 'href', type: 'string', required: false, default: null, description: 'When set, renders an <a> link instead of a <button>.' },
		{ name: 'type', type: "HTMLButtonAttributes['type']", required: false, default: null, description: 'Native button type (button-mode).' },
		{ name: 'target', type: "HTMLAnchorAttributes['target']", required: false, default: null, description: 'Link target (href-mode).' },
		{ name: 'rel', type: "HTMLAnchorAttributes['rel']", required: false, default: null, description: 'Link rel (href-mode).' },
		{ name: 'download', type: "HTMLAnchorAttributes['download']", required: false, default: null, description: 'Link download (href-mode).' },
		{ name: 'onclick', type: '(event: MouseEvent) => void', required: false, default: null, description: 'Click handler. Forwarded after any default navigation when href is set.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Default content (label, Button.Icon, inline glyphs).' },
		{ name: 'animate', type: 'Snippet', required: false, default: null, description: 'Hover-state content (slides in from the right by default).' },
		{ name: 'child', type: 'Snippet<[{ props; body }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): render your own host element from the merged props and the styled body snippet.' },
		{ name: 'ref', type: 'HTMLButtonElement | HTMLAnchorElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the rendered element.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'position', type: "'leading' | 'trailing'", required: false, default: "'leading'", description: 'Side the glyph sits relative to the label.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'The glyph to render. Marked aria-hidden.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icon element.' }
	];

	const groupApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Grouped Button.Root buttons; the group fuses their adjacent corners.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged role="group" props and render your own element.' },
		{ name: 'ref', type: 'HTMLElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];
</script>

<DocHeader category="Form controls" />
<Section />

<header class="group-header">
	<h2>{t('playground.button.group.title')}</h2>
	<p>{t('playground.button.group.description')}</p>
</header>

{#each groupBlocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.descKey ? t(block.descKey) : undefined}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Button.Root"
	api={rootApi}
	hint="The styled pressable. Renders a <button>, or an <a> when href is set. Compose with Button.Icon / Button.Group. Plus every native <button>/<a> HTML attribute (id, aria-*, data-*, class, style, …)."
/>
<ApiTable
	title="Button.Icon"
	api={iconApi}
	hint="Optional leading / trailing glyph slot inside Button.Root. Pins its intrinsic size so the glyph survives WebKit flex collapse beside text."
/>
<ApiTable
	title="Button.Group"
	api={groupApi}
	hint="Wraps adjacent Button.Root buttons in a role=group and fuses their touching corners. Plus every native <div> HTML attribute."
/>

<style>
	.group-header {
		margin: 3rem 0 1.5rem;
		padding-top: 2rem;
		border-top: 1px solid rgb(var(--text) / 0.1);
	}
	.group-header h2 {
		margin: 0 0 0.25rem;
	}
	.group-header p {
		margin: 0;
		opacity: 0.75;
	}
</style>
