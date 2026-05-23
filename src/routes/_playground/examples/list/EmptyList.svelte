<script lang="ts">
	import { List } from 'sveltastic-ui';
</script>

<List items={[] as string[]}>
	{#snippet empty()}Nothing here yet.{/snippet}
</List>
