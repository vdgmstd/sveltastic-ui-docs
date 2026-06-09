<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let flat = $state<File[]>([]);
	let bordered = $state<File[]>([]);
</script>

<Upload.Root bind:files={flat} variant="flat" color="primary">
	<Upload.List />
	<Upload.Dropzone label="Flat" sublabel="click to browse" />
	<Upload.Footer />
</Upload.Root>
<Upload.Root bind:files={bordered} variant="border" color="dark">
	<Upload.List />
	<Upload.Dropzone label="Border" sublabel="click to browse" />
	<Upload.Footer />
</Upload.Root>
