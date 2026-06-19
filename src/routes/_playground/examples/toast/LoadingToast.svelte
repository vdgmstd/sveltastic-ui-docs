<script lang="ts">
	import { Button, toast } from 'sveltastic-ui';

	function run() {
		const handle = toast({ title: 'Uploading…', color: 'primary', loading: true, sticky: true });
		setTimeout(() => {
			handle.close();
			toast({ title: 'Uploaded', description: 'All files are in.', color: 'success' });
		}, 2000);
	}
</script>

<Button.Root onclick={run}>Upload (loading → done)</Button.Root>
