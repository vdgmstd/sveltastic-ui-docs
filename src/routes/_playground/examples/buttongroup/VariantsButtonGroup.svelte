<script lang="ts">
	import { Button } from 'sveltastic-ui';

	const labels = ['Left', 'Center', 'Right'] as const;
</script>

<Button.Group>
	{#each labels as label (label)}
		<Button.Root variant="default">{label}</Button.Root>
	{/each}
</Button.Group>
<Button.Group>
	{#each labels as label (label)}
		<Button.Root variant="gradient">{label}</Button.Root>
	{/each}
</Button.Group>
<Button.Group>
	{#each labels as label (label)}
		<Button.Root variant="relief">{label}</Button.Root>
	{/each}
</Button.Group>
