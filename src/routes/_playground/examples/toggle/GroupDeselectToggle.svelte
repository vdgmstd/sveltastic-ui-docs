<script lang="ts">
	import { ToggleGroup } from 'sveltastic-ui';

	let align = $state<string | undefined>('left');
</script>

<ToggleGroup.Root type="single" allowDeselect bind:value={align} ariaLabel="Text alignment">
	<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
	<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
	<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup.Root>
<span class="muted">→ {align ?? 'undefined'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
