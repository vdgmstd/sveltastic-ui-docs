<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { MegaphoneIcon } from 'phosphor-svelte';

	let collapsed = $state(false);
</script>

<Alert bind:collapsed>
	{#snippet icon()}<MegaphoneIcon size={22} weight="fill" />{/snippet}
	{#snippet title()}Release notes{/snippet}
	Click the title to collapse or expand the content. The state is two-way bindable.
</Alert>

<Button size="small" variant="flat" onclick={() => (collapsed = !collapsed)}>
	{collapsed ? 'Expand from outside' : 'Collapse from outside'}
</Button>
