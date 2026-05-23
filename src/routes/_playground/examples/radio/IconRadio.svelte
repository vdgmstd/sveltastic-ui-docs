<script lang="ts">
	import { Radio } from 'sveltastic-ui';
	import { StarIcon, HeartIcon, FireIcon, LightningIcon, CrownIcon } from 'phosphor-svelte';

	let withIcon = $state<string | number>('star');
</script>

<Radio bind:group={withIcon} value="star">
	{#snippet icon()}<StarIcon size={10} weight="fill" />{/snippet}
	Star
</Radio>
<Radio bind:group={withIcon} value="heart" color="danger">
	{#snippet icon()}<HeartIcon size={10} weight="fill" />{/snippet}
	Heart
</Radio>
<Radio bind:group={withIcon} value="fire" color="warning">
	{#snippet icon()}<FireIcon size={10} weight="fill" />{/snippet}
	Fire
</Radio>
<Radio bind:group={withIcon} value="lightning" color="success">
	{#snippet icon()}<LightningIcon size={10} weight="fill" />{/snippet}
	Lightning
</Radio>
<Radio bind:group={withIcon} value="crown" color="dark">
	{#snippet icon()}<CrownIcon size={10} weight="fill" />{/snippet}
	Crown
</Radio>
