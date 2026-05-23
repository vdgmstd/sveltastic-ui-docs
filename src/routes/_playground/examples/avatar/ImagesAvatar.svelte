<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { User } from 'phosphor-svelte';
</script>

<Avatar>
	<img src="/avatars/1.jpg" alt="" />
</Avatar>
<Avatar shape="circle">
	<img src="/avatars/2.jpg" alt="" />
</Avatar>
<Avatar shape="square">
	<img src="/avatars/3.jpg" alt="" />
</Avatar>
<Avatar pointer>
	<img src="/avatars/4.jpg" alt="" />
</Avatar>
<Avatar>
	<User size={22} weight="fill" />
</Avatar>
