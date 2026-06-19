<script lang="ts">
	import { PinInput } from 'sveltastic-ui';

	let value = $state('');
</script>

<PinInput.Root bind:value type="alphanumeric" maxLength={5} aria-label="Redeem code" />
<span class="muted">→ {value || '—'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
