<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload.Root bind:files multiple maxFiles={5} clearable color="success" hint="Up to 5 files">
	<Upload.List />
	<Upload.Dropzone label="Drop files" />
	<Upload.Footer />
</Upload.Root>
