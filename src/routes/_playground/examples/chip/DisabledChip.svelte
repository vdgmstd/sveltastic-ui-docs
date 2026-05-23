<script lang="ts">
	import { Chip } from 'sveltastic-ui';
</script>

<Chip disabled>Default</Chip>
<Chip variant="flat" color="danger" disabled closable onclose={() => {}}>Flat</Chip>
<Chip variant="border" color="dark" disabled onclick={() => {}}>Click me</Chip>
<Chip variant="shadow" disabled>Shadow</Chip>
