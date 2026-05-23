<script lang="ts">
	const lines = Array.from({ length: 24 }, (_, i) => `${i + 1}. The quick brown fox jumps over the lazy dog`);
</script>

<div class="demo">
	{#each lines as line, i (i)}
		<p>{line}</p>
	{/each}
</div>

<style>
	.demo {
		/* The active-state thumb (shown while [data-scrolling] is set)
		   adopts a kit color token. Rest state stays transparent. */
		--scrollbar-thumb-hover: rgb(var(--primary) / 0.65);

		max-width: 480px;
		height: 220px;
		overflow: auto;
		padding: 0.75rem 1rem;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 12px;
		background: rgb(var(--gray-1));
	}
	.demo p { margin: 0 0 0.4rem; font-size: 0.9rem; }
</style>
