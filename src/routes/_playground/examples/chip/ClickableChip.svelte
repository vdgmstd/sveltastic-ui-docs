<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	let count = $state(0);
</script>

<Chip onclick={() => count++}>Click me ({count})</Chip>
<Chip variant="border" color="success" onclick={() => count++}>Click me</Chip>
<Chip variant="gradient" color="warning" onclick={() => count++}>Click me</Chip>
<Chip variant="shadow" onclick={() => count++}>Click me</Chip>
