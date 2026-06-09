<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<Divider.Root thickness={1} />
	<Divider.Root thickness={2} />
	<Divider.Root thickness={4} color="primary" />
	<Divider.Root thickness="0.5rem" variant="dashed" color="warning" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 320px;
	}
</style>
