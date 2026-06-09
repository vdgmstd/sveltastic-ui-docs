<script lang="ts">
	import { Textarea } from 'sveltastic-ui';
</script>

<Textarea.Root fieldState="primary">
	<Textarea.Control>
		<Textarea.Field placeholder="primary" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root fieldState="success">
	<Textarea.Control>
		<Textarea.Field placeholder="success" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root fieldState="danger">
	<Textarea.Control>
		<Textarea.Field placeholder="danger" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root fieldState="warning">
	<Textarea.Control>
		<Textarea.Field placeholder="warning" rows={3} />
	</Textarea.Control>
</Textarea.Root>
<Textarea.Root fieldState="dark">
	<Textarea.Control>
		<Textarea.Field placeholder="dark" rows={3} />
	</Textarea.Control>
</Textarea.Root>
