<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
</script>

<!-- sticky disables auto-dismiss — pair it with closable so it can still be removed. -->
<Button.Root
	color="dark"
	onclick={() => notify({ title: 'Pinned', text: 'I stay until you close me.', color: 'dark', sticky: true, closable: true })}
>
	Sticky toast
</Button.Root>
