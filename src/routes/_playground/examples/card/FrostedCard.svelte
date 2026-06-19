<script lang="ts">
	import { Card, Button, Chip } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/desk-workspace.jpg';
</script>

<div class="frosted-demo">
	<Card.Root variant="frosted" cardStyle="max-width: 450px">
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
			<Card.Header>
				<Chip.Root color="dark">Quiet desk</Chip.Root>
			</Card.Header>
			<p>What changed after a quarter of removing one object from the desk every Friday — fewer cables, fewer mugs, fewer reasons to context-switch.</p>
		</Card.Body>
		<Card.Footer floating>
			<div class="actions">
				<Button.Root>Open</Button.Root>
				<Button.Root variant="shadow" color="danger">Cancel</Button.Root>
			</div>
		</Card.Footer>
	</Card.Root>
</div>

<style>
	/* Frosted header → render our Chip directly; drop the variant's faux-pill chrome and nudge it 0.5rem inward. */
	.frosted-demo :global(.card__title) {
		background: none;
		-webkit-backdrop-filter: none;
		backdrop-filter: none;
		padding: 0;
		inset-inline-start: 0.5rem;
	}
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
