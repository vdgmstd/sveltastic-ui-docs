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

<Segmented
	items={[
		{ value: 'light', label: 'Light', icon: sunIcon },
		{ value: 'dark', label: 'Dark', icon: moonIcon },
		{ value: 'system', label: 'System', icon: monitorIcon }
	]}
/>
<Segmented
	ariaLabel="Text alignment"
	items={[
		{ value: 'left', icon: alignLeftIcon },
		{ value: 'center', icon: alignCenterIcon },
		{ value: 'right', icon: alignRightIcon }
	]}
/>

{#snippet sunIcon()}<SunIcon size={15} weight="fill" />{/snippet}
{#snippet moonIcon()}<MoonIcon size={15} weight="fill" />{/snippet}
{#snippet monitorIcon()}<MonitorIcon size={14} weight="fill" />{/snippet}
{#snippet alignLeftIcon()}<AlignLeftIcon size={16} weight="bold" />{/snippet}
{#snippet alignCenterIcon()}<AlignCenterHorizontalIcon size={16} weight="bold" />{/snippet}
{#snippet alignRightIcon()}<AlignRightIcon size={16} weight="bold" />{/snippet}
