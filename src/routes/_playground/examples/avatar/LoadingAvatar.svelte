<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
</script>

<Avatar.Root loading color="primary"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
<Avatar.Root loading shape="circle">
	<Avatar.Image src="/avatars/3.jpg" alt="" />
	<Avatar.Fallback>3</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root loading shape="square" color="warning"><Avatar.Fallback>WA</Avatar.Fallback></Avatar.Root>
