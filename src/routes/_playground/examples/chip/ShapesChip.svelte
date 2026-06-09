<script lang="ts">
	import { Chip } from 'sveltastic-ui';
	import { StarIcon, HeartIcon, FireIcon } from 'phosphor-svelte';
</script>

<Chip.Root shape="default">Default</Chip.Root>
<Chip.Root shape="square">Square</Chip.Root>
<Chip.Root shape="circle">C</Chip.Root>
<Chip.Root shape="circle" variant="flat" color="success">
	<Chip.Icon><StarIcon size={12} weight="fill" /></Chip.Icon>
</Chip.Root>
<Chip.Root shape="circle" variant="border" color="danger">
	<Chip.Icon><HeartIcon size={12} weight="fill" /></Chip.Icon>
</Chip.Root>
<Chip.Root shape="circle" variant="default" color="warning">
	<Chip.Icon><FireIcon size={12} weight="fill" /></Chip.Icon>
</Chip.Root>
