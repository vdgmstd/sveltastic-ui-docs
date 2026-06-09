<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
	import type { Color } from 'sveltastic-ui';

	const colors: Color[] = ['primary', 'success', 'danger', 'warning', 'dark'];
</script>

<!-- color tints the toast; it auto-dismisses after the default 5s. -->
{#each colors as color (color)}
	<Button.Root {color} onclick={() => notify({ title: 'Saved', text: 'Your changes are live.', color })}>
		{color}
	</Button.Root>
{/each}
