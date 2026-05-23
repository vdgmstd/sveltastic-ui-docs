<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload
	bind:files
	multiple
	clearable
	fullWidth
	color="primary"
	label="Drop a batch"
	sublabel="or click to add more"
	hint="Mixed types — images get thumbnails, others get type icons"
/>
