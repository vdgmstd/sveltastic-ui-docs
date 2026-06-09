<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
	const paragraphs = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<Dialog.Root bind:open size="medium" align="top">
	<Dialog.Trigger>
		{#snippet child({ props })}<Button.Root variant="border" {...props}>Open long content</Button.Root>{/snippet}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Close />
		<Dialog.Title>Terms of service</Dialog.Title>
		<Dialog.Body>
			{#each paragraphs as n (n)}
				<p>
					Section {n}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, nulla
					vitae malesuada efficitur, est dolor blandit massa, ac sodales sapien sapien sed nibh.
				</p>
			{/each}
		</Dialog.Body>
		<Dialog.Footer>
			<Button.Root variant="flat" onclick={() => (open = false)}>Decline</Button.Root>
			<Button.Root onclick={() => (open = false)}>Accept</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
