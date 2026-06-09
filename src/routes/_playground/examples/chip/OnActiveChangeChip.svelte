<script lang="ts">
	import { Chip } from 'sveltastic-ui';

	let active = $state(false);
	let lastValue = $state<boolean | null>(null);
</script>

<Chip.Root variant="flat" color="primary" bind:active onActiveChange={(v) => (lastValue = v)}>
	Notifications
</Chip.Root>
<span class="status">aria-pressed: {active} · last onActiveChange: {lastValue ?? '—'}</span>

<style>
	.status {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
