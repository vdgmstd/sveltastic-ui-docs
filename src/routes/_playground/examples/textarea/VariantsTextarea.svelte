<script lang="ts">
	import { Textarea } from 'sveltastic-ui';
</script>

<Textarea.Root variant="default">
	<Textarea.Control>
		<Textarea.Field placeholder="default" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root variant="border">
	<Textarea.Control>
		<Textarea.Field placeholder="border" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root variant="shadow">
	<Textarea.Control>
		<Textarea.Field placeholder="shadow" rows={3} />
	</Textarea.Control>
</Textarea.Root>
