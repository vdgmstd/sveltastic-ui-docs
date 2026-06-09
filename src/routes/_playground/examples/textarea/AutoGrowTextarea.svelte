<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea.Root bind:value autoGrow block>
	<Textarea.Control>
		<Textarea.Field placeholder="Type something — auto-grows…" />
	</Textarea.Control>
</Textarea.Root>
