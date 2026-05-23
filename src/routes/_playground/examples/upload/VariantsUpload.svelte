<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let flat = $state<File[]>([]);
	let bordered = $state<File[]>([]);
</script>

<Upload bind:files={flat} variant="flat" color="primary" label="Flat" sublabel="click to browse" />
<Upload bind:files={bordered} variant="border" color="dark" label="Border" sublabel="click to browse" />
