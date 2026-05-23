<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { Button, notify } from 'sveltastic-ui';
	import {
		CheckCircleIcon,
		WarningIcon,
		WarningOctagonIcon,
		InfoIcon,
		SparkleIcon
	} from 'phosphor-svelte';
	import type { Color, NotificationPosition } from 'sveltastic-ui';

	const t = (key: string) => i18n.t(key);

	const sample = () => ({
		title: t('playground.notifications.sample.title'),
		text: t('playground.notifications.sample.body')
	});

	const palette: Color[] = ['primary', 'success', 'danger', 'warning', 'dark'];

	const positions: { value: NotificationPosition; key: string }[] = [
		{ value: 'top-right', key: 'topRight' },
		{ value: 'top-left', key: 'topLeft' },
		{ value: 'top-center', key: 'topCenter' },
		{ value: 'bottom-right', key: 'bottomRight' },
		{ value: 'bottom-left', key: 'bottomLeft' },
		{ value: 'bottom-center', key: 'bottomCenter' }
	];
</script>

<DocHeader category="Overlays & feedback" />

<header class="section__header">
	<h2>{t('playground.notifications.title')}</h2>
	<p>{t('playground.notifications.description')}</p>
</header>

<div class="block">
	<h3>{t('playground.notifications.colors.label')}</h3>
	<div class="row">
		{#each palette as color (color)}
			<Button {color} onclick={() => notify({ ...sample(), color })}>
				{t(`playground.notifications.colors.${color}`)}
			</Button>
		{/each}
	</div>
</div>

<div class="block">
	<h3>{t('playground.notifications.variants.label')}</h3>
	<div class="row">
		<Button onclick={() => notify({ ...sample(), color: 'primary' })}>
			{t('playground.notifications.variants.tint')}
		</Button>
		<Button variant="border" onclick={() => notify({ ...sample(), color: 'primary', border: true })}>
			{t('playground.notifications.variants.border')}
		</Button>
		<Button variant="flat" onclick={() => notify({ ...sample(), color: 'primary', square: true })}>
			{t('playground.notifications.variants.square')}
		</Button>
	</div>
</div>

<div class="block">
	<h3>{t('playground.notifications.states.label')}</h3>
	<div class="row">
		<Button onclick={() => notify({ ...sample(), sticky: true })}>
			{t('playground.notifications.states.sticky')}
		</Button>
		<Button color="success" onclick={() => notify({ ...sample(), color: 'success', sticky: true, closable: true })}>
			{t('playground.notifications.states.closable')}
		</Button>
		<Button color="primary" onclick={() => notify({ ...sample(), color: 'primary', loading: true, sticky: true, closable: true })}>
			{t('playground.notifications.states.loading')}
		</Button>
		<Button variant="flat" color="dark" onclick={() => notify({ ...sample(), color: 'dark', clickClose: true })}>
			{t('playground.notifications.states.clickable')}
		</Button>
	</div>
</div>

<div class="block">
	<h3>{t('playground.notifications.icon.label')}</h3>
	<div class="row">
		<Button color="success" onclick={() => notify({ ...sample(), color: 'success', icon: successIcon })}>
			{t('playground.notifications.colors.success')}
		</Button>
		<Button color="danger" onclick={() => notify({ ...sample(), color: 'danger', icon: dangerIcon })}>
			{t('playground.notifications.colors.danger')}
		</Button>
		<Button color="warning" onclick={() => notify({ ...sample(), color: 'warning', icon: warningIcon })}>
			{t('playground.notifications.colors.warning')}
		</Button>
		<Button color="primary" onclick={() => notify({ ...sample(), color: 'primary', icon: infoIcon })}>
			{t('playground.notifications.colors.primary')}
		</Button>
		<Button variant="border" color="dark" onclick={() => notify({ ...sample(), color: 'dark', icon: sparkleIcon })}>
			{t('playground.notifications.colors.dark')}
		</Button>
	</div>
</div>

<div class="block">
	<h3>{t('playground.notifications.positions.label')}</h3>
	<div class="row">
		{#each positions as p (p.value)}
			<Button variant="flat" onclick={() => notify({ ...sample(), position: p.value })}>
				{t(`playground.notifications.positions.${p.key}`)}
			</Button>
		{/each}
	</div>
</div>

{#snippet successIcon()}<CheckCircleIcon size={22} weight="fill" />{/snippet}
{#snippet dangerIcon()}<WarningOctagonIcon size={22} weight="fill" />{/snippet}
{#snippet warningIcon()}<WarningIcon size={22} weight="fill" />{/snippet}
{#snippet infoIcon()}<InfoIcon size={22} weight="fill" />{/snippet}
{#snippet sparkleIcon()}<SparkleIcon size={22} weight="duotone" />{/snippet}

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.block { margin-bottom: 1.75rem; }
	.block h3 {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.6;
	}
	.row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
</style>
