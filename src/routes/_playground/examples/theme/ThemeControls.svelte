<script lang="ts">
	import { theme } from 'sveltastic-ui';
</script>

<button type="button" onclick={() => theme.toggleTheme()}>theme.toggleTheme()</button>
<button type="button" onclick={() => theme.setTheme('light')}>setTheme('light')</button>
<button type="button" onclick={() => theme.setTheme('dark')}>setTheme('dark')</button>
<button type="button" onclick={() => theme.toggleRtl()}>theme.toggleRtl()</button>

<style>
	button {
		appearance: none;
		border: 1px solid rgb(var(--gray-3));
		background: rgb(var(--gray-1));
		color: inherit;
		font: inherit;
		font-size: 0.78rem;
		padding: 0.45rem 0.7rem;
		border-radius: 8px;
		cursor: pointer;
		font-family: var(--font-mono);
	}
	button:hover { background: rgb(var(--gray-2)); }
</style>
