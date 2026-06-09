<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(40);
</script>

<Slider.Root bind:value />
<p class="muted">Value: {value}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
