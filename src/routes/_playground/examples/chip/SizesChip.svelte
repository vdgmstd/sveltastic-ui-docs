<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<div class="row">
	<Chip.Root size="xl">XL</Chip.Root>
	<Chip.Root size="large">Large</Chip.Root>
	<Chip.Root size="medium">Medium</Chip.Root>
	<Chip.Root size="small">Small</Chip.Root>
	<Chip.Root size="mini">Mini</Chip.Root>
</div>
<div class="row">
	<Chip.Root variant="flat" size="xl">XL<Chip.Close onclose={() => {}} /></Chip.Root>
	<Chip.Root variant="flat" size="large">Large<Chip.Close onclose={() => {}} /></Chip.Root>
	<Chip.Root variant="flat" size="medium">Medium<Chip.Close onclose={() => {}} /></Chip.Root>
	<Chip.Root variant="flat" size="small">Small<Chip.Close onclose={() => {}} /></Chip.Root>
	<Chip.Root variant="flat" size="mini">Mini<Chip.Close onclose={() => {}} /></Chip.Root>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.row + .row {
		margin-top: 0.5rem;
	}
</style>
