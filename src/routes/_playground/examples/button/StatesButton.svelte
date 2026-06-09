<script lang="ts">
	import { Button } from 'sveltastic-ui';
</script>

<div class="row">
	<Button.Root loading>Loading</Button.Root>
	<Button.Root disabled>Disabled</Button.Root>
	<Button.Root active>Active</Button.Root>
	<Button.Root pressedDisabled active>Active disabled</Button.Root>
</div>
<Button.Root block variant="border" color="primary">Block button</Button.Root>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
