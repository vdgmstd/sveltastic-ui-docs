<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';
</script>

<Tooltip.Root color="primary">
	<!-- child on Trigger: render your own wrapper element from the merged props. -->
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<span {...props}><Button.Root variant="flat">Custom child</Button.Root></span>
		{/snippet}
	</Tooltip.Trigger>

	<Tooltip.Content>Bubble content via children</Tooltip.Content>
</Tooltip.Root>
