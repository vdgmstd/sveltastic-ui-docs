<script lang="ts">
	import { Popover, Button, Input } from 'sveltastic-ui';

	let name = $state('');
	let saved = $state('—');
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button.Root {...props} variant="border">Edit profile</Button.Root>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content>
		<form
			class="form"
			onsubmit={(e) => {
				e.preventDefault();
				saved = name || '—';
			}}
		>
			<p class="hint">Focus is trapped here while open (Tab cycles inside).</p>
			<Input.Root bind:value={name} labelStyle="inline">
				<Input.Control>
					<Input.Field name="display-name" />
					<Input.Label>Display name</Input.Label>
				</Input.Control>
			</Input.Root>
			<div class="actions">
				<Popover.Close>
					{#snippet child({ props })}
						<Button.Root {...props} size="small" variant="flat">Cancel</Button.Root>
					{/snippet}
				</Popover.Close>
				<Button.Root type="submit" size="small">Save</Button.Root>
			</div>
		</form>
	</Popover.Content>
</Popover.Root>
<span class="muted">saved → {saved}</span>

<style>
	.form {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		min-width: 15rem;
	}
	.hint {
		margin: 0;
		font-size: 0.8rem;
		opacity: 0.7;
	}
	.actions {
		display: flex;
		gap: 0.5rem;
		justify-content: flex-end;
	}
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
