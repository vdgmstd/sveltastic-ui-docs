<script lang="ts">
	import { Chip } from 'sveltastic-ui';
	import { TagIcon, UserIcon, SealCheckIcon, StarIcon } from 'phosphor-svelte';
</script>

<Chip.Root variant="flat" color="primary">
	<Chip.Icon><TagIcon size={12} weight="fill" /></Chip.Icon>
	Tag
</Chip.Root>
<Chip.Root variant="border" color="success">
	<Chip.Icon><UserIcon size={12} weight="fill" /></Chip.Icon>
	User
</Chip.Root>
<Chip.Root variant="gradient" color="warning">
	<Chip.Icon><SealCheckIcon size={12} weight="fill" /></Chip.Icon>
	Verified
</Chip.Root>
<Chip.Root variant="shadow">
	<Chip.Icon><StarIcon size={12} weight="fill" /></Chip.Icon>
	Featured
</Chip.Root>
