<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let small = $state(25);
	let medium = $state(50);
	let large = $state(75);
</script>

<div class="stack">
	<Slider bind:value={small} size="small" />
	<Slider bind:value={medium} size="medium" />
	<Slider bind:value={large} size="large" />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
</style>
