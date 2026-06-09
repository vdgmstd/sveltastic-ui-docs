<script lang="ts">
	import { Chip, Input, Button } from 'sveltastic-ui';
	import { TagIcon, PlusIcon } from 'phosphor-svelte';

	let tagInput = $state('');
	let tags = $state<string[]>(['design', 'svelte', 'tailwind']);

	function addTag(): void {
		const value = tagInput.trim();
		if (!value || tags.includes(value)) return;
		tags = [...tags, value];
		tagInput = '';
	}

	function removeTag(value: string): void {
		tags = tags.filter((t) => t !== value);
	}
</script>

<div class="harmony">
	<Input.Root bind:value={tagInput} block>
		<Input.Control>
			<Input.Icon><TagIcon size={16} weight="regular" /></Input.Icon>
			<Input.Field placeholder="Add a tag" />
		</Input.Control>
	</Input.Root>
	<Button.Root color="primary" onclick={addTag}>
		<PlusIcon size={14} weight="bold" /> Add
	</Button.Root>
</div>
<div class="row">
	{#each tags as tag (tag)}
		<Chip.Root variant="flat" color="primary">
			{tag}
			<Chip.Close onclose={() => removeTag(tag)} />
		</Chip.Root>
	{/each}
	{#if tags.length === 0}
		<span class="muted">No tags yet.</span>
	{/if}
</div>

<style>
	.harmony {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		max-width: 480px;
	}
	.harmony :global(.input) {
		flex: 1;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}
	.muted {
		font-size: 0.85rem;
		opacity: 0.6;
	}
</style>
