<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(35);
</script>

<Slider bind:value alwaysShowTooltip color="primary" />
