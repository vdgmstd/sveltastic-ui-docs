<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let value = $state('');
	let last = $state('—');
	let ref = $state<HTMLInputElement | null>(null);
</script>

<Input.Root bind:value onValueChange={(v) => (last = v)}>
	<Input.Control>
		<Input.Field bind:ref placeholder="Type here" />
	</Input.Control>
</Input.Root>
<button type="button" onclick={() => ref?.focus()}>Focus via ref</button>
<span class="status">last: {last || '—'}</span>

<style>
	.status {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
