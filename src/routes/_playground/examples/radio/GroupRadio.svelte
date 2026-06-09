<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';

	let vertical = $state('s');
	let horizontal = $state('m');
	let locked = $state('mid');
</script>

<div class="grid">
	<RadioGroup.Root bind:value={vertical} ariaLabel="Vertical, looped">
		<RadioGroup.Item value="s">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Small</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="m">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Medium</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="l">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Large</RadioGroup.Label>
		</RadioGroup.Item>
	</RadioGroup.Root>

	<RadioGroup.Root bind:value={horizontal} orientation="horizontal" loop ariaLabel="Horizontal, looped">
		<RadioGroup.Item value="s">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Small</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="m">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Medium</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="l">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Large</RadioGroup.Label>
		</RadioGroup.Item>
	</RadioGroup.Root>

	<RadioGroup.Root bind:value={locked} readonly ariaLabel="Read-only group">
		<RadioGroup.Item value="low">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Low</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="mid">
			<RadioGroup.Indicator />
			<RadioGroup.Label>Mid</RadioGroup.Label>
		</RadioGroup.Item>
		<RadioGroup.Item value="high">
			<RadioGroup.Indicator />
			<RadioGroup.Label>High</RadioGroup.Label>
		</RadioGroup.Item>
	</RadioGroup.Root>
</div>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 2.5rem;
	}
</style>
