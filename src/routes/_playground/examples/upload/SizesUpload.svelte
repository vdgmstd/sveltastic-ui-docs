<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let xl = $state<File[]>([]);
	let small = $state<File[]>([]);
</script>

<Upload.Root bind:files={xl} size="xl" color="primary">
	<Upload.List />
	<Upload.Dropzone label="XL" sublabel="extra large" />
	<Upload.Footer />
</Upload.Root>
<Upload.Root bind:files={small} size="small" color="success">
	<Upload.List />
	<Upload.Dropzone label="Small" sublabel="compact" />
	<Upload.Footer />
</Upload.Root>
