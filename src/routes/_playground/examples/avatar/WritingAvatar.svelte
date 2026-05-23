<script lang="ts">
	import { Avatar } from 'sveltastic-ui';

	let writingOn = $state(true);
</script>

<Avatar writing={writingOn} badgeColor="primary" shape="circle">
	<img src="/avatars/8.jpg" alt="" />
</Avatar>
<Avatar writing={writingOn} badgeColor="success" shape="circle" color="primary" text="JD" />
<Avatar
	writing={writingOn}
	badgeColor="warning"
	shape="circle"
	color="danger"
	text="AB"
	badgePosition="top-right"
/>
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
