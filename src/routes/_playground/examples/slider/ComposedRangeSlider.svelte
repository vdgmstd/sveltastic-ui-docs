<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state<number[]>([20, 70]);
</script>

<!-- type="multiple" → two thumbs / tooltips; the Tick part renders per step. -->
<Slider.Root
	bind:value
	type="multiple"
	min={0}
	max={100}
	step={10}
	color="warning"
	ticks
	alwaysShowTooltip
	ariaLabelMin="Minimum"
	ariaLabelMax="Maximum"
>
	<Slider.Track>
		<Slider.Range />
		<Slider.Tick index={0} />
		<Slider.Tick index={5} />
		<Slider.Tick index={10} />
		<Slider.Thumb index={0} />
		<Slider.Thumb index={1} />
		<Slider.Tooltip index={0} />
		<Slider.Tooltip index={1} />
	</Slider.Track>
</Slider.Root>
<p class="muted">Value: [{value[0]}, {value[1]}]</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
