<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { WarningIcon } from 'phosphor-svelte';
</script>

<Alert.Root color="warning">
	<Alert.Icon><WarningIcon size={22} weight="fill" /></Alert.Icon>
	<Alert.Title>Action required</Alert.Title>
	<Alert.Description>
		Two of your invoices are overdue. Review them before the end of the day.
	</Alert.Description>
	<Alert.Action>
		<Button.Root size="small" variant="transparent" color="dark">Dismiss</Button.Root>
		<Button.Root size="small" variant="floating" color="dark">Review</Button.Root>
	</Alert.Action>
</Alert.Root>
