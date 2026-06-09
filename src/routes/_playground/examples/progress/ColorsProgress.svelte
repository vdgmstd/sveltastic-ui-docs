<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<div class="col">
	<Progress.Root value={70} color="primary">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="success">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="danger">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="warning">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="dark">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="#7d22f0">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
</style>
