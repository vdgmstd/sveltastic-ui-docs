<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root trigger="hover">
	<Tooltip.Trigger><Button.Root>Hover</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Opens on hover / focus</Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root trigger="click">
	<Tooltip.Trigger><Button.Root>Click</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Toggles on click, closes on outside click</Tooltip.Content>
</Tooltip.Root>
