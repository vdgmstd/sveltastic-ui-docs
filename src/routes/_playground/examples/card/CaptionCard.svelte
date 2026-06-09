<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon, ArrowUpRightIcon } from 'phosphor-svelte';

	const src = '/card-demo/tokyo-alley.jpg';
</script>

<Card.Root variant="caption">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Neon-lit narrow alley in Tokyo at night" />
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
			<Button.Root color="primary" variant="relief">
				Shinjuku
				<ArrowUpRightIcon size={14} weight="bold" />
			</Button.Root>
		</Card.Header>
		<p>Twelve nights, one camera, and a lot of vending-machine coffee. Hover to read the field notes.</p>
	</Card.Body>
</Card.Root>
