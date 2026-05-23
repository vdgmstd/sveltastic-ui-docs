<script lang="ts">
	import { Avatar } from 'sveltastic-ui';

	let toggleCount = $state(0);
	let visible = $state(true);

	function remount(): void {
		visible = false;
		queueMicrotask(() => {
			visible = true;
			toggleCount += 1;
		});
	}
</script>

{#if visible}
	<Avatar color="primary" text="JD" shape="circle" />
	<Avatar badge badgeColor="success" text="AM" shape="circle" />
	<Avatar history historyGradient shape="circle">
		<img src="/avatars/6.jpg" alt="" />
	</Avatar>
{/if}
<button type="button" class="remount" onclick={remount}>
	Remount ({toggleCount})
</button>

<style>
	.remount {
		padding: 0.4rem 0.75rem;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 8px;
		background: transparent;
		color: inherit;
		font: inherit;
		font-size: 0.8rem;
		cursor: pointer;
	}
	.remount:hover {
		background: rgb(var(--gray-2));
	}
</style>
