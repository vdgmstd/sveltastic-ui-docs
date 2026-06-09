<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(60);
</script>

<!-- Compound API: Slider.Root + parts. Slider.Root with no children renders this same default composition. -->
<Slider.Root bind:value type="single" color="success" showTooltip ariaLabel="Volume">
	<Slider.Track>
		<Slider.Range />
		<Slider.Thumb index={0} />
		<Slider.Tooltip index={0} />
	</Slider.Track>
</Slider.Root>
<p class="muted">Value: {value}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
