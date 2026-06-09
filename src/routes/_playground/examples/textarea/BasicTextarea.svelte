<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea.Root bind:value>
	<Textarea.Control>
		<Textarea.Field placeholder="Type a few words…" rows={3} />
	</Textarea.Control>
</Textarea.Root>
