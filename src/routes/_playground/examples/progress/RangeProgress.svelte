<script lang="ts">
	import { Progress } from 'sveltastic-ui';

	let value = $state(72);
</script>

<div class="col">
	<Progress.Root {value} min={60} max={100} ariaValueText="{value} of 100 points" color="primary">
		<Progress.Track><Progress.Indicator /></Progress.Track>
		<Progress.Label>{value} / 100</Progress.Label>
	</Progress.Root>
	<div class="row">
		<input type="range" min="60" max="100" bind:value aria-label="Score" />
		<span class="muted">min=60, max=100, value={value}</span>
	</div>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
