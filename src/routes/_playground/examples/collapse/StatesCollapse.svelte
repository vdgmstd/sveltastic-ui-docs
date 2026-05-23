<script lang="ts">
	import { Collapse, Button } from 'sveltastic-ui';

	let disabled = $state(false);
</script>

<Collapse variant="default" {disabled} title="Disabled (toggle below)">
	<p>Body content goes here.</p>
</Collapse>
<Collapse variant="flat" disabled color="danger" title="Always disabled flat">
	<p>Body content goes here.</p>
</Collapse>
<div class="row">
	<Button variant="flat" color="primary" size="small" onclick={() => (disabled = !disabled)}>
		{disabled ? 'Enable' : 'Disable'}
	</Button>
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
