<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';

	const placements = ['top', 'right', 'bottom', 'left'] as const;
</script>

{#each placements as p (p)}
	<Tooltip.Root placement={p}>
		<Tooltip.Trigger>
			<Button.Root variant="border">{p}</Button.Root>
		</Tooltip.Trigger>
		<Tooltip.Content>{p}</Tooltip.Content>
	</Tooltip.Root>
{/each}
