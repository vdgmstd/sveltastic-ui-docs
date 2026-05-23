<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { Heart, PaperPlaneTilt } from 'phosphor-svelte';
</script>

<Button iconOnly aria-label="Like">
	<Heart size={18} weight="fill" />
</Button>
<Button iconOnly shape="circle" variant="flat" color="danger" aria-label="Like">
	<Heart size={18} weight="fill" />
</Button>
<Button>
	<Heart size={16} weight="fill" />
	Like
</Button>
<Button variant="gradient" color="success">
	Send
	<PaperPlaneTilt size={16} weight="fill" />
</Button>
