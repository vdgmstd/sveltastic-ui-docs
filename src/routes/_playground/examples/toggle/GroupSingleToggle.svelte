<script lang="ts">
	import { ToggleGroup } from 'sveltastic-ui';
	import { TextAlignLeft, TextAlignCenter, TextAlignRight } from 'phosphor-svelte';

	let align = $state('left');
</script>

<ToggleGroup.Root type="single" bind:value={align} ariaLabel="Text alignment">
	<ToggleGroup.Item value="left" iconOnly ariaLabel="Align left"><TextAlignLeft size={18} /></ToggleGroup.Item>
	<ToggleGroup.Item value="center" iconOnly ariaLabel="Align center"><TextAlignCenter size={18} /></ToggleGroup.Item>
	<ToggleGroup.Item value="right" iconOnly ariaLabel="Align right"><TextAlignRight size={18} /></ToggleGroup.Item>
</ToggleGroup.Root>
<span class="muted">→ {align || 'none'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
