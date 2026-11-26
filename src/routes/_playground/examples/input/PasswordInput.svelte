<script lang="ts">
	import { flushSync } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { Input } from 'sveltastic-ui';

	let pwd = $state('');

	// Demo field: blank it (and flush the binding to the DOM) before the route unmounts,
	// so the browser never offers to save what was typed here.
	beforeNavigate(() => {
		pwd = '';
		flushSync();
	});
</script>

<Input.Root bind:value={pwd}>
	<Input.Control>
		<Input.Field type="password" passwordReveal autocomplete="new-password" placeholder="Password" />
	</Input.Control>
</Input.Root>
