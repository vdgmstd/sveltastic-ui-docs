<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(220);
	const formatPrice = (n: number): string => `$${n}`;
</script>

<Slider.Root bind:value min={0} max={500} step={10} alwaysShowTooltip formatValue={formatPrice} color="warning" />
