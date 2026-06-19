<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/reykjavik-church.jpg';
</script>

<Card.Root variant="peek" cardStyle="max-width: 450px">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Hallgrímskirkja church standing over Reykjavik" />
		</Card.Image>
		<Card.Overlay>
			<Button.Root iconOnly color="danger" shape="circle" aria-label="Like">
				<HeartIcon size={16} weight="fill" />
			</Button.Root>
			<Button.Root variant="shadow" color="primary" aria-label="Chat">
				<ChatCircleIcon size={18} weight="fill" />
				<span>54</span>
			</Button.Root>
		</Card.Overlay>
	</Card.Media>
	<Card.Body>
		<Card.Header><h3>Three days in Reykjavik</h3></Card.Header>
		<p>Geothermal pools, black-sand coastlines, and the world's quietest city after midnight.</p>
	</Card.Body>
	<Card.Footer floating>
		<div class="actions">
			<Button.Root>Open</Button.Root>
			<Button.Root variant="shadow" color="danger">Cancel</Button.Root>
		</div>
	</Card.Footer>
</Card.Root>

<style>
	.actions {
		display: flex;
		gap: var(--space-4);
		width: 100%;
	}
	.actions :global(.button) {
		flex: 1;
		margin: 0;
	}
</style>
