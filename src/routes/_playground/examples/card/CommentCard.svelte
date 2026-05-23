<script lang="ts">
	import { Card, Button, Input } from 'sveltastic-ui';
	import { PaperPlaneTiltIcon } from 'phosphor-svelte';

	const src = '/card-demo/coffee-espresso.jpg';
</script>

<Card>
	{#snippet img()}
		<img {src} alt="Espresso machine pouring a fresh shot" />
	{/snippet}
	{#snippet title()}
		<h3>Leave a comment</h3>
	{/snippet}
	{#snippet body()}
		<p>Share what you thought about this guide.</p>
	{/snippet}
	{#snippet buttons()}
		<div class="comment-form">
			<Input block placeholder="Write your comment..." />
			<Button iconOnly variant="gradient" color="primary" aria-label="Send">
				<PaperPlaneTiltIcon size={16} weight="fill" />
			</Button>
		</div>
	{/snippet}
</Card>

<style>
	.comment-form {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
	}
	.comment-form :global(.input) {
		flex: 1 1 auto;
		min-width: 0;
		margin: 0;
	}
	.comment-form :global(.button) {
		flex: 0 0 auto;
		margin: 0;
	}
</style>
