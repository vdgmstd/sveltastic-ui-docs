<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon, ArrowUpRightIcon } from 'phosphor-svelte';

	const src = '/card-demo/tokyo-alley.jpg';
</script>

<Card variant="caption">
	{#snippet img()}
		<img {src} alt="Neon-lit narrow alley in Tokyo at night" />
	{/snippet}
	{#snippet title()}
		<Button color="primary" variant="relief">
			Shinjuku
			<ArrowUpRightIcon size={14} weight="bold" />
		</Button>
	{/snippet}
	{#snippet body()}
		<p>Twelve nights, one camera, and a lot of vending-machine coffee. Hover to read the field notes.</p>
	{/snippet}
	{#snippet interactions()}
		<Button iconOnly color="danger" shape="circle" aria-label="Like">
			<HeartIcon size={16} weight="fill" />
		</Button>
		<Button variant="shadow" color="primary" aria-label="Chat">
			<ChatCircleIcon size={18} weight="fill" />
			<span>54</span>
		</Button>
	{/snippet}
</Card>
