<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload.Root
	bind:files
	multiple
	accept="image/*"
	maxSize={5 * 1024 * 1024}
	clearable
	color="warning"
	hint="PNG / JPG, up to 5 MB each"
>
	<Upload.List />
	<Upload.Dropzone label="Drop images" />
	<Upload.Footer />
</Upload.Root>
