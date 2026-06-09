<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import ColorsNotification from '../../_playground/examples/notifications/ColorsNotification.svelte';
	import BorderNotification from '../../_playground/examples/notifications/BorderNotification.svelte';
	import ClosableNotification from '../../_playground/examples/notifications/ClosableNotification.svelte';
	import LoadingNotification from '../../_playground/examples/notifications/LoadingNotification.svelte';
	import PositionNotification from '../../_playground/examples/notifications/PositionNotification.svelte';
	import IconNotification from '../../_playground/examples/notifications/IconNotification.svelte';
	import StickyNotification from '../../_playground/examples/notifications/StickyNotification.svelte';
	import DurationNotification from '../../_playground/examples/notifications/DurationNotification.svelte';

	import colorsSrc from '../../_playground/examples/notifications/ColorsNotification.svelte?raw';
	import borderSrc from '../../_playground/examples/notifications/BorderNotification.svelte?raw';
	import closableSrc from '../../_playground/examples/notifications/ClosableNotification.svelte?raw';
	import loadingSrc from '../../_playground/examples/notifications/LoadingNotification.svelte?raw';
	import positionSrc from '../../_playground/examples/notifications/PositionNotification.svelte?raw';
	import iconSrc from '../../_playground/examples/notifications/IconNotification.svelte?raw';
	import stickySrc from '../../_playground/examples/notifications/StickyNotification.svelte?raw';
	import durationSrc from '../../_playground/examples/notifications/DurationNotification.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.notifications.colors.label', Component: ColorsNotification, src: colorsSrc },
		{ labelKey: 'playground.notifications.border.label', Component: BorderNotification, src: borderSrc },
		{ labelKey: 'playground.notifications.closable.label', Component: ClosableNotification, src: closableSrc },
		{ labelKey: 'playground.notifications.loading.label', Component: LoadingNotification, src: loadingSrc },
		{ labelKey: 'playground.notifications.positions.label', Component: PositionNotification, src: positionSrc },
		{ labelKey: 'playground.notifications.icon.label', Component: IconNotification, src: iconSrc },
		{
			labelKey: 'playground.notifications.sticky.label',
			descKey: 'playground.notifications.sticky.caption',
			Component: StickyNotification,
			src: stickySrc
		},
		{
			labelKey: 'playground.notifications.duration.label',
			descKey: 'playground.notifications.duration.caption',
			Component: DurationNotification,
			src: durationSrc
		}
	];

	const optionsApi: ApiProp[] = [
		{ name: 'title', type: 'string', required: false, default: null, description: 'Headline shown in bold at the top of the toast.' },
		{ name: 'text', type: 'string', required: false, default: null, description: 'Body copy below the title.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette tint (or hex / rgb). Drives the icon, accent, and fill.' },
		{ name: 'border', type: 'boolean', required: false, default: 'false', description: 'Render an outline ring instead of the filled tint.' },
		{ name: 'sticky', type: 'boolean', required: false, default: 'false', description: 'Disable auto-dismiss; the toast stays until closed. Pair with closable.' },
		{ name: 'closable', type: 'boolean', required: false, default: 'false', description: 'Show an explicit close button.' },
		{ name: 'square', type: 'boolean', required: false, default: 'false', description: 'Drop the rounded corners.' },
		{ name: 'duration', type: 'number', required: false, default: '5000', description: 'Milliseconds before auto-close. Ignored when sticky is set.' },
		{ name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Show a loading spinner in place of the variant icon.' },
		{ name: 'position', type: 'NotificationPosition', required: false, default: "'top-right'", description: "Screen anchor: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'." },
		{ name: 'icon', type: 'Snippet', required: false, default: null, description: 'Custom icon snippet, replacing the variant default glyph.' },
		{ name: 'onclick', type: '() => void', required: false, default: null, description: 'Fired when the toast body is clicked.' },
		{ name: 'clickClose', type: 'boolean', required: false, default: 'false', description: 'Dismiss the toast when its body is clicked.' },
		{ name: 'onclose', type: '() => void', required: false, default: null, description: 'Fired when the toast is dismissed (timeout, close button, or programmatic close).' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.notifications.title')}</h2>
	<p>{t('playground.notifications.description')}</p>
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

<ApiTable
	title="notify(options)"
	api={optionsApi}
	hint="Imperative API: notify(options) queues a toast through NotificationsHost and returns an id + close() handle. Mount <NotificationsHost /> once near the app root. Auto-dismisses after 5s unless sticky."
/>

<style>
	.section__header {
		margin-bottom: 1.5rem;
	}
	.section__header h2 {
		margin: 0 0 0.25rem;
	}
	.section__header p {
		margin: 0;
		opacity: 0.75;
	}
</style>
