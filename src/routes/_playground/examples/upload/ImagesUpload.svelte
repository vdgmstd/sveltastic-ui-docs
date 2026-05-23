<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload
	bind:files
	multiple
	accept="image/*"
	maxSize={5 * 1024 * 1024}
	clearable
	color="warning"
	label="Drop images"
	hint="PNG / JPG, up to 5 MB each"
/>
