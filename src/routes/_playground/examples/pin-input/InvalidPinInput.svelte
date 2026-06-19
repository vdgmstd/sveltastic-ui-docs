<script lang="ts">
	import { PinInput } from 'sveltastic-ui';

	let value = $state('123456');
	let invalid = $derived(value.length === 6 && value !== '424242');
</script>

<PinInput.Root bind:value {invalid} aria-label="Confirmation code" />
<span class="muted">{invalid ? '✗ wrong code (try 424242)' : value.length === 6 ? '✓ correct' : '→ enter the code'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
