<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
</script>

<Avatar.Root history color="danger" shape="circle">
	<Avatar.Image src="/avatars/9.jpg" alt="" />
	<Avatar.Fallback>9</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root history color="warning" shape="circle">
	<Avatar.Image src="/avatars/2.jpg" alt="" />
	<Avatar.Fallback>2</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root history historyGradient shape="circle">
	<Avatar.Image src="/avatars/4.jpg" alt="" />
	<Avatar.Fallback>4</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root history historyGradient shape="circle" size={64}>
	<Avatar.Image src="/avatars/1.jpg" alt="" />
	<Avatar.Fallback>1</Avatar.Fallback>
</Avatar.Root>
