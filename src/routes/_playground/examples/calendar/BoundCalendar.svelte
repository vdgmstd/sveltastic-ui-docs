<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('2026-04-15');
</script>

<Calendar bind:value size="large" showFooter />
<Calendar bind:value showFooter />
<Calendar bind:value size="small" showFooter />
<span class="muted">Value: {value || '—'}</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
