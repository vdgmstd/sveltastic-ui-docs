<script lang="ts">
	import { Upload } from 'sveltastic-ui';
</script>

<Upload.Root disabled>
	<Upload.List />
	<Upload.Dropzone label="Disabled" sublabel="not available" />
	<Upload.Footer />
</Upload.Root>
