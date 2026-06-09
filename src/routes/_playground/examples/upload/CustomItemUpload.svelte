<script lang="ts">
	import { Upload, Button } from 'sveltastic-ui';
	import { FileTextIcon, ImageIcon, FilePdfIcon, TrashIcon } from 'phosphor-svelte';

	let files = $state<File[]>([]);

	function customGlyph(file: File) {
		if (file.type.startsWith('image/')) return ImageIcon;
		if (file.type === 'application/pdf') return FilePdfIcon;
		return FileTextIcon;
	}

	function formatSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
		if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
	}
</script>

<Upload.Root bind:files multiple color="dark" variant="border">
	<Upload.List>
		{#each files as file (file.name + file.size + file.lastModified)}
			<Upload.Item {file}>
				{@const Glyph = customGlyph(file)}
				<div class="row">
					<div class="row__icon">
						<Glyph size={22} weight="duotone" />
					</div>
					<div class="row__main">
						<span class="row__name">{file.name}</span>
						<span class="row__meta">
							<span>{file.type || 'file'}</span>
							<span class="row__sep">·</span>
							<span>{formatSize(file.size)}</span>
						</span>
					</div>
					<Button.Root
						color="danger"
						variant="flat"
						size="small"
						iconOnly
						onclick={() => (files = files.filter((f) => f !== file))}
					>
						<TrashIcon size={14} weight="bold" />
					</Button.Root>
				</div>
			</Upload.Item>
		{/each}
	</Upload.List>
	<Upload.Dropzone label="Drop documents" sublabel="any layout you want" />
	<Upload.Footer />
</Upload.Root>

<style>
	.row {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 12px;
	}
	.row__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 8px;
		background: rgb(var(--dark) / 0.08);
		color: rgb(var(--dark));
	}
	.row__main {
		display: flex;
		flex-direction: column;
		min-width: 0;
		gap: 2px;
		flex: 1;
	}
	.row__name {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.row__meta {
		display: inline-flex;
		gap: 6px;
		font-size: 0.75rem;
		opacity: 0.6;
		font-variant-numeric: tabular-nums;
	}
	.row__sep {
		opacity: 0.5;
	}
</style>
