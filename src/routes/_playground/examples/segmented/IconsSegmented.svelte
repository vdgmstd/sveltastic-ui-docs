<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
	import {
		SunIcon,
		MoonIcon,
		MonitorIcon,
		AlignLeftIcon,
		AlignCenterHorizontalIcon,
		AlignRightIcon
	} from 'phosphor-svelte';
</script>

<Segmented.Root ariaLabel="Theme">
	<Segmented.Item value="light">
		<Segmented.ItemIcon><SunIcon size={15} weight="fill" /></Segmented.ItemIcon>
		Light
	</Segmented.Item>
	<Segmented.Item value="dark">
		<Segmented.ItemIcon><MoonIcon size={15} weight="fill" /></Segmented.ItemIcon>
		Dark
	</Segmented.Item>
	<Segmented.Item value="system">
		<Segmented.ItemIcon><MonitorIcon size={14} weight="fill" /></Segmented.ItemIcon>
		System
	</Segmented.Item>
</Segmented.Root>

<Segmented.Root ariaLabel="Text alignment">
	<Segmented.Item value="left">
		<Segmented.ItemIcon><AlignLeftIcon size={16} weight="bold" /></Segmented.ItemIcon>
	</Segmented.Item>
	<Segmented.Item value="center">
		<Segmented.ItemIcon
			><AlignCenterHorizontalIcon size={16} weight="bold" /></Segmented.ItemIcon
		>
	</Segmented.Item>
	<Segmented.Item value="right">
		<Segmented.ItemIcon><AlignRightIcon size={16} weight="bold" /></Segmented.ItemIcon>
	</Segmented.Item>
</Segmented.Root>
