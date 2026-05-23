<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let multi = $state<string[]>([]);
</script>

<div class="row">
	<Checkbox bind:group={multi} value="apple">Apple</Checkbox>
	<Checkbox bind:group={multi} value="banana">Banana</Checkbox>
	<Checkbox bind:group={multi} value="cherry">Cherry</Checkbox>
</div>
<p class="selected">Selected: {multi.join(', ') || '—'}</p>

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
