<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
	import { i18n } from '$lib/i18n/index.svelte';

	const t = (key: string) => i18n.t(key);
	const placements = ['top', 'right', 'bottom', 'left'] as const;
</script>

<header class="section__header">
	<h2>{t('playground.tooltip.title')}</h2>
	<p>{t('playground.tooltip.description')}</p>
</header>

<div class="block">
	<h3>{t('playground.tooltip.placement.label')}</h3>
	<div class="row">
		{#each placements as p (p)}
			<Tooltip placement={p}>
				{#snippet content()}{t(`playground.tooltip.placement.${p}`)}{/snippet}
				<Button variant="border">{t(`playground.tooltip.placement.${p}`)}</Button>
			</Tooltip>
		{/each}
	</div>
</div>

<div class="block">
	<h3>{t('playground.tooltip.variants.label')}</h3>
	<div class="row">
		<Tooltip>
			{#snippet content()}{t('playground.tooltip.variants.default')}{/snippet}
			<Button>{t('playground.tooltip.variants.default')}</Button>
		</Tooltip>
		<Tooltip variant="shadow" color="primary">
			{#snippet content()}{t('playground.tooltip.variants.shadow')}{/snippet}
			<Button variant="flat">{t('playground.tooltip.variants.shadow')}</Button>
		</Tooltip>
		<Tooltip variant="border" color="danger">
			{#snippet content()}{t('playground.tooltip.variants.border')}{/snippet}
			<Button variant="flat" color="danger">{t('playground.tooltip.variants.border')}</Button>
		</Tooltip>
	</div>
</div>

<div class="block">
	<h3>{t('playground.tooltip.color.label')}</h3>
	<div class="row">
		<Tooltip color="primary">
			{#snippet content()}{t('playground.tooltip.color.primary')}{/snippet}
			<Button color="primary">{t('playground.tooltip.color.primary')}</Button>
		</Tooltip>
		<Tooltip color="success">
			{#snippet content()}{t('playground.tooltip.color.success')}{/snippet}
			<Button color="success">{t('playground.tooltip.color.success')}</Button>
		</Tooltip>
		<Tooltip color="danger">
			{#snippet content()}{t('playground.tooltip.color.danger')}{/snippet}
			<Button color="danger">{t('playground.tooltip.color.danger')}</Button>
		</Tooltip>
		<Tooltip color="warning">
			{#snippet content()}{t('playground.tooltip.color.warning')}{/snippet}
			<Button color="warning">{t('playground.tooltip.color.warning')}</Button>
		</Tooltip>
		<Tooltip color="dark">
			{#snippet content()}{t('playground.tooltip.color.dark')}{/snippet}
			<Button color="dark">{t('playground.tooltip.color.dark')}</Button>
		</Tooltip>
		<Tooltip color="#7d33ff">
			{#snippet content()}{t('playground.tooltip.color.hex')}{/snippet}
			<Button color="#7d33ff">{t('playground.tooltip.color.hex')}</Button>
		</Tooltip>
		<Tooltip color="rgb(59,222,200)">
			{#snippet content()}{t('playground.tooltip.color.rgb')}{/snippet}
			<Button color="rgb(59,222,200)">{t('playground.tooltip.color.rgb')}</Button>
		</Tooltip>
	</div>
</div>

<div class="block">
	<h3>{t('playground.tooltip.trigger.label')}</h3>
	<div class="row">
		<Tooltip trigger="hover">
			{#snippet content()}{t('playground.tooltip.trigger.hover')}{/snippet}
			<Button>{t('playground.tooltip.trigger.hover')}</Button>
		</Tooltip>
		<Tooltip trigger="click">
			{#snippet content()}{t('playground.tooltip.trigger.click')}{/snippet}
			<Button>{t('playground.tooltip.trigger.click')}</Button>
		</Tooltip>
		<Tooltip interactive>
			{#snippet content()}{t('playground.tooltip.trigger.interactive')}{/snippet}
			<Button>{t('playground.tooltip.trigger.interactive')}</Button>
		</Tooltip>
		<Tooltip delay={500}>
			{#snippet content()}{t('playground.tooltip.trigger.delay')}{/snippet}
			<Button>{t('playground.tooltip.trigger.delay')}</Button>
		</Tooltip>
		<Tooltip loading>
			{#snippet content()}{t('playground.tooltip.trigger.loading')}{/snippet}
			<Button>{t('playground.tooltip.trigger.loading')}</Button>
		</Tooltip>
	</div>
</div>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.block { margin-bottom: 1.5rem; }
	.block h3 { margin: 0 0 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6; }
	.row { display: flex; flex-wrap: wrap; gap: 1rem; padding: 2rem 0; }
</style>
