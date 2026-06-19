<script lang="ts">
	import { Button, toast } from 'sveltastic-ui';
</script>

<div class="row">
	<Button.Root onclick={() => toast({ title: 'Saved', description: 'Your changes are live.', color: 'success' })}>
		Show toast
	</Button.Root>
	<Button.Root
		variant="border"
		color="danger"
		onclick={() => toast({ title: 'Upload failed', description: 'Check your connection.', color: 'danger', closable: true })}
	>
		Error toast
	</Button.Root>
</div>

<style>
	.row {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}
</style>
