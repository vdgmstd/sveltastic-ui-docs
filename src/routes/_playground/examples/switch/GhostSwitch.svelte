<script lang="ts">
	import { Switch } from 'sveltastic-ui';
	import { MoonIcon, SunIcon } from 'phosphor-svelte';

	let theme = $state(true);
</script>

<Switch.Root bind:checked={theme} ghostKnob size="large" ariaLabel="Toggle theme">
	<Switch.Thumb>
		{#if theme}
			<MoonIcon size={18} weight="fill" />
		{:else}
			<SunIcon size={18} weight="fill" />
		{/if}
	</Switch.Thumb>
</Switch.Root>
