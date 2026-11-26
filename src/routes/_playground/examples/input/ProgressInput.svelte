<script lang="ts">
	import { flushSync } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { Input } from 'sveltastic-ui';

	let password = $state('');

	// Demo field: blank it (and flush the binding to the DOM) before the route unmounts,
	// so the browser never offers to save what was typed here.
	beforeNavigate(() => {
		password = '';
		flushSync();
	});

	// Strength 0..100 from length + character variety; the progress bar tints red -> amber -> green.
	let strength = $derived.by(() => {
		const value = password;
		if (!value) return 0;
		let score = Math.min(value.length, 10) * 6;
		if (/[a-z]/.test(value)) score += 10;
		if (/[A-Z]/.test(value)) score += 10;
		if (/\d/.test(value)) score += 10;
		if (/[^A-Za-z0-9]/.test(value)) score += 10;
		return Math.min(score, 100);
	});

	let strengthLabel = $derived(
		strength === 0 ? 'Type a password' : strength < 33 ? 'Weak' : strength < 66 ? 'Fair' : 'Strong'
	);
</script>

<Input.Root bind:value={password} progress={strength}>
	<Input.Control>
		<Input.Field
			type="password"
			passwordReveal
			autocomplete="new-password"
			placeholder="Password strength"
		/>
	</Input.Control>
</Input.Root>
<span class="muted">{strengthLabel} — {strength}%</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
