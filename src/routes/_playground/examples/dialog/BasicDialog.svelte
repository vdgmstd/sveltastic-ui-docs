<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger>
		{#snippet child({ props })}<Button.Root {...props}>Open dialog</Button.Root>{/snippet}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Close />
		<Dialog.Title>Confirm action</Dialog.Title>
		<Dialog.Body>
			<p>Are you sure you want to proceed? This change can be reverted from Settings.</p>
		</Dialog.Body>
		<Dialog.Footer>
			<Button.Root variant="flat" onclick={() => (open = false)}>Cancel</Button.Root>
			<Button.Root onclick={() => (open = false)}>Confirm</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
