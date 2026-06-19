<script lang="ts">
	import { ToggleGroup } from 'sveltastic-ui';
	import { TextB, TextItalic, TextUnderline } from 'phosphor-svelte';

	let marks = $state<string[]>(['bold']);
</script>

<ToggleGroup.Root type="multiple" bind:value={marks} color="primary" ariaLabel="Text formatting">
	<ToggleGroup.Item value="bold" iconOnly ariaLabel="Bold"><TextB size={18} weight="bold" /></ToggleGroup.Item>
	<ToggleGroup.Item value="italic" iconOnly ariaLabel="Italic"><TextItalic size={18} /></ToggleGroup.Item>
	<ToggleGroup.Item value="underline" iconOnly ariaLabel="Underline"><TextUnderline size={18} /></ToggleGroup.Item>
</ToggleGroup.Root>
<span class="muted">→ {marks.join(', ') || 'none'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
