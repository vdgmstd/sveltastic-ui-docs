<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { ArrowUpRightIcon } from 'phosphor-svelte';

	const src = '/card-demo/mountain-sunrise.jpg';
	const colors = ['primary', 'success', 'danger'] as const;
</script>

<!-- color sets --c for descendants; wide bumps the max-width to 480px. -->
<div class="stack">
	<div class="row">
		{#each colors as color (color)}
			<Card.Root {color}>
				<Card.Media>
					<Card.Image>
						<img {src} alt="Sunrise over a mountain ridge" />
					</Card.Image>
				</Card.Media>
				<Card.Body>
					<Card.Header><h3>{color}</h3></Card.Header>
					<p>Buttons inherit the card's color via <code>--c</code>.</p>
				</Card.Body>
				<Card.Footer>
					<Button.Root {color} variant="flat">
						Follow
						<ArrowUpRightIcon size={12} weight="bold" />
					</Button.Root>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>

	<Card.Root wide color="dark">
		<Card.Media>
			<Card.Image>
				<img {src} alt="Sunrise over a mountain ridge" />
			</Card.Image>
		</Card.Media>
		<Card.Body>
			<Card.Header><h3>Wide card — 480px</h3></Card.Header>
			<p>Set <code>wide</code> for a roomier 480px max-width instead of the default 350px.</p>
		</Card.Body>
	</Card.Root>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}
</style>
