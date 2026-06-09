<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<div class="row">
	<Chip.Root color="primary">Primary</Chip.Root>
	<Chip.Root color="success">Success</Chip.Root>
	<Chip.Root color="danger">Danger</Chip.Root>
	<Chip.Root color="warning">Warning</Chip.Root>
	<Chip.Root color="dark">Dark</Chip.Root>
	<Chip.Root color="#7d22f0">#7d22f0</Chip.Root>
	<Chip.Root color="rgb(92, 177, 111)">rgb</Chip.Root>
</div>
<div class="row">
	<Chip.Root variant="flat" color="primary">Primary</Chip.Root>
	<Chip.Root variant="flat" color="success">Success</Chip.Root>
	<Chip.Root variant="flat" color="danger">Danger</Chip.Root>
	<Chip.Root variant="flat" color="warning">Warning</Chip.Root>
	<Chip.Root variant="flat" color="dark">Dark</Chip.Root>
</div>
<div class="row">
	<Chip.Root variant="border" color="primary">Primary</Chip.Root>
	<Chip.Root variant="border" color="success">Success</Chip.Root>
	<Chip.Root variant="border" color="danger">Danger</Chip.Root>
	<Chip.Root variant="border" color="warning">Warning</Chip.Root>
	<Chip.Root variant="border" color="dark">Dark</Chip.Root>
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
