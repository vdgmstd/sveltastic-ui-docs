<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload.Root bind:files buttonOnly variant="flat" color="danger">
	<Upload.Dropzone label="Choose files…" />
</Upload.Root>
<p class="muted">{files.length} selected</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.65;
		margin: 0.5rem 0 0;
	}
</style>
