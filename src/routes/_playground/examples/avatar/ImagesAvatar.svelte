<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { User } from 'phosphor-svelte';
</script>

<Avatar.Root>
	<Avatar.Image src="/avatars/1.jpg" alt="" />
	<Avatar.Fallback>1</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root shape="circle">
	<Avatar.Image src="/avatars/2.jpg" alt="" />
	<Avatar.Fallback>2</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root shape="square">
	<Avatar.Image src="/avatars/3.jpg" alt="" />
	<Avatar.Fallback>3</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root pointer>
	<Avatar.Image src="/avatars/4.jpg" alt="" />
	<Avatar.Fallback>4</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root ariaLabel="User icon">
	<User size={22} weight="fill" />
</Avatar.Root>
