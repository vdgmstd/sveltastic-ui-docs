<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
</script>

<div class="row">
	<Avatar.Group max={3}>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/1.jpg" alt="" /><Avatar.Fallback>1</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/2.jpg" alt="" /><Avatar.Fallback>2</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/3.jpg" alt="" /><Avatar.Fallback>3</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/4.jpg" alt="" /><Avatar.Fallback>4</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/5.jpg" alt="" /><Avatar.Fallback>5</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/6.jpg" alt="" /><Avatar.Fallback>6</Avatar.Fallback></Avatar.Root>
	</Avatar.Group>
</div>
<div class="row">
	<Avatar.Group max={4}>
		<Avatar.Root shape="circle" color="primary"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle" color="success"><Avatar.Fallback>AM</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle" color="danger"><Avatar.Fallback>KP</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle" color="warning"><Avatar.Fallback>LV</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle" color="dark"><Avatar.Fallback>SR</Avatar.Fallback></Avatar.Root>
	</Avatar.Group>
</div>
<div class="row">
	<Avatar.Group float>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/7.jpg" alt="" /><Avatar.Fallback>7</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/8.jpg" alt="" /><Avatar.Fallback>8</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/9.jpg" alt="" /><Avatar.Fallback>9</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="circle"><Avatar.Image src="/avatars/10.jpg" alt="" /><Avatar.Fallback>10</Avatar.Fallback></Avatar.Root>
	</Avatar.Group>
</div>
<div class="row">
	<Avatar.Group>
		<Avatar.Root shape="square"><Avatar.Image src="/avatars/1.jpg" alt="" /><Avatar.Fallback>1</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="square"><Avatar.Image src="/avatars/3.jpg" alt="" /><Avatar.Fallback>3</Avatar.Fallback></Avatar.Root>
		<Avatar.Root shape="square"><Avatar.Image src="/avatars/5.jpg" alt="" /><Avatar.Fallback>5</Avatar.Fallback></Avatar.Root>
	</Avatar.Group>
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
