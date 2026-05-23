<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';

	let selected = $state<string | undefined>('blue');
</script>

<List role="listbox" bind:selected>
	<ListItem value="red" color="danger">Red</ListItem>
	<ListItem value="blue" color="primary">Blue</ListItem>
	<ListItem value="green" color="success">Green</ListItem>
	<ListItem value="yellow" color="warning">Yellow</ListItem>
</List>
<p class="hint">Selected: <code>{selected ?? '—'}</code></p>

<style>
	.hint {
		margin: 0.5rem 0 0;
		font-size: 0.78rem;
		opacity: 0.65;
	}
	.hint code {
		background: rgb(var(--gray-3));
		padding: 1px 6px;
		border-radius: 6px;
		font-size: 0.78rem;
	}
</style>
