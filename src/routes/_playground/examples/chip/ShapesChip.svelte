<script lang="ts">
	import { Chip } from 'sveltastic-ui';
	import { StarIcon, HeartIcon, FireIcon } from 'phosphor-svelte';
</script>

<Chip shape="default">Default</Chip>
<Chip shape="square">Square</Chip>
<Chip shape="circle">C</Chip>
<Chip shape="circle" variant="flat" color="success">
	{#snippet icon()}<StarIcon size={12} weight="fill" />{/snippet}
</Chip>
<Chip shape="circle" variant="border" color="danger">
	{#snippet icon()}<HeartIcon size={12} weight="fill" />{/snippet}
</Chip>
<Chip shape="circle" variant="default" color="warning">
	{#snippet icon()}<FireIcon size={12} weight="fill" />{/snippet}
</Chip>
