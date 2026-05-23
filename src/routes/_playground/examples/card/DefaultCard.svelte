<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/coffee-espresso.jpg';
</script>

<Card>
	{#snippet img()}
		<img {src} alt="Espresso machine pouring a fresh shot" />
	{/snippet}
	{#snippet title()}
		<h3>Pulling the perfect shot</h3>
	{/snippet}
	{#snippet body()}
		<p>Grind size, water temperature, and pressure — three knobs that decide whether your morning is liquid gold or burnt regret.</p>
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
	{#snippet actions()}
		<Button block>Open</Button>
		<Button block variant="shadow" color="danger">Cancel</Button>
	{/snippet}
</Card>
