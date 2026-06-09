<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { Heart, PaperPlaneTilt } from 'phosphor-svelte';
</script>

<Button.Root iconOnly aria-label="Like">
	<Heart size={18} weight="fill" />
</Button.Root>
<Button.Root iconOnly shape="circle" variant="flat" color="danger" aria-label="Like">
	<Heart size={18} weight="fill" />
</Button.Root>
<Button.Root>
	<Heart size={16} weight="fill" />
	Like
</Button.Root>
<Button.Root variant="gradient" color="success">
	Send
	<PaperPlaneTilt size={16} weight="fill" />
</Button.Root>
