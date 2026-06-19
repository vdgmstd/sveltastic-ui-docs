<script lang="ts">
	import { RatingGroup } from 'sveltastic-ui';
</script>

<div class="row">
	<RatingGroup.Root value={4.5} allowHalf readonly ariaLabel="Average rating" />
	<span class="muted">4.5 — 1,284 reviews</span>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
