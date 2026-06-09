<script lang="ts">
	import { Upload } from 'sveltastic-ui';
	import { CloudArrowUpIcon } from 'phosphor-svelte';

	let files = $state<File[]>([]);
</script>

<Upload.Root bind:files buttonOnly color="primary">
	<Upload.Dropzone ariaLabel="Upload a file">
		{#snippet child({ props })}
			<button {...props} class="custom">
				<CloudArrowUpIcon size={18} weight="bold" />
				<span>Upload via custom button</span>
			</button>
		{/snippet}
	</Upload.Dropzone>
</Upload.Root>
<p class="muted">{files.length} selected</p>

<style>
	.custom {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 9px 16px;
		border: 0;
		border-radius: 10px;
		background: rgb(var(--primary));
		color: white;
		font: inherit;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
	}
	.custom:focus-visible {
		outline: 2px solid rgb(var(--primary) / 0.6);
		outline-offset: 2px;
	}
	.muted {
		font-size: 0.85rem;
		opacity: 0.65;
		margin: 0.5rem 0 0;
	}
</style>
