<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	let count = $state(0);
</script>

<Chip.Root onclick={() => count++}>Click me ({count})</Chip.Root>
<Chip.Root variant="border" color="success" onclick={() => count++}>Click me</Chip.Root>
<Chip.Root variant="gradient" color="warning" onclick={() => count++}>Click me</Chip.Root>
<Chip.Root variant="shadow" onclick={() => count++}>Click me</Chip.Root>
