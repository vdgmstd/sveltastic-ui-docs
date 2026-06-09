<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { BellIcon } from 'phosphor-svelte';
</script>

<Menu.Root placement="bottom-end" matchWidth>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" {...props}>
				<BellIcon size={15} />
				Notifications
			</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Header>
		<div class="head">Inbox</div>
	</Menu.Header>
	<Menu.Content>
		<Menu.Item>Build finished</Menu.Item>
		<Menu.Item>New comment on PR #42</Menu.Item>
		<Menu.Item>Deploy succeeded</Menu.Item>
	</Menu.Content>
	<Menu.Footer>
		{#snippet children(close)}
			<button class="foot" type="button" onclick={close}>Mark all read</button>
		{/snippet}
	</Menu.Footer>
</Menu.Root>

<style>
	.head {
		padding: 0.5rem 0.75rem;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		opacity: 0.6;
	}
	.foot {
		width: 100%;
		padding: 0.5rem 0.75rem;
		font-size: 0.8rem;
		text-align: center;
		cursor: pointer;
		background: transparent;
		border: 0;
		color: rgb(var(--primary));
	}
	.foot:hover {
		background: rgb(var(--gray-2));
	}
</style>
