<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<Upload
	bind:files
	multiple
	maxFiles={5}
	clearable
	color="success"
	label="Drop files"
	hint="Up to 5 files"
/>
