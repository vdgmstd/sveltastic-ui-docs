<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import VariantsChip from '../../_playground/examples/chip/VariantsChip.svelte';
	import ColorsChip from '../../_playground/examples/chip/ColorsChip.svelte';
	import SizesChip from '../../_playground/examples/chip/SizesChip.svelte';
	import ShapesChip from '../../_playground/examples/chip/ShapesChip.svelte';
	import IconChip from '../../_playground/examples/chip/IconChip.svelte';
	import ActiveChip from '../../_playground/examples/chip/ActiveChip.svelte';
	import OnActiveChangeChip from '../../_playground/examples/chip/OnActiveChangeChip.svelte';
	import ClickableChip from '../../_playground/examples/chip/ClickableChip.svelte';
	import ChildChip from '../../_playground/examples/chip/ChildChip.svelte';
	import ClosableChip from '../../_playground/examples/chip/ClosableChip.svelte';
	import DisabledChip from '../../_playground/examples/chip/DisabledChip.svelte';
	import HarmonyChip from '../../_playground/examples/chip/HarmonyChip.svelte';

	import variantsSrc from '../../_playground/examples/chip/VariantsChip.svelte?raw';
	import colorsSrc from '../../_playground/examples/chip/ColorsChip.svelte?raw';
	import sizesSrc from '../../_playground/examples/chip/SizesChip.svelte?raw';
	import shapesSrc from '../../_playground/examples/chip/ShapesChip.svelte?raw';
	import iconSrc from '../../_playground/examples/chip/IconChip.svelte?raw';
	import activeSrc from '../../_playground/examples/chip/ActiveChip.svelte?raw';
	import onActiveChangeSrc from '../../_playground/examples/chip/OnActiveChangeChip.svelte?raw';
	import clickableSrc from '../../_playground/examples/chip/ClickableChip.svelte?raw';
	import childSrc from '../../_playground/examples/chip/ChildChip.svelte?raw';
	import closableSrc from '../../_playground/examples/chip/ClosableChip.svelte?raw';
	import disabledSrc from '../../_playground/examples/chip/DisabledChip.svelte?raw';
	import harmonySrc from '../../_playground/examples/chip/HarmonyChip.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.chip.variants.label', Component: VariantsChip, src: variantsSrc },
		{ labelKey: 'playground.chip.colors.label', Component: ColorsChip, src: colorsSrc },
		{ labelKey: 'playground.chip.sizes.label', Component: SizesChip, src: sizesSrc },
		{ labelKey: 'playground.chip.shapes.label', Component: ShapesChip, src: shapesSrc },
		{ labelKey: 'playground.chip.icon.label', Component: IconChip, src: iconSrc },
		{ labelKey: 'playground.chip.active.label', descriptionKey: 'playground.chip.active.hint', Component: ActiveChip, src: activeSrc },
		{ labelKey: 'playground.chip.onActiveChange.label', descriptionKey: 'playground.chip.onActiveChange.hint', Component: OnActiveChangeChip, src: onActiveChangeSrc },
		{ labelKey: 'playground.chip.clickable.label', Component: ClickableChip, src: clickableSrc },
		{ labelKey: 'playground.chip.child.label', descriptionKey: 'playground.chip.child.hint', Component: ChildChip, src: childSrc },
		{ labelKey: 'playground.chip.closable.label', Component: ClosableChip, src: closableSrc },
		{ labelKey: 'playground.chip.disabled.label', Component: DisabledChip, src: disabledSrc },
		{ labelKey: 'playground.chip.harmony.label', descriptionKey: 'playground.chip.harmony.hint', Component: HarmonyChip, src: harmonySrc }
	];
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const rootApi: ApiProp[] = [
		{ name: 'variant', type: 'ChipVariant', required: false, default: "'default'", description: 'Visual variant. Mirrors the Button vocabulary so chips and buttons read as the same family.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette name or hex / rgb(...) / r,g,b.' },
		{ name: 'gradientEnd', type: 'Color', required: false, default: null, description: 'End-stop color for the gradient variant. Defaults to the --gradient-end token.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Predefined size matching Button's scale." },
		{ name: 'shape', type: 'Shape', required: false, default: "'default'", description: 'Default = pill. square = --chip-radius corners. circle = round icon-only chip.' },
		{ name: 'active', type: 'boolean', required: false, default: '$bindable(false)', description: 'Pressed / selected look — for filter and toggle chips. Pairs with onclick.' },
		{ name: 'onActiveChange', type: '(active: boolean) => void', required: false, default: null, description: 'Fired when a clickable chip toggles, with the next pressed value.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled — blocks click and close.' },
		{ name: 'selectedLabel', type: 'string', required: false, default: "'selected'", description: 'Visually-hidden suffix announced for a selected (active) chip.' },
		{ name: 'onclick', type: '(event: MouseEvent) => void', required: false, default: null, description: 'Click handler. Gives the chip body role="button" (keyboard-activatable, accessible as a button) rather than a native <button>, so a nested Chip.Close button stays valid HTML.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Default content — place Chip.Icon, the chip text, and Chip.Close.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): receive the merged props and render your own host element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the chip element.' }
	];

	const iconApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Leading glyph rendered before the chip text. Marked aria-hidden.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own element.' },
		{ name: 'ref', type: 'HTMLSpanElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the icon element.' }
	];

	const closeApi: ApiProp[] = [
		{ name: 'onclose', type: '(event: MouseEvent) => void', required: false, default: null, description: 'Fired when the close button is activated (unless the chip is disabled).' },
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Remove'", description: 'Accessible label for the close button. Override for localized labels.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom close glyph (replaces the default X icon).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation: receive the merged props and render your own button.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the close button.' }
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.chip.title')}</h2>
	<p>{t('playground.chip.description')}</p>
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
	title="Chip.Root"
	api={rootApi}
	hint="The chip body. Renders a <span> — when onclick (or active) is set it becomes a <span role=&quot;button&quot;> (keyboard-activatable, aria-pressed for toggles), accessible as a button without being a native <button> so a nested Chip.Close button stays valid HTML. Compose with Chip.Icon and Chip.Close. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the host element (or the element you render via the child snippet)."
/>
<ApiTable
	title="Chip.Icon"
	api={iconApi}
	hint="Optional leading glyph slot inside Chip.Root, placed before the chip text."
/>
<ApiTable
	title="Chip.Close"
	api={closeApi}
	hint="Remove button rendered inside Chip.Root. Stops click propagation so closing a clickable chip never fires its onclick; inert when the chip is disabled."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
