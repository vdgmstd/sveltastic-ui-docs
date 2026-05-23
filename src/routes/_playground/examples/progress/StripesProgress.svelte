<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<div class="col">
	<Progress value={45} stripes color="primary" />
	<Progress value={70} stripes color="success" />
	<Progress value={90} stripes color="danger" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
</style>
