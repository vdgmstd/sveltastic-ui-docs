<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button.Root>Default</Button.Root>
	</Tooltip.Trigger>
	<Tooltip.Content variant="default">Default</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="primary">
	<Tooltip.Trigger>
		<Button.Root variant="flat">Shadow</Button.Root>
	</Tooltip.Trigger>
	<Tooltip.Content variant="shadow">Shadow</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="danger">
	<Tooltip.Trigger>
		<Button.Root variant="flat" color="danger">Border</Button.Root>
	</Tooltip.Trigger>
	<Tooltip.Content variant="border">Border</Tooltip.Content>
</Tooltip.Root>
