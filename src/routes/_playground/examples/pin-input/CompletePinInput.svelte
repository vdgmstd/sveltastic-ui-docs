<script lang="ts">
	import { PinInput } from 'sveltastic-ui';

	let value = $state('');
	let done = $state(false);
</script>

<PinInput.Root
	bind:value
	maxLength={4}
	aria-label="4-digit code"
	onComplete={() => (done = true)}
	onValueChange={(v) => {
		if (v.length < 4) done = false;
	}}
/>
<span class="muted">{done ? '✓ verified' : '→ enter 4 digits'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
