<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { SunIcon, MoonIcon, MonitorIcon } from 'phosphor-svelte';

	let theme = $state<'light' | 'dark' | 'system'>('system');
</script>

<Menu.Root placement="bottom-start" closeOnSelect={false}>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" color="dark" {...props}>
				<MoonIcon size={15} weight="fill" />
				Theme
			</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.GroupHeading>Theme</Menu.GroupHeading>
		<Menu.Item closeOnSelect selected={theme === 'light'} onSelect={() => (theme = 'light')}>
			<Menu.ItemIcon><SunIcon size={14} /></Menu.ItemIcon>
			Light
		</Menu.Item>
		<Menu.Item closeOnSelect selected={theme === 'dark'} onSelect={() => (theme = 'dark')}>
			<Menu.ItemIcon><MoonIcon size={14} /></Menu.ItemIcon>
			Dark
		</Menu.Item>
		<Menu.Item closeOnSelect selected={theme === 'system'} onSelect={() => (theme = 'system')}>
			<Menu.ItemIcon><MonitorIcon size={14} /></Menu.ItemIcon>
			System
		</Menu.Item>
	</Menu.Content>
</Menu.Root>
