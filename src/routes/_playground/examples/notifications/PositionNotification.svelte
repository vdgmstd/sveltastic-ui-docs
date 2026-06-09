<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
	import type { NotificationPosition } from 'sveltastic-ui';

	const positions: NotificationPosition[] = [
		'top-right',
		'top-left',
		'top-center',
		'bottom-right',
		'bottom-left',
		'bottom-center'
	];
</script>

<!-- position anchors the toast to one of six screen corners / edges. -->
{#each positions as position (position)}
	<Button.Root
		variant="flat"
		onclick={() => notify({ title: position, text: 'Anchored here.', position })}
	>
		{position}
	</Button.Root>
{/each}
