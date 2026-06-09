<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<Dialog.Root bind:open persistent color="danger">
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" color="danger" {...props}>Open persistent dialog</Button.Root>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Title>Discard unsaved changes?</Dialog.Title>
		<Dialog.Body>
			<p>Esc and backdrop click are disabled — you must pick an explicit action.</p>
		</Dialog.Body>
		<Dialog.Footer>
			<Button.Root variant="flat" onclick={() => (open = false)}>Keep editing</Button.Root>
			<Button.Root color="danger" onclick={() => (open = false)}>Discard</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
