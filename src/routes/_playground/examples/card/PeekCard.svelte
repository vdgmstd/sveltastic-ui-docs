<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/reykjavik-church.jpg';
</script>

<Card variant="peek">
	{#snippet img()}
		<img {src} alt="Hallgrímskirkja church standing over Reykjavik" />
	{/snippet}
	{#snippet title()}
		<h3>Three days in Reykjavik</h3>
	{/snippet}
	{#snippet body()}
		<p>Geothermal pools, black-sand coastlines, and the world's quietest city after midnight.</p>
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
