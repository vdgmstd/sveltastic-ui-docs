<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon, EnvelopeIcon } from 'phosphor-svelte';
</script>

<Input.Root>
	<Input.Control>
		<Input.Icon><MagnifyingGlassIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Search" />
	</Input.Control>
</Input.Root>
<Input.Root iconPosition="after">
	<Input.Control>
		<Input.Icon><EnvelopeIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Email" />
	</Input.Control>
</Input.Root>
