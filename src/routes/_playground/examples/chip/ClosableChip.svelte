<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	let frontend = $state(true);
	let backend = $state(true);
	let design = $state(true);
</script>

{#if frontend}
	<Chip.Root variant="flat" color="primary">
		Frontend
		<Chip.Close onclose={() => (frontend = false)} />
	</Chip.Root>
{/if}
{#if backend}
	<Chip.Root variant="flat" color="success">
		Backend
		<Chip.Close onclose={() => (backend = false)} />
	</Chip.Root>
{/if}
{#if design}
	<Chip.Root variant="flat" color="warning">
		Design
		<Chip.Close onclose={() => (design = false)} />
	</Chip.Root>
{/if}
<Chip.Root variant="border" color="primary" onclick={() => {}}>
	Click + close
	<Chip.Close onclose={() => {}} />
</Chip.Root>
