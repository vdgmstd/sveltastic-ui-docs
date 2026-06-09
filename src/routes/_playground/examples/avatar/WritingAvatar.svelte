<script lang="ts">
	import { Avatar } from 'sveltastic-ui';

	let writingOn = $state(true);
</script>

<Avatar.Root shape="circle">
	<Avatar.Image src="/avatars/8.jpg" alt="" />
	<Avatar.Fallback>8</Avatar.Fallback>
	{#if writingOn}<Avatar.Badge writing color="primary" />{/if}
</Avatar.Root>
<Avatar.Root shape="circle" color="primary">
	<Avatar.Fallback>JD</Avatar.Fallback>
	{#if writingOn}<Avatar.Badge writing color="success" />{/if}
</Avatar.Root>
<Avatar.Root shape="circle" color="danger">
	<Avatar.Fallback>AB</Avatar.Fallback>
	{#if writingOn}<Avatar.Badge writing color="warning" position="top-right" />{/if}
</Avatar.Root>
<label class="toggle">
	<input type="checkbox" bind:checked={writingOn} />
	Typing
</label>

<style>
	.toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
	}
</style>
