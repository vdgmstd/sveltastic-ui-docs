<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<Button variant="border" color="danger" onclick={() => (open = true)}>
	Open persistent dialog
</Button>

<Dialog bind:open persistent closable={false} color="danger">
	{#snippet header()}Discard unsaved changes?{/snippet}
	<p>Esc and backdrop click are disabled — you must pick an explicit action.</p>
	{#snippet footer()}
		<Button variant="flat" onclick={() => (open = false)}>Keep editing</Button>
		<Button color="danger" onclick={() => (open = false)}>Discard</Button>
	{/snippet}
</Dialog>
