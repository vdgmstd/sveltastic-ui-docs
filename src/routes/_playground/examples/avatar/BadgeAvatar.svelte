<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { Bell } from 'phosphor-svelte';
</script>

<div class="row">
	<Avatar badge badgePosition="top-right" color="primary" text="TR" />
	<Avatar badge badgePosition="top-left" color="primary" text="TL" />
	<Avatar badge badgePosition="bottom-right" color="primary" text="BR" />
	<Avatar badge badgePosition="bottom-left" color="primary" text="BL" />
	<Avatar badge badgeColor="danger" shape="circle">
		<img src="/avatars/5.jpg" alt="" />
	</Avatar>
	<Avatar badge badgeColor="success" shape="circle">
		<img src="/avatars/6.jpg" alt="" />
	</Avatar>
	<Avatar badge badgeColor="#ff66cc" shape="circle">
		<img src="/avatars/7.jpg" alt="" />
	</Avatar>
</div>
<div class="row">
	<Avatar badgeColor="danger" shape="circle" color="primary" text="JD">
		{#snippet badgeContent()}
			<Bell size={10} weight="fill" />
		{/snippet}
	</Avatar>
	<Avatar badgeColor="success" shape="circle" color="primary" text="JD">
		{#snippet badgeContent()}
			<span>12</span>
		{/snippet}
	</Avatar>
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
