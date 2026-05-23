<script lang="ts">
	import { Button } from 'sveltastic-ui';
</script>

<div class="row">
	<Button loading>Loading</Button>
	<Button disabled>Disabled</Button>
	<Button active>Active</Button>
	<Button pressedDisabled active>Active disabled</Button>
</div>
<Button block variant="border" color="primary">Block button</Button>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
