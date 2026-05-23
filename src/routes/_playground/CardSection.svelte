<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from './DemoBlock.svelte';

	import DefaultCard from './examples/card/DefaultCard.svelte';
	import CaptionCard from './examples/card/CaptionCard.svelte';
	import HorizontalCard from './examples/card/HorizontalCard.svelte';
	import FrostedCard from './examples/card/FrostedCard.svelte';
	import PeekCard from './examples/card/PeekCard.svelte';
	import CompactCard from './examples/card/CompactCard.svelte';
	import CompactSizesCard from './examples/card/CompactSizesCard.svelte';
	import CommentCard from './examples/card/CommentCard.svelte';
	import PlayerCard from './examples/card/PlayerCard.svelte';

	import defaultSrc from './examples/card/DefaultCard.svelte?raw';
	import captionSrc from './examples/card/CaptionCard.svelte?raw';
	import horizontalSrc from './examples/card/HorizontalCard.svelte?raw';
	import frostedSrc from './examples/card/FrostedCard.svelte?raw';
	import peekSrc from './examples/card/PeekCard.svelte?raw';
	import compactSrc from './examples/card/CompactCard.svelte?raw';
	import compactSizesSrc from './examples/card/CompactSizesCard.svelte?raw';
	import commentSrc from './examples/card/CommentCard.svelte?raw';
	import playerSrc from './examples/card/PlayerCard.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks: Array<{
		labelKey: string;
		Component: typeof DefaultCard;
		src: string;
		descriptionKey?: string;
	}> = [

		{ labelKey: 'playground.card.variants.compact', Component: CompactCard, src: compactSrc },
		{
			labelKey: 'playground.card.imgSize.label',
			descriptionKey: 'playground.card.imgSize.description',
			Component: CompactSizesCard,
			src: compactSizesSrc
		},
		{ labelKey: 'playground.card.variants.default', Component: DefaultCard, src: defaultSrc },
		{ labelKey: 'playground.card.variants.caption', Component: CaptionCard, src: captionSrc },
		{ labelKey: 'playground.card.variants.horizontal', Component: HorizontalCard, src: horizontalSrc },
		{ labelKey: 'playground.card.variants.frosted', Component: FrostedCard, src: frostedSrc },
		{ labelKey: 'playground.card.variants.peek', Component: PeekCard, src: peekSrc },
		{
			labelKey: 'playground.card.withButtons.label',
			descriptionKey: 'playground.card.withButtons.description',
			Component: CommentCard,
			src: commentSrc
		},
		{ labelKey: 'playground.card.composition.label', Component: PlayerCard, src: playerSrc }
	];
</script>

<header class="section__header">
	<h2>{t('playground.card.title')}</h2>
	<p>{t('playground.card.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		variant="spacious"
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
