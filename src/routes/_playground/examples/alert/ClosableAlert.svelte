<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { CheckCircleIcon } from 'phosphor-svelte';

	let open = $state(true);
</script>

{#if open}
	<Alert bind:open closable color="success">
		{#snippet icon()}<CheckCircleIcon size={22} weight="fill" />{/snippet}
		{#snippet title()}Changes saved{/snippet}
		Your preferences were saved successfully.
	</Alert>
{:else}
	<Button variant="flat" color="success" onclick={() => (open = true)}>
		Reopen alert
	</Button>
{/if}
