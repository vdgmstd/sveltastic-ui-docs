<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<div class="col">
	<Progress value={70} color="primary" />
	<Progress value={70} color="success" />
	<Progress value={70} color="danger" />
	<Progress value={70} color="warning" />
	<Progress value={70} color="dark" />
	<Progress value={70} color="#7d22f0" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
</style>
