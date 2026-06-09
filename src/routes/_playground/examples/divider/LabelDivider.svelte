<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<Divider.Root>
		<Divider.Line />
		<Divider.Label>Center</Divider.Label>
		<Divider.Line />
	</Divider.Root>
	<Divider.Root labelPlacement="start">
		<Divider.Line />
		<Divider.Label>Start</Divider.Label>
		<Divider.Line />
	</Divider.Root>
	<Divider.Root labelPlacement="end">
		<Divider.Line />
		<Divider.Label>End</Divider.Label>
		<Divider.Line />
	</Divider.Root>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 320px;
	}
</style>
