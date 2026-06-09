<script lang="ts">
	import { Card } from 'sveltastic-ui';

	const src = '/card-demo/avatar-portrait.jpg';
</script>

<div class="row">
	<Card.Root variant="compact" imgSize={64}>
		<Card.Media>
			<Card.Image><img {src} alt="Sara Lindqvist" /></Card.Image>
		</Card.Media>
		<Card.Body>
			<Card.Header><h4>Small — 64px</h4></Card.Header>
			<p>Tighter plate for dense tile grids.</p>
		</Card.Body>
	</Card.Root>

	<Card.Root variant="compact">
		<Card.Media>
			<Card.Image><img {src} alt="Sara Lindqvist" /></Card.Image>
		</Card.Media>
		<Card.Body>
			<Card.Header><h4>Default — 100px</h4></Card.Header>
			<p>The avatar-sized default the variant ships with.</p>
		</Card.Body>
	</Card.Root>

	<Card.Root variant="compact" imgSize="140px">
		<Card.Media>
			<Card.Image><img {src} alt="Sara Lindqvist" /></Card.Image>
		</Card.Media>
		<Card.Body>
			<Card.Header><h4>Large — 140px</h4></Card.Header>
			<p>Hero-style row card with a bigger portrait.</p>
		</Card.Body>
	</Card.Root>
</div>

<style>
	.row {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
