<script lang="ts">
	import { Popover, Button } from 'sveltastic-ui';
</script>

<Popover.Root triggerOn="hover" modal={false} placement="top">
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button.Root {...props} variant="flat">@sveltastic</Button.Root>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content>
		<div class="card">
			<span class="badge" aria-hidden="true">S</span>
			<div>
				<strong>Sveltastic UI</strong>
				<p>Styled Svelte 5 components. Hover to peek — no click needed.</p>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>

<style>
	.card {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		max-width: 17rem;
	}
	.badge {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		background: rgb(var(--primary) / 0.16);
		color: rgb(var(--primary));
		font-weight: 700;
	}
	.card strong {
		display: block;
		font-size: 0.9rem;
	}
	.card p {
		margin: 0.15rem 0 0;
		font-size: 0.82rem;
		opacity: 0.75;
		line-height: 1.4;
	}
</style>
