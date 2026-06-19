<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicToggle from '../../_playground/examples/toggle/BasicToggle.svelte';
	import VariantsToggle from '../../_playground/examples/toggle/VariantsToggle.svelte';
	import GroupSingleToggle from '../../_playground/examples/toggle/GroupSingleToggle.svelte';
	import GroupMultipleToggle from '../../_playground/examples/toggle/GroupMultipleToggle.svelte';
	import GroupVerticalToggle from '../../_playground/examples/toggle/GroupVerticalToggle.svelte';

	import basicSrc from '../../_playground/examples/toggle/BasicToggle.svelte?raw';
	import variantsSrc from '../../_playground/examples/toggle/VariantsToggle.svelte?raw';
	import groupSingleSrc from '../../_playground/examples/toggle/GroupSingleToggle.svelte?raw';
	import groupMultipleSrc from '../../_playground/examples/toggle/GroupMultipleToggle.svelte?raw';
	import groupVerticalSrc from '../../_playground/examples/toggle/GroupVerticalToggle.svelte?raw';

	import ApiTable, { type ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.toggle.basic.label', hintKey: 'playground.toggle.basic.hint', Component: BasicToggle, src: basicSrc },
		{ labelKey: 'playground.toggle.variants.label', hintKey: 'playground.toggle.variants.hint', Component: VariantsToggle, src: variantsSrc },
		{ labelKey: 'playground.toggle.groupSingle.label', hintKey: 'playground.toggle.groupSingle.hint', Component: GroupSingleToggle, src: groupSingleSrc },
		{ labelKey: 'playground.toggle.groupMultiple.label', hintKey: 'playground.toggle.groupMultiple.hint', Component: GroupMultipleToggle, src: groupMultipleSrc },
		{ labelKey: 'playground.toggle.groupVertical.label', hintKey: 'playground.toggle.groupVertical.hint', Component: GroupVerticalToggle, src: groupVerticalSrc }
	];

	const toggleApi: ApiProp[] = [
		{ name: 'pressed', type: 'boolean', required: false, default: '$bindable(false)', description: 'On/off state. Two-way bindable; also flows through onPressedChange.' },
		{ name: 'onPressedChange', type: '(pressed: boolean) => void', required: false, default: null, description: 'Fired whenever the pressed state changes.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert + dimmed.' },
		{ name: 'variant', type: 'Variant', required: false, default: "'transparent'", description: 'Button visual variant — subtle when off, accent-tinted when on. Any Button variant works.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: 'Sizing scale shared with Button.' },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: "'default' | 'circle' | 'square'." },
		{ name: 'iconOnly', type: 'boolean', required: false, default: 'false', description: 'Square icon-only padding, larger glyph.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name — required for icon-only toggles.' },
		{ name: 'ripple', type: 'boolean', required: false, default: 'true', description: 'Emit a click ripple.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the button.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label / icon content.' },
		{ name: 'child', type: 'Snippet<[{ props; body }]>', required: false, default: null, description: 'Render-delegation: receive the merged props + styled body and render your own host (e.g. <a>).' }
	];

	const groupRootApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'multiple'", required: true, default: null, description: 'Selection mode. Drives the value type: string (single) or string[] (multiple).' },
		{ name: 'value', type: 'string | string[]', required: false, default: '$bindable()', description: 'Selected value(s). Two-way bindable; single allows none (empty when the active item is toggled off).' },
		{ name: 'onValueChange', type: '(value) => void', required: false, default: null, description: 'Fired on selection change (typed to the mode).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable every item in the group.' },
		{ name: 'orientation', type: "'horizontal' | 'vertical'", required: false, default: "'horizontal'", description: 'Layout + arrow-key navigation axis. Published as data-orientation.' },
		{ name: 'loop', type: 'boolean', required: false, default: 'true', description: 'Wrap arrow navigation past the ends.' },
		{ name: 'rovingFocus', type: 'boolean', required: false, default: 'true', description: 'Roving tabindex (one tab-stop, arrows move within). Off → every item is tabbable.' },
		{ name: 'variant', type: 'Variant', required: false, default: "'transparent'", description: 'Button variant applied to every item.' },
		{ name: 'color / size / shape / ripple', type: '—', required: false, default: null, description: 'Shared visual config forwarded to every item.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the group (→ aria-label on role="group").' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Place ToggleGroup.Item parts here.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation for the group element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the group element.' }
	];

	const groupItemApi: ApiProp[] = [
		{ name: 'value', type: 'string', required: true, default: null, description: 'Item identifier; unique within the group.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Inert this item (the group disabled also cascades).' },
		{ name: 'iconOnly', type: 'boolean', required: false, default: 'false', description: 'Square icon-only padding.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name — required for icon-only items.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Label / icon content.' },
		{ name: 'child', type: 'Snippet<[{ props; body }]>', required: false, default: null, description: 'Render-delegation: merged props + styled body.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the item button.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.toggle.title')}</h2>
	<p>{t('playground.toggle.description')}</p>
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

<p class="note">{t('playground.toggle.vsSegmented')}</p>

<ApiTable
	title="Toggle.Root"
	api={toggleApi}
	hint="A single pressed-state toggle button, built on the kit's button-core (ripple + press-bounce). Publishes data-state (on|off) + data-toggle-root. Plus every native button attribute."
/>
<ApiTable
	title="ToggleGroup.Root"
	api={groupRootApi}
	hint="The group owner: type / value / orientation / roving live here and flow to items via context. Renders role='group', data-orientation / data-toggle-group-root. Compose with ToggleGroup.Item."
/>
<ApiTable
	title="ToggleGroup.Item"
	api={groupItemApi}
	hint="A toggle button inside a group. Pressed state derives from the group value; arrows move focus (roving), Space/Enter toggle. Publishes data-state / data-value / data-orientation / data-disabled + aria-pressed."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.note {
		margin: 0 0 1.5rem;
		padding: 0.75rem 1rem;
		border-inline-start: 3px solid rgb(var(--primary));
		background: rgb(var(--primary) / 0.06);
		border-radius: var(--rad-sm);
		font-size: 0.9rem;
	}
</style>
