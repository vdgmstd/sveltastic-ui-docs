<script lang="ts">
	import { Progress } from 'sveltastic-ui';

	let value = $state(35);
</script>

<div class="col">
	<Progress {value} color="primary" />
	<div class="row">
		<input type="range" min="0" max="100" bind:value aria-label="Value" />
		<span class="muted">Value: {value}</span>
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
