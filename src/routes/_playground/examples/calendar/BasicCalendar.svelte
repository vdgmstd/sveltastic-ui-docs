<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('');
</script>

<Calendar bind:value />
<span class="muted">Value: {value || '—'}</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
