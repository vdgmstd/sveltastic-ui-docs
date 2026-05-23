<script lang="ts">
	import { Radio } from 'sveltastic-ui';

	let basic = $state<string | number>('apple');
</script>

<div class="row">
	<Radio bind:group={basic} value="apple">Apple</Radio>
	<Radio bind:group={basic} value="banana">Banana</Radio>
	<Radio bind:group={basic} value="cherry">Cherry</Radio>
</div>
<p class="selected">Selected: {basic}</p>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
	}
	.selected {
		margin: 0.5rem 0 0;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
