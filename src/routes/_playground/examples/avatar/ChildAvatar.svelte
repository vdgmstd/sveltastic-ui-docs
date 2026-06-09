<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
</script>

<!-- child snippet: receive the merged root props and render your own element (here a link). -->
<Avatar.Root color="primary" shape="circle" pointer>
	{#snippet child({ props })}
		<a href="#avatar" {...props}>
			<Avatar.Fallback>JD</Avatar.Fallback>
		</a>
	{/snippet}
</Avatar.Root>
