<script lang="ts">
	import { Card, Button, Input } from 'sveltastic-ui';
	import { PaperPlaneTiltIcon } from 'phosphor-svelte';

	const src = '/card-demo/coffee-espresso.jpg';
</script>

<Card.Root>
	<Card.Media>
		<Card.Image>
			<img {src} alt="Espresso machine pouring a fresh shot" />
		</Card.Image>
	</Card.Media>
	<Card.Body>
		<Card.Header><h3>Leave a comment</h3></Card.Header>
		<p>Share what you thought about this guide.</p>
	</Card.Body>
	<Card.Footer>
		<div class="comment-form">
			<Input.Root block>
				<Input.Control>
					<Input.Field placeholder="Write your comment..." />
				</Input.Control>
			</Input.Root>
			<Button.Root iconOnly variant="gradient" color="primary" aria-label="Send">
				<PaperPlaneTiltIcon size={16} weight="fill" />
			</Button.Root>
		</div>
	</Card.Footer>
</Card.Root>

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
