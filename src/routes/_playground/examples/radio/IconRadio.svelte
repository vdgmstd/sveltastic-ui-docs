<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';
	import { StarIcon, HeartIcon, FireIcon, LightningIcon, CrownIcon } from 'phosphor-svelte';

	let withIcon = $state('star');
</script>

<RadioGroup.Root bind:value={withIcon} orientation="horizontal" ariaLabel="Reaction">
	<RadioGroup.Item value="star">
		<RadioGroup.Indicator><StarIcon size={10} weight="fill" /></RadioGroup.Indicator>
		<RadioGroup.Label>Star</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="heart" color="danger">
		<RadioGroup.Indicator><HeartIcon size={10} weight="fill" /></RadioGroup.Indicator>
		<RadioGroup.Label>Heart</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="fire" color="warning">
		<RadioGroup.Indicator><FireIcon size={10} weight="fill" /></RadioGroup.Indicator>
		<RadioGroup.Label>Fire</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="lightning" color="success">
		<RadioGroup.Indicator><LightningIcon size={10} weight="fill" /></RadioGroup.Indicator>
		<RadioGroup.Label>Lightning</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="crown" color="dark">
		<RadioGroup.Indicator><CrownIcon size={10} weight="fill" /></RadioGroup.Indicator>
		<RadioGroup.Label>Crown</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
