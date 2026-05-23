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
	<Input bind:value={tagInput} block placeholder="Add a tag">
		{#snippet icon()}<TagIcon size={16} weight="regular" />{/snippet}
	</Input>
	<Button color="primary" onclick={addTag}>
		<PlusIcon size={14} weight="bold" /> Add
	</Button>
</div>
<div class="row">
	{#each tags as tag (tag)}
		<Chip variant="flat" color="primary" closable onclose={() => removeTag(tag)}>
			{tag}
		</Chip>
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
