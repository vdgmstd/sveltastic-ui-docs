<script lang="ts">
	import { Button } from 'sveltastic-ui';

	const labels = ['Large', 'Medium', 'Small'] as const;
	let activeFlat = $state(0);
	let activeBorder = $state(0);
</script>

<Button.Group>
	{#each labels as label, i (label)}
		<Button.Root active={activeFlat === i} variant="flat" onclick={() => (activeFlat = i)}>
			{label}
		</Button.Root>
	{/each}
</Button.Group>
<Button.Group>
	{#each labels as label, i (label)}
		<Button.Root active={activeBorder === i} variant="border" onclick={() => (activeBorder = i)}>
			{label}
		</Button.Root>
	{/each}
</Button.Group>
