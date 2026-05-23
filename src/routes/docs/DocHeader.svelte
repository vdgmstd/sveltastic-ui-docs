<script lang="ts">
	import type { DocCategory } from './nav';

	interface Props {
		category: DocCategory;
	}

	let { category }: Props = $props();
</script>

<div class="doc-header">
	<span class="doc-header__badge">{category}</span>
</div>

<style>
	.doc-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	.doc-header__badge {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		font-weight: 600;
		background: rgb(var(--primary) / 0.12);
		color: rgb(var(--primary));
	}
</style>
