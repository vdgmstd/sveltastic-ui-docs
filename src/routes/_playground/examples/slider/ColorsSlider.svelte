<script lang="ts">
	import { Slider } from 'sveltastic-ui';
</script>

<div class="stack">
	<Slider value={30} color="primary" />
	<Slider value={50} color="success" />
	<Slider value={70} color="danger" />
	<Slider value={90} color="warning" />
	<Slider value={40} color="dark" />
	<Slider value={60} color="#7d22f0" />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
</style>
