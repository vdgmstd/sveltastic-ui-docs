<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<div class="row">
	<Chip size="xl">XL</Chip>
	<Chip size="large">Large</Chip>
	<Chip size="medium">Medium</Chip>
	<Chip size="small">Small</Chip>
	<Chip size="mini">Mini</Chip>
</div>
<div class="row">
	<Chip variant="flat" size="xl" closable onclose={() => {}}>XL</Chip>
	<Chip variant="flat" size="large" closable onclose={() => {}}>Large</Chip>
	<Chip variant="flat" size="medium" closable onclose={() => {}}>Medium</Chip>
	<Chip variant="flat" size="small" closable onclose={() => {}}>Small</Chip>
	<Chip variant="flat" size="mini" closable onclose={() => {}}>Mini</Chip>
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
