<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';
	import { SunIcon, MoonIcon, MonitorIcon } from 'phosphor-svelte';

	let theme = $state<'light' | 'dark' | 'system'>('system');

	const items = $derived<MenuEntry[]>([
		{ type: 'label', text: 'Theme' },
		{ type: 'item', label: 'Light', icon: SunIcon, selected: theme === 'light', onclick: (close) => { theme = 'light'; close(); } },
		{ type: 'item', label: 'Dark', icon: MoonIcon, selected: theme === 'dark', onclick: (close) => { theme = 'dark'; close(); } },
		{ type: 'item', label: 'System', icon: MonitorIcon, selected: theme === 'system', onclick: (close) => { theme = 'system'; close(); } }
	]);
</script>

<Menu placement="bottom-start" closeOnSelect={false} {items}>
	{#snippet trigger()}
		<Button variant="border" color="dark">
			<MoonIcon size={15} weight="fill" />
			Theme
		</Button>
	{/snippet}
</Menu>
