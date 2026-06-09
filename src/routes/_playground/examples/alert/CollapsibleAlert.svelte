<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { MegaphoneIcon } from 'phosphor-svelte';

	let collapsed = $state(false);
</script>

<Alert.Root bind:collapsed>
	<Alert.Icon><MegaphoneIcon size={22} weight="fill" /></Alert.Icon>
	<Alert.Toggle>Release notes</Alert.Toggle>
	<Alert.Description>
		Click the title to collapse or expand the content. The state is two-way bindable.
	</Alert.Description>
</Alert.Root>

<Button.Root size="small" variant="flat" onclick={() => (collapsed = !collapsed)}>
	{collapsed ? 'Expand from outside' : 'Collapse from outside'}
</Button.Root>
