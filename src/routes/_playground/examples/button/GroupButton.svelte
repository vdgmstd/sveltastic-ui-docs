<script lang="ts">
	import { Button, ButtonGroup } from 'sveltastic-ui';

	const labels = ['Large', 'Medium', 'Small'] as const;
	let activeFlat = $state(0);
	let activeBorder = $state(0);
</script>

<ButtonGroup>
	{#each labels as label, i (label)}
		<Button active={activeFlat === i} variant="flat" onclick={() => (activeFlat = i)}>
			{label}
		</Button>
	{/each}
</ButtonGroup>
<ButtonGroup>
	{#each labels as label, i (label)}
		<Button active={activeBorder === i} variant="border" onclick={() => (activeBorder = i)}>
			{label}
		</Button>
	{/each}
</ButtonGroup>
