<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';

	const shapes = ['default', 'circle', 'square'] as const;
</script>

{#each shapes as s (s)}
	<Tooltip.Root>
		<Tooltip.Trigger><Button.Root variant="border">{s}</Button.Root></Tooltip.Trigger>
		<Tooltip.Content shape={s}>{s}</Tooltip.Content>
	</Tooltip.Root>
{/each}
