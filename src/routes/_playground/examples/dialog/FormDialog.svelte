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

<Dialog.Root bind:open size="medium">
	<Dialog.Trigger>
		{#snippet child({ props })}<Button.Root variant="gradient" {...props}>New issue</Button.Root>{/snippet}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Close />
		<Dialog.Title>Create issue</Dialog.Title>
		<Dialog.Body>
			<div class="fields">
				<Input.Root bind:value={title} labelStyle="placeholder" iconColor="primary" block>
					<Input.Control>
						<Input.Icon><NotePencilIcon size={16} weight="bold" /></Input.Icon>
						<Input.Field />
						<Input.Label>Title</Input.Label>
					</Input.Control>
				</Input.Root>
				<Input.Root bind:value={assignee} labelStyle="placeholder" iconColor="primary" block>
					<Input.Control>
						<Input.Icon><UserIcon size={16} weight="bold" /></Input.Icon>
						<Input.Field />
						<Input.Label>Assignee</Input.Label>
					</Input.Control>
				</Input.Root>
				<Textarea.Root bind:value={summary} labelStyle="placeholder" block>
						<Textarea.Control>
							<Textarea.Field rows={4} />
						</Textarea.Control>
						<Textarea.Label>Summary</Textarea.Label>
				</Textarea.Root>
			</div>
		</Dialog.Body>
		<Dialog.Footer>
			<Button.Root variant="flat" onclick={() => (open = false)}>Cancel</Button.Root>
			<Button.Root onclick={submit} disabled={!title.trim()}>Create</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<style>
	.fields {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
