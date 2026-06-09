<script lang="ts">
	import { Avatar, type AvatarLoadingStatus } from 'sveltastic-ui';

	let okStatus = $state<AvatarLoadingStatus>('loading');
	let failStatus = $state<AvatarLoadingStatus>('loading');
	let lastEvent = $state('—');
</script>

<Avatar.Root
	shape="circle"
	bind:loadingStatus={okStatus}
	onLoadingStatusChange={(s) => (lastEvent = `ok → ${s}`)}
>
	<Avatar.Image src="/avatars/1.jpg" alt="" />
	<Avatar.Fallback>1</Avatar.Fallback>
</Avatar.Root>

<Avatar.Root
	shape="circle"
	color="danger"
	bind:loadingStatus={failStatus}
	onLoadingStatusChange={(s) => (lastEvent = `fail → ${s}`)}
>
	<Avatar.Image src="/avatars/does-not-exist.jpg" alt="" />
	<Avatar.Fallback>NA</Avatar.Fallback>
</Avatar.Root>

<div class="status" role="status">
	<span>image: <code>{okStatus}</code></span>
	<span>broken: <code>{failStatus}</code></span>
	<span>last: <code>{lastEvent}</code></span>
</div>

<style>
	.status {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 0.8rem;
		opacity: 0.85;
	}
	.status code {
		font-family: var(--font-mono);
	}
</style>
