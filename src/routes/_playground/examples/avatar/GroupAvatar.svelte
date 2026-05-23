<script lang="ts">
	import { Avatar, AvatarGroup } from 'sveltastic-ui';
</script>

<div class="row">
	<AvatarGroup max={3}>
		<Avatar shape="circle"><img src="/avatars/1.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/2.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/3.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/4.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/5.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/6.jpg" alt="" /></Avatar>
	</AvatarGroup>
</div>
<div class="row">
	<AvatarGroup max={4}>
		<Avatar shape="circle" color="primary" text="JD" />
		<Avatar shape="circle" color="success" text="AM" />
		<Avatar shape="circle" color="danger" text="KP" />
		<Avatar shape="circle" color="warning" text="LV" />
		<Avatar shape="circle" color="dark" text="SR" />
	</AvatarGroup>
</div>
<div class="row">
	<AvatarGroup float>
		<Avatar shape="circle"><img src="/avatars/7.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/8.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/9.jpg" alt="" /></Avatar>
		<Avatar shape="circle"><img src="/avatars/10.jpg" alt="" /></Avatar>
	</AvatarGroup>
</div>
<div class="row">
	<AvatarGroup>
		<Avatar shape="square"><img src="/avatars/1.jpg" alt="" /></Avatar>
		<Avatar shape="square"><img src="/avatars/3.jpg" alt="" /></Avatar>
		<Avatar shape="square"><img src="/avatars/5.jpg" alt="" /></Avatar>
	</AvatarGroup>
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
