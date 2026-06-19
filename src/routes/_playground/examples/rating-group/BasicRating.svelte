<script lang="ts">
	import { RatingGroup } from 'sveltastic-ui';

	let value = $state(3);
</script>

<RatingGroup.Root bind:value ariaLabel="Rate this" />
<span class="muted">{value} / 5</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
		vertical-align: middle;
	}
</style>
