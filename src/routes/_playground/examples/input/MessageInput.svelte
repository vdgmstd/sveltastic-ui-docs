<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let value = $state('');
	let touched = $state(false);

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let error = $derived.by(() => {
		if (value.trim() === '') return 'Email is required';
		if (!emailPattern.test(value)) return 'Enter a valid email address';
		return '';
	});

	let showError = $derived(touched && error !== '');
	let isValid = $derived(touched && error === '');
</script>

<Input.Root
	bind:value
	fieldState={showError ? 'danger' : isValid ? 'success' : 'default'}
	labelStyle="inline"
	onValueChange={() => (touched = true)}
>
	<Input.Control>
		<Input.Field type="email" name="email" autocomplete="email" />
		<Input.Label>Email</Input.Label>
	</Input.Control>
	{#if showError}
		<Input.Message>{error}</Input.Message>
	{:else if isValid}
		<Input.Message>Looks good</Input.Message>
	{/if}
</Input.Root>
