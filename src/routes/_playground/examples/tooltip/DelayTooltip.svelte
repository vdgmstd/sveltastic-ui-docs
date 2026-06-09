<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root delay={500}>
	<Tooltip.Trigger><Button.Root>Delay 500ms</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>Waited half a second</Tooltip.Content>
</Tooltip.Root>
