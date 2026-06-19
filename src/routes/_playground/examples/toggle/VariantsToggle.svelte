<script lang="ts">
	import { Toggle } from 'sveltastic-ui';
	import type { Variant } from 'sveltastic-ui';

	const variants: Variant[] = ['transparent', 'flat', 'border', 'default', 'shadow'];
	let pressed = $state<Record<string, boolean>>({ transparent: true, flat: true, border: true, default: true, shadow: true });
</script>

<div class="row">
	{#each variants as variant (variant)}
		<Toggle.Root {variant} color="primary" bind:pressed={pressed[variant]}>{variant}</Toggle.Root>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}
</style>
