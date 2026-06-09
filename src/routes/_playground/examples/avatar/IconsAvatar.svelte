<script lang="ts">
	import { Avatar } from 'sveltastic-ui';
	import { PencilSimple, Trash } from 'phosphor-svelte';
</script>

<Avatar.Root shape="circle" color="primary">
	<Avatar.Fallback>JD</Avatar.Fallback>
	<Avatar.Icons>
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	</Avatar.Icons>
</Avatar.Root>
<Avatar.Root shape="circle">
	<Avatar.Image src="/avatars/4.jpg" alt="" />
	<Avatar.Fallback>4</Avatar.Fallback>
	<Avatar.Icons>
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	</Avatar.Icons>
</Avatar.Root>
<Avatar.Root shape="circle" color="success">
	<Avatar.Fallback>AM</Avatar.Fallback>
	<Avatar.Icons placement="horizontal">
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	</Avatar.Icons>
</Avatar.Root>
<Avatar.Root shape="circle">
	<Avatar.Image src="/avatars/5.jpg" alt="" />
	<Avatar.Fallback>5</Avatar.Fallback>
	<Avatar.Icons placement="horizontal">
		<PencilSimple weight="fill" />
		<Trash weight="fill" />
	</Avatar.Icons>
</Avatar.Root>
