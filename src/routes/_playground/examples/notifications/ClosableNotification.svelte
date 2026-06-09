<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
</script>

<!-- closable adds an explicit dismiss button; the toast still auto-dismisses. -->
<Button.Root
	color="success"
	onclick={() => notify({ title: 'Uploaded', text: 'Dismiss me, or wait 5s.', color: 'success', closable: true })}
>
	Closable toast
</Button.Root>
