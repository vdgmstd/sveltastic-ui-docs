<script lang="ts">
	import { Card } from 'sveltastic-ui';

	const src = '/card-demo/avatar-portrait.jpg';
</script>

<div class="row">
	<Card variant="compact" imgSize={64}>
		{#snippet img()}<img {src} alt="Sara Lindqvist" />{/snippet}
		{#snippet title()}<h4>Small — 64px</h4>{/snippet}
		{#snippet body()}<p>Tighter plate for dense tile grids.</p>{/snippet}
	</Card>

	<Card variant="compact">
		{#snippet img()}<img {src} alt="Sara Lindqvist" />{/snippet}
		{#snippet title()}<h4>Default — 100px</h4>{/snippet}
		{#snippet body()}<p>The avatar-sized default the variant ships with.</p>{/snippet}
	</Card>

	<Card variant="compact" imgSize="140px">
		{#snippet img()}<img {src} alt="Sara Lindqvist" />{/snippet}
		{#snippet title()}<h4>Large — 140px</h4>{/snippet}
		{#snippet body()}<p>Hero-style row card with a bigger portrait.</p>{/snippet}
	</Card>
</div>

<style>
	.row {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
