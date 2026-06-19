<script lang="ts">
	import { Popover, Button } from 'sveltastic-ui';
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button.Root {...props}>Open popover</Button.Root>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content>
		<div class="pop">
			<h4>Dimensions</h4>
			<p>Set the width and height of the layer. Click outside or press Escape to dismiss.</p>
			<Popover.Close>
				{#snippet child({ props })}
					<Button.Root {...props} size="small" variant="flat">Done</Button.Root>
				{/snippet}
			</Popover.Close>
		</div>
	</Popover.Content>
</Popover.Root>

<style>
	.pop {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		max-width: 16rem;
	}
	.pop h4 {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
	}
	.pop p {
		margin: 0;
		font-size: 0.85rem;
		opacity: 0.75;
		line-height: 1.4;
	}
	.pop :global(.button) {
		align-self: flex-end;
	}
</style>
