<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
	let last = $state('—');
	let fieldRef = $state<HTMLTextAreaElement | null>(null);
</script>

<Textarea.Root bind:value onValueChange={(v) => (last = v)}>
	<Textarea.Control>
		<Textarea.Field bind:ref={fieldRef} placeholder="Type here" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<button type="button" onclick={() => fieldRef?.focus()}>Focus via ref</button>
<span class="status">last: {last || '—'}</span>

<style>
	.status {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
