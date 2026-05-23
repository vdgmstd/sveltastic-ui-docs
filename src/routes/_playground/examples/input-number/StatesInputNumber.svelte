<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let readonlyVal = $state(7);
</script>

<InputNumber value={2} disabled />
<span class="muted">disabled</span>
<InputNumber bind:value={readonlyVal} readonly />
<span class="muted">readonly</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
