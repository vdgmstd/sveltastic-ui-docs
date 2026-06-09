<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/desk-workspace.jpg';
</script>

<Card.Root variant="frosted">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Minimal desk setup with a laptop and accessories" />
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
		<Card.Header><h3>Quiet desk</h3></Card.Header>
		<p>What changed after a quarter of removing one object from the desk every Friday — fewer cables, fewer mugs, fewer reasons to context-switch.</p>
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
		gap: var(--space-2);
		width: 100%;
	}
	.actions :global(.button) {
		flex: 1;
		margin: 0;
	}
</style>
