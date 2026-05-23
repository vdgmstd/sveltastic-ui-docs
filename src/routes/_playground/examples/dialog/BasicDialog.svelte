<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open dialog</Button>

<Dialog bind:open>
	{#snippet header()}Confirm action{/snippet}
	<p>Are you sure you want to proceed? This change can be reverted from Settings.</p>
	{#snippet footer()}
		<Button variant="flat" onclick={() => (open = false)}>Cancel</Button>
		<Button onclick={() => (open = false)}>Confirm</Button>
	{/snippet}
</Dialog>
