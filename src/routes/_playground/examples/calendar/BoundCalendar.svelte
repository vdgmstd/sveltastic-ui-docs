<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('2026-04-15');
</script>

<Calendar.Root type="single" bind:value size="large" showFooter />
<Calendar.Root type="single" bind:value showFooter />
<Calendar.Root type="single" bind:value size="small" showFooter />
<span class="muted">Value: {value || '—'}</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
