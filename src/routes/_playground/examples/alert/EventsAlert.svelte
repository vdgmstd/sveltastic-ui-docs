<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { BellIcon } from 'phosphor-svelte';

	let open = $state(true);
	let lastChange = $state('—');
	let lastComplete = $state('—');
</script>

{#if open}
	<Alert.Root
		bind:open
		color="primary"
		onOpenChange={(next) => (lastChange = String(next))}
		onOpenChangeComplete={(settled) => (lastComplete = String(settled))}
	>
		<Alert.Icon><BellIcon size={22} weight="fill" /></Alert.Icon>
		<Alert.Title>Event callbacks</Alert.Title>
		<Alert.Description>
			Close this alert: <code>onOpenChange</code> fires immediately, then
			<code>onOpenChangeComplete</code> fires after the exit transition settles.
		</Alert.Description>
		<Alert.Close ariaLabel="Dismiss" />
	</Alert.Root>
{:else}
	<Button.Root variant="flat" onclick={() => (open = true)}>Reopen alert</Button.Root>
{/if}

<dl class="status">
	<dt>onOpenChange</dt>
	<dd>{lastChange}</dd>
	<dt>onOpenChangeComplete</dt>
	<dd>{lastComplete}</dd>
</dl>

<style>
	.status {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.25rem 1rem;
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}
	.status dt {
		opacity: 0.6;
	}
	.status dd {
		margin: 0;
	}
</style>
