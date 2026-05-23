<script lang="ts">
	import { Chip } from 'sveltastic-ui';
	import { TagIcon, UserIcon, SealCheckIcon, StarIcon } from 'phosphor-svelte';
</script>

<Chip variant="flat" color="primary">
	{#snippet icon()}<TagIcon size={12} weight="fill" />{/snippet}
	Tag
</Chip>
<Chip variant="border" color="success">
	{#snippet icon()}<UserIcon size={12} weight="fill" />{/snippet}
	User
</Chip>
<Chip variant="gradient" color="warning">
	{#snippet icon()}<SealCheckIcon size={12} weight="fill" />{/snippet}
	Verified
</Chip>
<Chip variant="shadow">
	{#snippet icon()}<StarIcon size={12} weight="fill" />{/snippet}
	Featured
</Chip>
