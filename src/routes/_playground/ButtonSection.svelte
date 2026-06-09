<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import VariantsButton from './examples/button/VariantsButton.svelte';
	import ColorsButton from './examples/button/ColorsButton.svelte';
	import SizesButton from './examples/button/SizesButton.svelte';
	import ShapesButton from './examples/button/ShapesButton.svelte';
	import IconButton from './examples/button/IconButton.svelte';
	import StatesButton from './examples/button/StatesButton.svelte';
	import AnimateButton from './examples/button/AnimateButton.svelte';
	import AnimateFixedButton from './examples/button/AnimateFixedButton.svelte';
	import UploadButton from './examples/button/UploadButton.svelte';
	import RippleButton from './examples/button/RippleButton.svelte';
	import HrefButton from './examples/button/HrefButton.svelte';
	import GroupButton from './examples/button/GroupButton.svelte';
	import ClassOverrideButton from './examples/button/ClassOverrideButton.svelte';
	import ChildButton from './examples/button/ChildButton.svelte';

	import variantsSrc from './examples/button/VariantsButton.svelte?raw';
	import colorsSrc from './examples/button/ColorsButton.svelte?raw';
	import sizesSrc from './examples/button/SizesButton.svelte?raw';
	import shapesSrc from './examples/button/ShapesButton.svelte?raw';
	import iconSrc from './examples/button/IconButton.svelte?raw';
	import statesSrc from './examples/button/StatesButton.svelte?raw';
	import animateSrc from './examples/button/AnimateButton.svelte?raw';
	import animateFixedSrc from './examples/button/AnimateFixedButton.svelte?raw';
	import uploadSrc from './examples/button/UploadButton.svelte?raw';
	import rippleSrc from './examples/button/RippleButton.svelte?raw';
	import hrefSrc from './examples/button/HrefButton.svelte?raw';
	import groupSrc from './examples/button/GroupButton.svelte?raw';
	import classOverrideSrc from './examples/button/ClassOverrideButton.svelte?raw';
	import childSrc from './examples/button/ChildButton.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.button.variants.label', Component: VariantsButton, src: variantsSrc },
		{ labelKey: 'playground.button.colors.label', Component: ColorsButton, src: colorsSrc },
		{ labelKey: 'playground.button.sizes.label', Component: SizesButton, src: sizesSrc },
		{ labelKey: 'playground.button.shapes.label', Component: ShapesButton, src: shapesSrc },
		{ labelKey: 'playground.button.icon.label', Component: IconButton, src: iconSrc },
		{ labelKey: 'playground.button.states.label', Component: StatesButton, src: statesSrc },
		{ labelKey: 'playground.button.animate.label', Component: AnimateButton, src: animateSrc },
		{ labelKey: 'playground.button.animate.fixedLabel', Component: AnimateFixedButton, src: animateFixedSrc },
		{ labelKey: 'playground.button.upload.label', Component: UploadButton, src: uploadSrc },
		{ labelKey: 'playground.button.ripple.label', Component: RippleButton, src: rippleSrc },
		{ labelKey: 'playground.button.href.label', Component: HrefButton, src: hrefSrc },
		{ labelKey: 'playground.button.group.label', Component: GroupButton, src: groupSrc },
		{ labelKey: 'playground.button.classOverride.label', Component: ClassOverrideButton, src: classOverrideSrc },
		{ labelKey: 'playground.button.child.label', descKey: 'playground.button.child.caption', Component: ChildButton, src: childSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.button.title')}</h2>
	<p>{t('playground.button.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.descKey ? t(block.descKey) : undefined}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
