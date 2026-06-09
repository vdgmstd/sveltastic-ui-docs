<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<Divider.Root color="primary" />
	<Divider.Root color="success" />
	<Divider.Root color="danger" />
	<Divider.Root color="warning" />
	<Divider.Root color="#7d22f0" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 320px;
	}
</style>
