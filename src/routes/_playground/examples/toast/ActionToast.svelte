<script lang="ts">
	import { Button, Toast, toast } from 'sveltastic-ui';

	let lastAction = $state('—');
</script>

{#snippet deleted()}
	<Toast.Root>
		<div class="toast__body">
			<Toast.Title>Message deleted</Toast.Title>
			<Toast.Description>You can still bring it back.</Toast.Description>
		</div>
		<Toast.Action onclick={() => (lastAction = 'undone')}>Undo</Toast.Action>
		<Toast.Close />
	</Toast.Root>
{/snippet}

<Button.Root color="dark" onclick={() => toast({ color: 'dark', sticky: true, content: deleted })}>
	Delete with undo
</Button.Root>
<span class="muted">action → {lastAction}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
