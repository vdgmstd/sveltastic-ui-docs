<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { Heart } from 'phosphor-svelte';
</script>

<Button.Root upload>Uploading</Button.Root>
<Button.Root upload variant="border" color="danger">
	<Heart size={16} weight="fill" />
	Uploading
</Button.Root>
<Button.Root upload variant="gradient" color="warning">Uploading</Button.Root>
<Button.Root upload variant="transparent" color="dark">Uploading</Button.Root>
