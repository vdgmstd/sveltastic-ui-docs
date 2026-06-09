<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { CheckCircleIcon, WarningCircleIcon } from 'phosphor-svelte';
</script>

<Input.Root fieldState="success">
	<Input.Control>
		<Input.Icon><CheckCircleIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Success" />
	</Input.Control>
</Input.Root>
<Input.Root fieldState="danger">
	<Input.Control>
		<Input.Field placeholder="Danger" />
	</Input.Control>
</Input.Root>
<Input.Root fieldState="warning">
	<Input.Control>
		<Input.Icon><WarningCircleIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Warning" />
	</Input.Control>
</Input.Root>
<Input.Root fieldState="primary">
	<Input.Control>
		<Input.Field placeholder="Primary" />
	</Input.Control>
</Input.Root>
