<script lang="ts">
	import { Button } from 'sveltastic-ui';
</script>

<!-- `child` hands the merged props to the consumer, who renders the host element and the grouped buttons. -->
<Button.Group aria-label="Text alignment">
	{#snippet child({ props })}
		<div {...props}>
			<Button.Root variant="border"><strong>Bold</strong></Button.Root>
			<Button.Root variant="border"><em>Italic</em></Button.Root>
			<Button.Root variant="border"><span style="text-decoration: underline">Underline</span></Button.Root>
		</div>
	{/snippet}
</Button.Group>
