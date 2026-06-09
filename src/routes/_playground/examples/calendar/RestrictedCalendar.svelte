<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('');
</script>

<Calendar.Root
	type="single"
	bind:value
	min="2026-04-05"
	max="2026-04-25"
	disabledDate={(d) => d.dayOfWeek === 6 || d.dayOfWeek === 7}
/>
<span class="muted">Min/max + weekends disabled</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
