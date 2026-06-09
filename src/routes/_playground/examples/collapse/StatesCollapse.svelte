<script lang="ts">
	import { Collapse, Button } from 'sveltastic-ui';

	let disabled = $state(false);
</script>

<Collapse.Root variant="default" {disabled}>
	<Collapse.Trigger>
		<Collapse.Title>Disabled (toggle below)</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" disabled color="danger">
	<Collapse.Trigger>
		<Collapse.Title>Always disabled flat</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<div class="row">
	<Button.Root variant="flat" color="primary" size="small" onclick={() => (disabled = !disabled)}>
		{disabled ? 'Enable' : 'Disable'}
	</Button.Root>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
		margin-top: 8px;
	}
</style>
