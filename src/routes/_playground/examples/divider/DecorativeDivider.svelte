<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<p>Purely visual — no <code>separator</code> role, hidden from assistive tech.</p>
	<Divider.Root decorative />
	<p>Use when the line is decoration, not a meaningful section break.</p>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 320px;
	}
	p {
		margin: 0;
		opacity: 0.8;
	}
	code {
		font-family: var(--font-mono);
		font-size: 0.85em;
	}
</style>
