<script lang="ts">
	import { Card, Button, Chip } from 'sveltastic-ui';
	import { ArrowUpRightIcon, BowlFoodIcon, ClockIcon } from 'phosphor-svelte';

	const src = '/card-demo/sourdough-bread.jpg';
</script>

<Card.Root variant="horizontal" cardStyle="max-width: 450px">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Crusty sourdough loaf on a dark counter" />
		</Card.Image>
	</Card.Media>
	<Card.Body>
		<Card.Header>
			<h3>Sourdough, slowly</h3>
			<div class="chips">
				<Chip.Root variant="flat" color="warning">
					<Chip.Icon><BowlFoodIcon size={12} weight="fill" /></Chip.Icon>
					Baking
				</Chip.Root>
				<Chip.Root variant="flat" color="dark">
					<Chip.Icon><ClockIcon size={12} weight="fill" /></Chip.Icon>
					8 min read
				</Chip.Root>
			</div>
		</Card.Header>
		<p>Why a 36-hour cold ferment beats every shortcut — a baker's notes from a year of stubborn experiments.</p>
	</Card.Body>
	<Card.Footer>
		<Button.Root variant="transparent" size="medium" color="dark">Share</Button.Root>
		<Button.Root variant="flat" size="medium" color="primary">
			Read more
			<ArrowUpRightIcon size={12} weight="bold" />
		</Button.Root>
	</Card.Footer>
</Card.Root>

<style>
	.chips {
		display: flex;
		gap: 0.4rem;
		align-items: center;
		flex-wrap: wrap;
		margin-top: var(--space-3);
	}
</style>
