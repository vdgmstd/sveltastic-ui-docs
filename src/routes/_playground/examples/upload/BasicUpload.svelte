<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload.Root bind:files>
	<Upload.List />
	<Upload.Dropzone label="Drop a file" />
	<Upload.Footer />
</Upload.Root>
