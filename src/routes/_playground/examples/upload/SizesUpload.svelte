<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let xl = $state<File[]>([]);
	let small = $state<File[]>([]);
</script>

<Upload bind:files={xl} size="xl" color="primary" label="XL" sublabel="extra large" />
<Upload bind:files={small} size="small" color="success" label="Small" sublabel="compact" />
