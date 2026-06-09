<script lang="ts">
	import { Textarea } from 'sveltastic-ui';
</script>

<Textarea.Root labelStyle="placeholder" color="rgb(6 148 178)">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Petrol</Textarea.Label>
</Textarea.Root>
<Textarea.Root labelStyle="placeholder" color="rgb(99 102 241)" variant="shadow">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Indigo</Textarea.Label>
</Textarea.Root>
<Textarea.Root labelStyle="placeholder" color="rgb(5 150 105)" variant="border">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Pine</Textarea.Label>
</Textarea.Root>
