<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root interactive>
	<Tooltip.Trigger><Button.Root>Interactive</Button.Root></Tooltip.Trigger>
	<Tooltip.Content>
		Stays open while hovered — <a href="https://svelte.dev">click the link</a>
	</Tooltip.Content>
</Tooltip.Root>
