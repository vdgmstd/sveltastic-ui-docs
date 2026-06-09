<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button.Root variant="border">Hover me</Button.Root>
	</Tooltip.Trigger>
	<Tooltip.Content>A contextual hint</Tooltip.Content>
</Tooltip.Root>
