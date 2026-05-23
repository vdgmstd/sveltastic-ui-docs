<script lang="ts">
	import { Dialog, Button, Input, Textarea } from 'sveltastic-ui';
	import { NotePencilIcon, UserIcon } from 'phosphor-svelte';

	let open = $state(false);
	let title = $state('');
	let assignee = $state('');
	let summary = $state('');

	function submit(): void {
		open = false;
		title = '';
		assignee = '';
		summary = '';
	}
</script>

<Button variant="gradient" onclick={() => (open = true)}>New issue</Button>

<Dialog bind:open size="medium">
	{#snippet header()}Create issue{/snippet}
	<div class="fields">
		<Input bind:value={title} label="Title" labelStyle="placeholder" iconColor="primary" block>
			{#snippet icon()}<NotePencilIcon size={16} weight="bold" />{/snippet}
		</Input>
		<Input bind:value={assignee} label="Assignee" labelStyle="placeholder" iconColor="primary" block>
			{#snippet icon()}<UserIcon size={16} weight="bold" />{/snippet}
		</Input>
		<Textarea bind:value={summary} label="Summary" labelStyle="placeholder" rows={4} block />
	</div>
	{#snippet footer()}
		<Button variant="flat" onclick={() => (open = false)}>Cancel</Button>
		<Button onclick={submit} disabled={!title.trim()}>Create</Button>
	{/snippet}
</Dialog>

<style>
	.fields { display: flex; flex-direction: column; gap: 0.75rem; }
</style>
