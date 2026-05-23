<script lang="ts">
	import { Segmented } from 'sveltastic-ui';

	let interval = $state<'5' | '15' | '30'>('15');

	const items = [
		{ value: '5', label: '5 min' },
		{ value: '15', label: '15 min' },
		{ value: '30', label: '30 min' }
	];
</script>

<Segmented bind:value={interval} {items} />
<span class="muted">→ {interval} min</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
