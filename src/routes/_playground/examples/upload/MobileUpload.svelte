<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<div class="frame">
	<Upload.Root bind:files multiple clearable color="primary">
		<Upload.List />
		<Upload.Dropzone label="Mobile" sublabel="add more" />
		<Upload.Footer />
	</Upload.Root>
</div>

<style>
	.frame {
		width: 280px;
	}
</style>
