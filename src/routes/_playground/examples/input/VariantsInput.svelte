<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon } from 'phosphor-svelte';
</script>

<Input.Root>
	<Input.Control>
		<Input.Field placeholder="Default" />
	</Input.Control>
</Input.Root>
<Input.Root variant="border">
	<Input.Control>
		<Input.Icon><MagnifyingGlassIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Border" />
	</Input.Control>
</Input.Root>
<Input.Root variant="shadow">
	<Input.Control>
		<Input.Icon><MagnifyingGlassIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Shadow" />
	</Input.Control>
</Input.Root>
