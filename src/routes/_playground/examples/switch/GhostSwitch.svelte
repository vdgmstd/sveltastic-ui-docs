<script lang="ts">
	import { Switch } from 'sveltastic-ui';
	import { MoonIcon, SunIcon } from 'phosphor-svelte';

	let theme = $state(true);
</script>

<Switch bind:checked={theme} ghostKnob size="large">
	{#snippet knob()}
		{#if theme}
			<MoonIcon size={18} weight="fill" />
		{:else}
			<SunIcon size={18} weight="fill" />
		{/if}
	{/snippet}
</Switch>
