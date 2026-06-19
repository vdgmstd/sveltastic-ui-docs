<script lang="ts">
	import { Toggle } from 'sveltastic-ui';
	import { TextB } from 'phosphor-svelte';

	let pressed = $state(false);
</script>

<Toggle.Root bind:pressed ariaLabel="Bold">
	<TextB size={18} weight="bold" /> Bold
</Toggle.Root>
<span class="muted">→ {pressed ? 'on' : 'off'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
