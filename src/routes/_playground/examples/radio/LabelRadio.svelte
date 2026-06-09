<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';

	let labels = $state('after');
</script>

<RadioGroup.Root bind:value={labels} orientation="horizontal" ariaLabel="Label position">
	<RadioGroup.Item value="before" labelPosition="before">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Label before</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="after" labelPosition="after">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Label after</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
