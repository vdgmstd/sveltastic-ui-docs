<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
</script>

<!-- duration overrides the 5s default — here the toast lives for 8s. -->
<Button.Root
	color="warning"
	onclick={() => notify({ title: 'Slow burn', text: 'Auto-dismisses after 8 seconds.', color: 'warning', duration: 8000 })}
>
	8s duration toast
</Button.Root>
