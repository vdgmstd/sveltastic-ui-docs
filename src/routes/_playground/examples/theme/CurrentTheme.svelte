<script lang="ts">
	import { theme } from 'sveltastic-ui';
</script>

<table class="vars">
	<tbody>
		<tr><td><code>theme.theme</code></td><td><code>{theme.theme}</code></td></tr>
		<tr><td><code>theme.rtl</code></td><td><code>{String(theme.rtl)}</code></td></tr>
	</tbody>
</table>

<style>
	.vars {
		width: 100%;
		max-width: 480px;
		border-collapse: collapse;
		font-size: 0.85rem;
	}
	.vars td {
		padding: 0.45rem 0.6rem;
		border-bottom: 1px solid rgb(var(--gray-3));
	}
	.vars code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		background: rgb(var(--gray-2));
		padding: 0.05rem 0.35rem;
		border-radius: 4px;
	}
</style>
