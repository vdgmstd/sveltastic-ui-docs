<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<div class="col">
	<Progress.Root value={null}>
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={null} color="success">
		<Progress.Track><Progress.Indicator /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={null} color="warning">
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
