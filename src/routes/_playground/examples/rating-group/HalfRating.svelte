<script lang="ts">
	import { RatingGroup } from 'sveltastic-ui';

	let value = $state(3.5);
</script>

<RatingGroup.Root bind:value allowHalf ariaLabel="Rate with halves" />
<span class="muted">{value}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
		vertical-align: middle;
	}
</style>
