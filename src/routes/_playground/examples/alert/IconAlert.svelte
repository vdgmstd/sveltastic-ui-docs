<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { WarningIcon } from 'phosphor-svelte';
</script>

<Alert color="warning">
	{#snippet icon()}<WarningIcon size={22} weight="fill" />{/snippet}
	{#snippet title()}Action required{/snippet}
	{#snippet footer()}
		<Button size="small" variant="transparent" color="dark">Dismiss</Button>
		<Button size="small" variant="floating" color="dark">Review</Button>
	{/snippet}
	Two of your invoices are overdue. Review them before the end of the day.
</Alert>
