<script lang="ts">
	import { ToggleGroup } from 'sveltastic-ui';

	const tags = ['Design', 'Frontend', 'Backend', 'DevOps', 'Docs', 'QA', 'Research'];
	let picked = $state<string[]>(['Design']);
</script>

<div class="narrow">
	<ToggleGroup.Root type="multiple" wrap variant="border" bind:value={picked} ariaLabel="Tags">
		{#each tags as tag (tag)}
			<ToggleGroup.Item value={tag}>{tag}</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>

<style>
	.narrow {
		max-width: 320px;
	}
</style>
