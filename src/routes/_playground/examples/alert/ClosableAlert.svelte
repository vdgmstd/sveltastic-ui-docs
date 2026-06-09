<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { CheckCircleIcon } from 'phosphor-svelte';

	let open = $state(true);
</script>

{#if open}
	<Alert.Root bind:open color="success">
		<Alert.Icon><CheckCircleIcon size={22} weight="fill" /></Alert.Icon>
		<Alert.Title>Changes saved</Alert.Title>
		<Alert.Description>Your preferences were saved successfully.</Alert.Description>
		<Alert.Close ariaLabel="Dismiss" />
	</Alert.Root>
{:else}
	<Button.Root variant="flat" color="success" onclick={() => (open = true)}>
		Reopen alert
	</Button.Root>
{/if}
