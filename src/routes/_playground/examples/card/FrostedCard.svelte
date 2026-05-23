<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';
	import { HeartIcon, ChatCircleIcon } from 'phosphor-svelte';

	const src = '/card-demo/desk-workspace.jpg';
</script>

<Card variant="frosted">
	{#snippet img()}
		<img {src} alt="Minimal desk setup with a laptop and accessories" />
	{/snippet}
	{#snippet title()}
		<Button color="primary">Quiet desk</Button>
	{/snippet}
	{#snippet body()}
		<p>What changed after a quarter of removing one object from the desk every Friday — fewer cables, fewer mugs, fewer reasons to context-switch.</p>
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
