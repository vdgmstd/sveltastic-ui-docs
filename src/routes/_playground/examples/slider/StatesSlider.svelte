<script lang="ts">
	import { Slider } from 'sveltastic-ui';
</script>

<Slider.Root value={40} disabled />
<p class="muted">Disabled</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
