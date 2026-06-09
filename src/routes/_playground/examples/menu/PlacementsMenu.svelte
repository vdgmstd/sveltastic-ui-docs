<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';

	const placements = [
		'bottom-start',
		'bottom',
		'bottom-end',
		'top-start',
		'top',
		'top-end'
	] as const;
</script>

<div class="grid">
	{#each placements as placement (placement)}
		<Menu.Root {placement}>
			<Menu.Trigger>
				{#snippet child({ props })}
					<Button.Root
						variant="flat"
						size="small"
						{...props}
					>
						{placement}
					</Button.Root>
				{/snippet}
			</Menu.Trigger>
			<Menu.Content>
				<Menu.Item>Option 1</Menu.Item>
				<Menu.Item>Option 2</Menu.Item>
				<Menu.Item>Option 3</Menu.Item>
			</Menu.Content>
		</Menu.Root>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		gap: 0.75rem 1rem;
	}
</style>
