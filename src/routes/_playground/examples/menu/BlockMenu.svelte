<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Option 1' },
		{ type: 'item', label: 'Option 2' }
	];
</script>

<div class="frame">
	<Menu block matchWidth placement="bottom-start" {items}>
		{#snippet trigger()}
			<Button block variant="border">Stretches to the parent</Button>
		{/snippet}
	</Menu>
</div>

<style>
	.frame {
		width: 320px;
	}
</style>
