<script lang="ts">
	import { Switch } from 'sveltastic-ui';
	import { CheckIcon, XIcon } from 'phosphor-svelte';

	let checked = $state(true);
</script>

<!-- compound: place a <Switch.Thumb> as a child to render content inside the knob -->
<Switch.Root bind:checked size="large" ariaLabel="Compound thumb">
	<Switch.Thumb>
		{#if checked}
			<CheckIcon size={14} weight="bold" />
		{:else}
			<XIcon size={14} weight="bold" />
		{/if}
	</Switch.Thumb>
</Switch.Root>
