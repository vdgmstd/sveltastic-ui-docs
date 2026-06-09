<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root>
	<Tooltip.Trigger><Button.Root variant="border">With arrow</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Pointer arrow shown<Tooltip.Arrow /></Tooltip.Content>
</Tooltip.Root>

<Tooltip.Root>
	<Tooltip.Trigger><Button.Root variant="border">No arrow</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Arrow hidden</Tooltip.Content>
</Tooltip.Root>
