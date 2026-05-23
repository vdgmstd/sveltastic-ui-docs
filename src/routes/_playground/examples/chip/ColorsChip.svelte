<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<div class="row">
	<Chip color="primary">Primary</Chip>
	<Chip color="success">Success</Chip>
	<Chip color="danger">Danger</Chip>
	<Chip color="warning">Warning</Chip>
	<Chip color="dark">Dark</Chip>
	<Chip color="#7d22f0">#7d22f0</Chip>
	<Chip color="rgb(92, 177, 111)">rgb</Chip>
</div>
<div class="row">
	<Chip variant="flat" color="primary">Primary</Chip>
	<Chip variant="flat" color="success">Success</Chip>
	<Chip variant="flat" color="danger">Danger</Chip>
	<Chip variant="flat" color="warning">Warning</Chip>
	<Chip variant="flat" color="dark">Dark</Chip>
</div>
<div class="row">
	<Chip variant="border" color="primary">Primary</Chip>
	<Chip variant="border" color="success">Success</Chip>
	<Chip variant="border" color="danger">Danger</Chip>
	<Chip variant="border" color="warning">Warning</Chip>
	<Chip variant="border" color="dark">Dark</Chip>
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
