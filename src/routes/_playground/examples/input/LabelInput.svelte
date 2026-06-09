<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let floating = $state('');
	let inline = $state('');
</script>

<Input.Root labelStyle="placeholder" bind:value={floating}>
	<Input.Control>
		<Input.Field />
		<Input.Label>Floating label</Input.Label>
	</Input.Control>
</Input.Root>
<Input.Root labelStyle="inline" bind:value={inline}>
	<Input.Control>
		<Input.Field placeholder="Placeholder" />
		<Input.Label>Inline label</Input.Label>
	</Input.Control>
</Input.Root>
