<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(60);
</script>

<Slider.Root bind:value showTooltip color="success" />
