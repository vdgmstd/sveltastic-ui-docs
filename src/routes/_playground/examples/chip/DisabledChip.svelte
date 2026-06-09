<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<Chip.Root disabled>Default</Chip.Root>
<Chip.Root variant="flat" color="danger" disabled>Flat<Chip.Close onclose={() => {}} /></Chip.Root>
<Chip.Root variant="border" color="dark" disabled onclick={() => {}}>Click me</Chip.Root>
<Chip.Root variant="shadow" disabled>Shadow</Chip.Root>
