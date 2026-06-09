<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
	import type { DateRange } from 'sveltastic-ui';

	let value = $state<DateRange>({});
</script>

<Calendar.Root type="range" bind:value size="large" showFooter />
<Calendar.Root type="range" bind:value showFooter />
<Calendar.Root type="range" bind:value size="small" showFooter />
<span class="muted">Value: {value.from ?? '—'} → {value.to ?? '—'}</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
