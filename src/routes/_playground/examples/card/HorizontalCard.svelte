<script lang="ts">
	import { Card, Button, Chip } from 'sveltastic-ui';
	import { ArrowUpRightIcon, BowlFoodIcon, ClockIcon } from 'phosphor-svelte';

	const src = '/card-demo/sourdough-bread.jpg';
</script>

<Card variant="horizontal">
	{#snippet img()}
		<img {src} alt="Crusty sourdough loaf on a dark counter" />
	{/snippet}
	{#snippet title()}
		<h3>Sourdough, slowly</h3>
		<div class="chips">
			<Chip variant="flat" color="warning">
				{#snippet icon()}<BowlFoodIcon size={12} weight="fill" />{/snippet}
				Baking
			</Chip>
			<Chip variant="flat" color="dark">
				{#snippet icon()}<ClockIcon size={12} weight="fill" />{/snippet}
				8 min read
			</Chip>
		</div>
	{/snippet}
	{#snippet body()}
		<p>Why a 36-hour cold ferment beats every shortcut — a baker's notes from a year of stubborn experiments.</p>
	{/snippet}
	{#snippet buttons()}
		<Button variant="transparent" size="medium" color="dark">Share</Button>
		<Button variant="flat" size="medium" color="primary">
			Read more
			<ArrowUpRightIcon size={12} weight="bold" />
		</Button>
	{/snippet}
</Card>

<style>
	.chips {
		display: flex;
		gap: 0.4rem;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
