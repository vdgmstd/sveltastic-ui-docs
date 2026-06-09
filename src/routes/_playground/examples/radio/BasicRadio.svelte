<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';

	let basic = $state('apple');
</script>

<RadioGroup.Root bind:value={basic} orientation="horizontal" ariaLabel="Fruit">
	<RadioGroup.Item value="apple">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Apple</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="banana">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Banana</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="cherry">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Cherry</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<p class="selected">Selected: {basic}</p>

<style>
	.selected {
		margin: 0.5rem 0 0;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
