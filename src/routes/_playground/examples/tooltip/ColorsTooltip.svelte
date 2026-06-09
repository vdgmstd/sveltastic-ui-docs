<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root color="primary">
	<Tooltip.Trigger><Button.Root color="primary">Primary</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Primary</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="success">
	<Tooltip.Trigger><Button.Root color="success">Success</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Success</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="danger">
	<Tooltip.Trigger><Button.Root color="danger">Danger</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Danger</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="warning">
	<Tooltip.Trigger><Button.Root color="warning">Warning</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Warning</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="dark">
	<Tooltip.Trigger><Button.Root color="dark">Dark</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Dark</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="#7d33ff">
	<Tooltip.Trigger><Button.Root color="#7d33ff">Hex</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Hex</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root color="rgb(59,222,200)">
	<Tooltip.Trigger><Button.Root color="rgb(59,222,200)">RGB</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>RGB</Tooltip.Content>
</Tooltip.Root>
