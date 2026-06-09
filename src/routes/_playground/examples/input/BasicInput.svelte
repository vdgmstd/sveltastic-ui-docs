<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let value = $state('');
</script>

<Input.Root bind:value>
	<Input.Control>
		<Input.Field placeholder="Type something" />
	</Input.Control>
</Input.Root>
<Input.Root value="" disabled>
	<Input.Control>
		<Input.Field placeholder="Disabled" />
	</Input.Control>
</Input.Root>
<Input.Root value="Read only" readonly>
	<Input.Control>
		<Input.Field />
	</Input.Control>
</Input.Root>
