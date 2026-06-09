<script lang="ts">
	import { Upload, type UploadError } from 'sveltastic-ui';

	let files = $state<File[]>([]);
	let errorMessage = $state('');

	function formatKb(bytes: number): string {
		return `${Math.round(bytes / 1024)} KB`;
	}

	function handleErrors(errs: UploadError[]): void {
		const first = errs[0];
		if (!first) return;
		if (first.reason === 'size') {
			errorMessage = `${first.file.name} is ${formatKb(first.file.size)} — too big`;
		} else if (first.reason === 'type') {
			errorMessage = `${first.file.name} — wrong file type`;
		} else {
			errorMessage = `Maximum ${first.max ?? 0} files allowed`;
		}
	}

	$effect(() => {
		void files;
		errorMessage = '';
	});
</script>

<Upload.Root
	bind:files
	multiple
	accept="image/*"
	maxSize={100 * 1024}
	maxFiles={3}
	color="primary"
	hint="Images only, up to 3 files, each under 100 KB"
	error={errorMessage || undefined}
	onerror={handleErrors}
>
	<Upload.List />
	<Upload.Dropzone label="Drop images" sublabel="under 100 KB" />
	<Upload.Footer />
</Upload.Root>
