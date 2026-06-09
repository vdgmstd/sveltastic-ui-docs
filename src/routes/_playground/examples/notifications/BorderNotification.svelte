<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
</script>

<!-- border draws an outline ring instead of the filled tint. -->
<Button.Root
	variant="border"
	color="primary"
	onclick={() => notify({ title: 'Heads up', text: 'Outlined notification.', color: 'primary', border: true })}
>
	Outlined toast
</Button.Root>
