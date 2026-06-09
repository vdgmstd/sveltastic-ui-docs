<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(4);
</script>

<Slider.Root bind:value min={0} max={10} step={1} ticks color="warning" showTooltip />
