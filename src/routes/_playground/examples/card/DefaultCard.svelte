<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/coffee-espresso.jpg';
</script>

<Card.Root cardStyle="max-width: 450px">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Espresso machine pouring a fresh shot" />
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
		<Card.Header><h3>Pulling the perfect shot</h3></Card.Header>
		<p>Grind size, water temperature, and pressure — three knobs that decide whether your morning is liquid gold or burnt regret.</p>
	</Card.Body>
	<Card.Footer floating>
		<Button.Root block>Open</Button.Root>
		<Button.Root block variant="shadow" color="danger">Cancel</Button.Root>
	</Card.Footer>
</Card.Root>
