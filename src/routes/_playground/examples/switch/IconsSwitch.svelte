<script lang="ts">
	import { Switch } from 'sveltastic-ui';
	import { CheckIcon, XIcon, BellIcon } from 'phosphor-svelte';

	let withIcons = $state(true);
	let bell = $state(false);
</script>

<Switch bind:checked={withIcons} color="success">
	{#snippet iconOn()}<CheckIcon size={12} weight="bold" />{/snippet}
	{#snippet iconOff()}<XIcon size={12} weight="bold" />{/snippet}
</Switch>
<Switch bind:checked={bell} size="large">
	{#snippet knob()}<BellIcon size={14} weight="fill" />{/snippet}
</Switch>
