<script lang="ts">
	import { Popover, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<div class="row">
	<Button.Root variant="border" onclick={() => (open = !open)}>
		{open ? 'Close' : 'Open'} externally
	</Button.Root>

	<Popover.Root bind:open closeOnClickOutside={false}>
		<Popover.Trigger>
			{#snippet child({ props, open: isOpen })}
				<Button.Root {...props} color={isOpen ? 'success' : 'primary'}>Trigger</Button.Root>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content>
			<p class="txt">Bound to <code>open</code>; the external button and the trigger share state.</p>
		</Popover.Content>
	</Popover.Root>
</div>

<style>
	.row {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		flex-wrap: wrap;
	}
	.txt {
		margin: 0;
		max-width: 15rem;
		font-size: 0.85rem;
		line-height: 1.4;
	}
</style>
