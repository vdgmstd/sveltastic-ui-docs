<script lang="ts">
	import { Segmented } from 'sveltastic-ui';

	const items = [
		{ value: '5', label: '5 min' },
		{ value: '15', label: '15 min' },
		{ value: '30', label: '30 min' }
	];
</script>

<div class="stack">
	<Segmented variant="default" {items} />
	<Segmented variant="tonal" {items} />
	<Segmented variant="border" {items} />
	<Segmented variant="relief" {items} />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
</style>
