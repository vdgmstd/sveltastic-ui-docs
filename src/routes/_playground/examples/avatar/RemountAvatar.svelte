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
	<Avatar.Root color="primary" shape="circle"><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
	<Avatar.Root shape="circle">
		<Avatar.Fallback>AM</Avatar.Fallback>
		<Avatar.Badge color="success" />
	</Avatar.Root>
	<Avatar.Root history historyGradient shape="circle">
		<Avatar.Image src="/avatars/6.jpg" alt="" />
		<Avatar.Fallback>6</Avatar.Fallback>
	</Avatar.Root>
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
