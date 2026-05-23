<script lang="ts">
	import { ScrollbarHost } from 'sveltastic-ui';

	let scrollable: HTMLDivElement | undefined = $state();
	let scrolling = $state(false);

	$effect(() => {
		if (!scrollable) return;
		const el = scrollable;
		const sync = () => { scrolling = el.hasAttribute('data-scrolling'); };
		const mo = new MutationObserver(sync);
		mo.observe(el, { attributes: true, attributeFilter: ['data-scrolling'] });
		sync();
		return () => mo.disconnect();
	});

	const lines = Array.from({ length: 24 }, (_, i) => `${i + 1}. Scroll to flip the attribute.`);
</script>

<ScrollbarHost hideAfter={1000} />

<div class="row">
	<div bind:this={scrollable} class="demo">
		{#each lines as line, i (i)}
			<p>{line}</p>
		{/each}
	</div>

	<aside class="pill" data-on={scrolling}>
		<span class="dot"></span>
		<code>data-scrolling</code>
		<strong>{scrolling ? 'on' : 'off'}</strong>
	</aside>
</div>

<style>
	.row {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.demo {
		flex: 0 0 auto;
		width: min(420px, 100%);
		height: 220px;
		overflow: auto;
		padding: 0.75rem 1rem;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 12px;
		background: rgb(var(--gray-1));
	}
	.demo p { margin: 0 0 0.4rem; font-size: 0.9rem; }

	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.45rem 0.7rem;
		font-size: 0.78rem;
		font-family: var(--font-mono);
		border: 1px solid rgb(var(--gray-3));
		border-radius: 999px;
		background: rgb(var(--gray-1));
	}
	.pill .dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 999px;
		background: rgb(var(--text) / 0.25);
		transition: background 120ms;
	}
	.pill[data-on='true'] .dot { background: rgb(var(--primary)); }
	.pill code { opacity: 0.7; }
	.pill strong { font-weight: 600; }
</style>
