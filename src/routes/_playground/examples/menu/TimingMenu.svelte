<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';
	import { expoOut, backOut } from 'svelte/easing';

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Option 1' },
		{ type: 'item', label: 'Option 2' }
	];
</script>

<Menu openAnim="pop" openDuration={120} {items}>
	{#snippet trigger()}<Button variant="flat" size="small">120ms snap</Button>{/snippet}
</Menu>
<Menu openAnim="slide" openDuration={500} openEasing={expoOut} {items}>
	{#snippet trigger()}<Button variant="flat" size="small">500ms slide</Button>{/snippet}
</Menu>
<Menu openAnim="spring" openDuration={650} openEasing={backOut} {items}>
	{#snippet trigger()}<Button variant="flat" size="small" color="success">650ms back</Button>{/snippet}
</Menu>
