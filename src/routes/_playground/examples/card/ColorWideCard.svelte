<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { ArrowUpRightIcon } from 'phosphor-svelte';

	const src = '/card-demo/mountain-sunrise.jpg';
	const colors = ['primary', 'success', 'danger'] as const;
</script>

<!-- color sets --c for descendants; cardStyle reaches the inner .card surface (here a max-width). -->
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

	<Card.Root color="dark" cardStyle="max-width: 450px">
		<Card.Media>
			<Card.Image>
				<img {src} alt="Sunrise over a mountain ridge" />
			</Card.Image>
		</Card.Media>
		<Card.Body>
			<Card.Header><h3>Constrained — 450px</h3></Card.Header>
			<p>
				Cards fill their container by default. Use <code>cardStyle</code> /
				<code>cardClass</code> to style or size the inner <code>.card</code> surface — here a
				<code>max-width</code>.
			</p>
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
