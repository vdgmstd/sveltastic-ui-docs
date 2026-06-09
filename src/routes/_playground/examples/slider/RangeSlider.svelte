<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state<number[]>([20, 70]);
</script>

<Slider.Root
	bind:value
	type="multiple"
	showTooltip
	ariaLabelMin="Minimum price"
	ariaLabelMax="Maximum price"
/>
<p class="muted">Value: [{value[0]}, {value[1]}]</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
