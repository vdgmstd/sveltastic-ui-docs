<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<div class="col">
	<Progress.Root value={45} color="primary">
		<Progress.Track><Progress.Indicator stripes /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={70} color="success">
		<Progress.Track><Progress.Indicator stripes /></Progress.Track>
	</Progress.Root>
	<Progress.Root value={90} color="danger">
		<Progress.Track><Progress.Indicator stripes /></Progress.Track>
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
