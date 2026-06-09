<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root>
	<Tooltip.Trigger><Button.Root>Loading</Button.Root></Tooltip.Trigger>
	<Tooltip.Content loading>Fetching…</Tooltip.Content>
</Tooltip.Root>
