<script lang="ts">
	import { ScrollbarHost } from 'sveltastic-ui';

	const lines = Array.from({ length: 24 }, (_, i) => `${i + 1}. The quick brown fox jumps over the lazy dog`);
</script>

<!--
	Mount once at your app root. The host installs a capture-phase scroll
	listener and toggles [data-scrolling] on whatever element fired the event;
	tokens.css then swaps `scrollbar-color` between idle and active.
	The kit-wide host is already in +layout.svelte — the second mount here
	is a no-op (module-level guard) and exists only to make the contract
	visible in the example.
-->
<ScrollbarHost hideAfter={1000} />

<div class="demo">
	{#each lines as line, i (i)}
		<p>{line}</p>
	{/each}
</div>

<style>
	.demo {
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
