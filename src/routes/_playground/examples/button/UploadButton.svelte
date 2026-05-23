<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { Heart } from 'phosphor-svelte';
</script>

<Button upload>Uploading</Button>
<Button upload variant="border" color="danger">
	<Heart size={16} weight="fill" />
	Uploading
</Button>
<Button upload variant="gradient" color="warning">Uploading</Button>
<Button upload variant="transparent" color="dark">Uploading</Button>
