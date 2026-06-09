<script lang="ts">
	import { List } from 'sveltastic-ui';
	import { CaretRightIcon } from 'phosphor-svelte';
</script>

<!-- child snippet: receive the merged props and render your own row element. -->
<List.Root>
	<List.Body>
		<List.Item href="https://svelte.dev">
			{#snippet child({ props })}
				<a {...props} class="custom-row">
					<span>Svelte docs</span>
					<CaretRightIcon size={14} />
				</a>
			{/snippet}
		</List.Item>
		<List.Item href="https://kit.svelte.dev">
			{#snippet child({ props })}
				<a {...props} class="custom-row">
					<span>SvelteKit docs</span>
					<CaretRightIcon size={14} />
				</a>
			{/snippet}
		</List.Item>
	</List.Body>
</List.Root>

<style>
	.custom-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 9px 12px;
		font-weight: 600;
		color: inherit;
		text-decoration: none;
	}
</style>
