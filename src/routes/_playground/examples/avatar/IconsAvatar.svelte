<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { PencilSimple, Trash } from 'phosphor-svelte';
</script>

<Avatar shape="circle" color="primary" text="JD">
	{#snippet icons()}
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	{/snippet}
</Avatar>
<Avatar shape="circle">
	<img src="/avatars/4.jpg" alt="" />
	{#snippet icons()}
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	{/snippet}
</Avatar>
<Avatar shape="circle" color="success" text="AM" iconsPlacement="horizontal">
	{#snippet icons()}
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	{/snippet}
</Avatar>
<Avatar shape="circle" iconsPlacement="horizontal">
	<img src="/avatars/5.jpg" alt="" />
	{#snippet icons()}
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	{/snippet}
</Avatar>
