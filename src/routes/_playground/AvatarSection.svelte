<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import ShapesAvatar from './examples/avatar/ShapesAvatar.svelte';
	import ColorsAvatar from './examples/avatar/ColorsAvatar.svelte';
	import TextAvatar from './examples/avatar/TextAvatar.svelte';
	import ImagesAvatar from './examples/avatar/ImagesAvatar.svelte';
	import SizesAvatar from './examples/avatar/SizesAvatar.svelte';
	import BadgeAvatar from './examples/avatar/BadgeAvatar.svelte';
	import WritingAvatar from './examples/avatar/WritingAvatar.svelte';
	import HistoryAvatar from './examples/avatar/HistoryAvatar.svelte';
	import LoadingAvatar from './examples/avatar/LoadingAvatar.svelte';
	import IconsAvatar from './examples/avatar/IconsAvatar.svelte';
	import GroupAvatar from './examples/avatar/GroupAvatar.svelte';
	import RemountAvatar from './examples/avatar/RemountAvatar.svelte';

	import shapesSrc from './examples/avatar/ShapesAvatar.svelte?raw';
	import colorsSrc from './examples/avatar/ColorsAvatar.svelte?raw';
	import textSrc from './examples/avatar/TextAvatar.svelte?raw';
	import imagesSrc from './examples/avatar/ImagesAvatar.svelte?raw';
	import sizesSrc from './examples/avatar/SizesAvatar.svelte?raw';
	import badgeSrc from './examples/avatar/BadgeAvatar.svelte?raw';
	import writingSrc from './examples/avatar/WritingAvatar.svelte?raw';
	import historySrc from './examples/avatar/HistoryAvatar.svelte?raw';
	import loadingSrc from './examples/avatar/LoadingAvatar.svelte?raw';
	import iconsSrc from './examples/avatar/IconsAvatar.svelte?raw';
	import groupSrc from './examples/avatar/GroupAvatar.svelte?raw';
	import remountSrc from './examples/avatar/RemountAvatar.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.avatar.shapes.label', Component: ShapesAvatar, src: shapesSrc },
		{ labelKey: 'playground.avatar.colors.label', Component: ColorsAvatar, src: colorsSrc },
		{ labelKey: 'playground.avatar.text.label', Component: TextAvatar, src: textSrc, descriptionKey: 'playground.avatar.text.hint' },
		{ labelKey: 'playground.avatar.images.label', Component: ImagesAvatar, src: imagesSrc },
		{ labelKey: 'playground.avatar.sizes.label', Component: SizesAvatar, src: sizesSrc },
		{ labelKey: 'playground.avatar.badge.label', Component: BadgeAvatar, src: badgeSrc },
		{ labelKey: 'playground.avatar.writing.label', Component: WritingAvatar, src: writingSrc },
		{ labelKey: 'playground.avatar.history.label', Component: HistoryAvatar, src: historySrc },
		{ labelKey: 'playground.avatar.loading.label', Component: LoadingAvatar, src: loadingSrc },
		{ labelKey: 'playground.avatar.icons.label', Component: IconsAvatar, src: iconsSrc },
		{ labelKey: 'playground.avatar.group.label', Component: GroupAvatar, src: groupSrc },
		{ labelKey: 'playground.avatar.remount.label', Component: RemountAvatar, src: remountSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.avatar.title')}</h2>
	<p>{t('playground.avatar.description')}</p>
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

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
