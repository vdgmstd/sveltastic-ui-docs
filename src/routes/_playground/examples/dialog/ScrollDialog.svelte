<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
	const paragraphs = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<Button variant="border" onclick={() => (open = true)}>Open long content</Button>

<Dialog bind:open size="medium" align="top">
	{#snippet header()}Terms of service{/snippet}
	{#each paragraphs as n (n)}
		<p>
			Section {n}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, nulla
			vitae malesuada efficitur, est dolor blandit massa, ac sodales sapien sapien sed nibh.
		</p>
	{/each}
	{#snippet footer()}
		<Button variant="flat" onclick={() => (open = false)}>Decline</Button>
		<Button onclick={() => (open = false)}>Accept</Button>
	{/snippet}
</Dialog>
