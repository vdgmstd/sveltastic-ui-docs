<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	let frontend = $state(true);
	let backend = $state(true);
	let design = $state(true);
</script>

{#if frontend}
	<Chip variant="flat" color="primary" closable onclose={() => (frontend = false)}>
		Frontend
	</Chip>
{/if}
{#if backend}
	<Chip variant="flat" color="success" closable onclose={() => (backend = false)}>
		Backend
	</Chip>
{/if}
{#if design}
	<Chip variant="flat" color="warning" closable onclose={() => (design = false)}>
		Design
	</Chip>
{/if}
<Chip variant="border" color="primary" closable onclick={() => {}} onclose={() => {}}>
	Click + close
</Chip>
