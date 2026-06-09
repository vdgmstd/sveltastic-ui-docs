<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
</script>

<DocHeader category="Guide" />

<header class="section__header">
	<h1>Getting started</h1>
	<p>
		A Svelte 5 + Tailwind v4 component kit. Featherweight runtime, SSR-safe,
		tree-shakable to the byte. This page gets you from a blank project to a
		working <code>&lt;Button.Root&gt;</code> in under a minute.
	</p>
</header>

<div class="block">
	<h3>1. Install</h3>
	<p class="muted">Two dependencies — the kit itself plus the icon set it expects.</p>
	<pre class="snippet"><code>npm install sveltastic-ui phosphor-svelte</code></pre>
</div>

<div class="block">
	<h3>2. Peer dependencies</h3>
	<p class="muted">
		The kit expects Svelte 5 (runes) and Tailwind v4 to already live in your project.
		Install either if they're missing:
	</p>
	<pre class="snippet"><code>npm install svelte@^5 tailwindcss@^4</code></pre>
	<p class="muted small">
		Peer ranges are validated at install time — npm warns if your project's
		Svelte or Tailwind major doesn't match.
	</p>
</div>

<div class="block">
	<h3>3. Import the tokens</h3>
	<p class="muted">
		One CSS line in your root layout or app entry. Brings in the design tokens,
		base reset, and themed scrollbars. Drop it into <code>+layout.svelte</code> for
		a SvelteKit app, or wherever you bootstrap your styles.
	</p>
	<pre class="snippet"><code>{`<script lang="ts">
  import 'sveltastic-ui/styles';
<\/script>`}</code></pre>
</div>

<div class="block">
	<h3>4. Use a component</h3>
	<p class="muted">Named import. No provider, no init call, no global setup.</p>
	<pre class="snippet"><code>{`<script lang="ts">
  import { Button } from 'sveltastic-ui';
<\/script>

<Button.Root color="primary" variant="gradient">Ship it</Button.Root>`}</code></pre>
</div>

<div class="block">
	<h3>5. Pick a palette (optional)</h3>
	<p class="muted">
		The kit ships with six pre-tuned accent palettes. Apply one of the
		<code>theme-*</code> classes to <code>&lt;html&gt;</code> or any ancestor —
		everything below it switches accent.
	</p>
	<pre class="snippet"><code>{`<html class="theme-petrol">  <!-- or theme-indigo, theme-pine, theme-wine, theme-bronze, theme-graphite -->`}</code></pre>
	<p class="muted">For dark mode, set <code>data-theme="dark"</code> on the same element.</p>
	<pre class="snippet"><code>&lt;html data-theme="dark" class="theme-pine"&gt;</code></pre>
</div>

<div class="block">
	<h3>6. That's it</h3>
	<p class="muted">
		Browse the sidebar for the full component reference. Each page has live
		examples and a copy-able snippet. The kit pages on the left are public API
		— if it's not documented, treat it as internal.
	</p>
</div>

<style>
	.section__header { margin-bottom: 2rem; }
	.section__header h1 { margin: 0 0 0.5rem; font-size: 2rem; font-weight: 700; letter-spacing: -0.02em; }
	.section__header p { margin: 0; opacity: 0.78; max-width: 64ch; line-height: 1.55; }

	.block { margin: 0 0 1.75rem; }
	.block h3 { margin: 0 0 0.4rem; font-size: 1rem; font-weight: 600; }
	.muted { font-size: 0.9rem; opacity: 0.72; margin: 0.25rem 0 0.75rem; line-height: 1.5; max-width: 64ch; }
	.muted.small { font-size: 0.78rem; opacity: 0.6; }

	code { font-family: var(--font-mono); font-size: 0.86em; background: rgb(var(--gray-2)); padding: 0.05rem 0.35rem; border-radius: 4px; }

	.snippet {
		margin: 0.6rem 0 0;
		padding: 0.85rem 1rem;
		background: rgb(var(--gray-2));
		border-radius: 10px;
		font-size: 0.82rem;
		font-family: var(--font-mono);
		line-height: 1.5;
		overflow-x: auto;
		max-width: 640px;
	}
	.snippet code {
		background: none;
		padding: 0;
		font-size: inherit;
		white-space: pre;
	}
</style>
