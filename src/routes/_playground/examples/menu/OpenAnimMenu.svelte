<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Option 1' },
		{ type: 'item', label: 'Option 2' },
		{ type: 'item', label: 'Option 3' }
	];
</script>

{#each ['pop', 'slide', 'fade', 'spring'] as kind (kind)}
	<Menu openAnim={kind as 'pop' | 'slide' | 'fade' | 'spring'} {items}>
		{#snippet trigger()}<Button variant="border" size="small">{kind}</Button>{/snippet}
	</Menu>
{/each}
