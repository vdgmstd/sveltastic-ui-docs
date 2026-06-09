<script lang="ts">
	import { Textarea } from 'sveltastic-ui';
</script>

<Textarea.Root labelStyle="default">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Notes</Textarea.Label>
</Textarea.Root>
<Textarea.Root labelStyle="inline">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Notes</Textarea.Label>
</Textarea.Root>
<Textarea.Root labelStyle="placeholder">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Notes</Textarea.Label>
</Textarea.Root>
