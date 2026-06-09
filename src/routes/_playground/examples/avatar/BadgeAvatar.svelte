<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { Bell } from 'phosphor-svelte';
</script>

<div class="row">
	<Avatar.Root color="primary">
		<Avatar.Fallback>TR</Avatar.Fallback>
		<Avatar.Badge position="top-right" />
	</Avatar.Root>
	<Avatar.Root color="primary">
		<Avatar.Fallback>TL</Avatar.Fallback>
		<Avatar.Badge position="top-left" />
	</Avatar.Root>
	<Avatar.Root color="primary">
		<Avatar.Fallback>BR</Avatar.Fallback>
		<Avatar.Badge position="bottom-right" />
	</Avatar.Root>
	<Avatar.Root color="primary">
		<Avatar.Fallback>BL</Avatar.Fallback>
		<Avatar.Badge position="bottom-left" />
	</Avatar.Root>
	<Avatar.Root shape="circle">
		<Avatar.Image src="/avatars/5.jpg" alt="" />
		<Avatar.Fallback>5</Avatar.Fallback>
		<Avatar.Badge color="danger" />
	</Avatar.Root>
	<Avatar.Root shape="circle">
		<Avatar.Image src="/avatars/6.jpg" alt="" />
		<Avatar.Fallback>6</Avatar.Fallback>
		<Avatar.Badge color="success" />
	</Avatar.Root>
	<Avatar.Root shape="circle">
		<Avatar.Image src="/avatars/7.jpg" alt="" />
		<Avatar.Fallback>7</Avatar.Fallback>
		<Avatar.Badge color="#ff66cc" />
	</Avatar.Root>
</div>
<div class="row">
	<Avatar.Root shape="circle" color="primary">
		<Avatar.Fallback>JD</Avatar.Fallback>
		<Avatar.Badge color="danger">
			<Bell size={10} weight="fill" />
		</Avatar.Badge>
	</Avatar.Root>
	<Avatar.Root shape="circle" color="primary">
		<Avatar.Fallback>JD</Avatar.Fallback>
		<Avatar.Badge color="success">
			<span>12</span>
		</Avatar.Badge>
	</Avatar.Root>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}
</style>
