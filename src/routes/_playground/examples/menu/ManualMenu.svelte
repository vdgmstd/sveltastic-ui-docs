<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<Button.Root onclick={() => (open = !open)}>
	{open ? 'Close menu' : 'Open menu'}
</Button.Root>
<Menu.Root bind:open triggerOn="manual" placement="bottom">
	<Menu.Trigger>
		{#snippet child({ props })}
			<span class="anchor" {...props}>Anchor</span>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Item>Option 1</Menu.Item>
		<Menu.Item>Option 2</Menu.Item>
		<Menu.Item>Option 3</Menu.Item>
	</Menu.Content>
</Menu.Root>

<style>
	.anchor {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 6px 12px;
		font-size: 0.8rem;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		color: rgb(var(--text) / 0.7);
		font-style: italic;
	}
</style>
