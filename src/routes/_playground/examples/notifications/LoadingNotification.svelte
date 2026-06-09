<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
</script>

<!-- loading swaps the icon for a spinner; sticky keeps it until the work resolves. -->
<Button.Root
	color="primary"
	onclick={() => {
		const handle = notify({
			title: 'Working',
			text: 'Crunching numbers…',
			color: 'primary',
			loading: true,
			sticky: true,
			closable: true
		});
		setTimeout(handle.close, 3000);
	}}
>
	Loading toast
</Button.Root>
