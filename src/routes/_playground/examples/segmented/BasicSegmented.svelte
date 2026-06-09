<script lang="ts">
	import { Segmented } from 'sveltastic-ui';

	let interval = $state<'5' | '15' | '30'>('15');
</script>

<Segmented.Root bind:value={interval} ariaLabel="Refresh interval">
	<Segmented.Item value="5">5 min</Segmented.Item>
	<Segmented.Item value="15">15 min</Segmented.Item>
	<Segmented.Item value="30">30 min</Segmented.Item>
</Segmented.Root>
<span class="muted">→ {interval} min</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
