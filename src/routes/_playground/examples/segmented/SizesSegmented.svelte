<script lang="ts">
	import { Segmented, Button } from 'sveltastic-ui';

	let xl = $state<'a' | 'b' | 'c'>('b');
	let large = $state<'a' | 'b' | 'c'>('c');
	let medium = $state<'a' | 'b' | 'c'>('b');
	let small = $state<'a' | 'b' | 'c'>('a');
	let mini = $state<'a' | 'b' | 'c'>('a');
</script>

{#snippet abc()}
	<Segmented.Item value="a">A</Segmented.Item>
	<Segmented.Item value="b">B</Segmented.Item>
	<Segmented.Item value="c">C</Segmented.Item>
{/snippet}

<div class="grid">
	<span class="muted">xl</span>
	<Segmented.Root bind:value={xl} size="xl" ariaLabel="xl size">{@render abc()}</Segmented.Root>
	<Button.Root size="xl">Button</Button.Root>

	<span class="muted">large</span>
	<Segmented.Root bind:value={large} size="large" ariaLabel="large size">{@render abc()}</Segmented.Root>
	<Button.Root size="large">Button</Button.Root>

	<span class="muted">medium</span>
	<Segmented.Root bind:value={medium} size="medium" ariaLabel="medium size">{@render abc()}</Segmented.Root>
	<Button.Root size="medium">Button</Button.Root>

	<span class="muted">small</span>
	<Segmented.Root bind:value={small} size="small" ariaLabel="small size">{@render abc()}</Segmented.Root>
	<Button.Root size="small">Button</Button.Root>

	<span class="muted">mini</span>
	<Segmented.Root bind:value={mini} size="mini" ariaLabel="mini size">{@render abc()}</Segmented.Root>
	<Button.Root size="mini">Button</Button.Root>
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
