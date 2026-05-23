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
		/* Tint both thumb and trough — a clear scroll affordance for
		   surfaces where minimalism would hurt discoverability. */
		--scrollbar-thumb: rgb(var(--text) / 0.25);
		--scrollbar-track: rgb(var(--gray-3));

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
