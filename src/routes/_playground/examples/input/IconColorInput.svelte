<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon, EnvelopeIcon } from 'phosphor-svelte';
</script>

<Input.Root iconColor="primary">
	<Input.Control>
		<Input.Icon><MagnifyingGlassIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Primary icon" />
	</Input.Control>
</Input.Root>
<Input.Root iconColor="warning">
	<Input.Control>
		<Input.Icon><EnvelopeIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Warning icon" />
	</Input.Control>
</Input.Root>
