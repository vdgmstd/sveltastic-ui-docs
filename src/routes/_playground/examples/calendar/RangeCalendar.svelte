<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
	import type { DateRange } from 'sveltastic-ui';

	let range = $state<DateRange>({});
</script>

<Calendar mode="range" bind:range size="large" showFooter />
<Calendar mode="range" bind:range showFooter />
<Calendar mode="range" bind:range size="small" showFooter />
<span class="muted">Value: {range.from ?? '—'} → {range.to ?? '—'}</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
