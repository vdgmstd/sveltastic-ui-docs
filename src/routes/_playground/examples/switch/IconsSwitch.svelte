<script lang="ts">
	import { Switch } from 'sveltastic-ui';
	import { CheckIcon, XIcon, BellIcon } from 'phosphor-svelte';

	let withIcons = $state(true);
	let bell = $state(false);
</script>

<Switch.Root bind:checked={withIcons} color="success" ariaLabel="Inline icons">
	<Switch.Thumb />
	<Switch.Icon state="on"><CheckIcon size={12} weight="bold" /></Switch.Icon>
	<Switch.Icon state="off"><XIcon size={12} weight="bold" /></Switch.Icon>
</Switch.Root>
<Switch.Root bind:checked={bell} size="large" ariaLabel="Knob icon">
	<Switch.Thumb><BellIcon size={14} weight="fill" /></Switch.Thumb>
</Switch.Root>
