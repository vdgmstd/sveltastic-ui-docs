<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload.Root
	bind:files
	multiple
	clearable
	fullWidth
	color="primary"
	hint="Mixed types — images get thumbnails, others get type icons"
>
	<Upload.List />
	<Upload.Dropzone label="Drop a batch" sublabel="or click to add more" />
	<Upload.Footer />
</Upload.Root>
