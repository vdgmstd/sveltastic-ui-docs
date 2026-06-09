<script lang="ts">
	import { Slider } from 'sveltastic-ui';
</script>

<div class="stack">
	<Slider.Root value={30} color="primary" />
	<Slider.Root value={50} color="success" />
	<Slider.Root value={70} color="danger" />
	<Slider.Root value={90} color="warning" />
	<Slider.Root value={40} color="dark" />
	<Slider.Root value={60} color="#7d22f0" />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
</style>
