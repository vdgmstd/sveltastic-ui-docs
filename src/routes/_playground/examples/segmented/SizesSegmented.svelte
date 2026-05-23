<script lang="ts">
	import { Segmented, Button } from 'sveltastic-ui';

	let xl = $state<'a' | 'b' | 'c'>('b');
	let large = $state<'a' | 'b' | 'c'>('c');
	let medium = $state<'a' | 'b' | 'c'>('b');
	let small = $state<'a' | 'b' | 'c'>('a');
	let mini = $state<'a' | 'b' | 'c'>('a');

	const abc = [
		{ value: 'a' as const, label: 'A' },
		{ value: 'b' as const, label: 'B' },
		{ value: 'c' as const, label: 'C' }
	];
</script>

<div class="grid">
	<span class="muted">xl</span>
	<Segmented bind:value={xl} size="xl" items={abc} />
	<Button size="xl">Button</Button>

	<span class="muted">large</span>
	<Segmented bind:value={large} size="large" items={abc} />
	<Button size="large">Button</Button>

	<span class="muted">medium</span>
	<Segmented bind:value={medium} size="medium" items={abc} />
	<Button size="medium">Button</Button>

	<span class="muted">small</span>
	<Segmented bind:value={small} size="small" items={abc} />
	<Button size="small">Button</Button>

	<span class="muted">mini</span>
	<Segmented bind:value={mini} size="mini" items={abc} />
	<Button size="mini">Button</Button>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 4rem auto auto;
		align-items: center;
		gap: 0.5rem 1rem;
		justify-content: start;
	}
	.muted {
		opacity: 0.6;
		font-size: 0.85rem;
	}
</style>
