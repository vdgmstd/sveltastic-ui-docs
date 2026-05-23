<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	const filters = ['frontend', 'backend', 'design', 'qa'] as const;
	const labels: Record<(typeof filters)[number], string> = {
		frontend: 'Frontend',
		backend: 'Backend',
		design: 'Design',
		qa: 'QA'
	};

	let active = $state(new Set<string>(['frontend', 'design']));

	function toggle(key: string): void {
		if (active.has(key)) active.delete(key);
		else active.add(key);
		active = new Set(active);
	}
</script>

<div class="row">
	{#each filters as key (key)}
		<Chip variant="flat" color="primary" active={active.has(key)} onclick={() => toggle(key)}>
			{labels[key]}
		</Chip>
	{/each}
</div>
<div class="row">
	{#each filters as key (key)}
		<Chip variant="border" color="success" active={active.has(key)} onclick={() => toggle(key)}>
			{labels[key]}
		</Chip>
	{/each}
</div>
<div class="row">
	{#each filters as key (key)}
		<Chip variant="shadow" active={active.has(key)} onclick={() => toggle(key)}>
			{labels[key]}
		</Chip>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.row + .row {
		margin-top: 0.5rem;
	}
</style>
