<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';
</script>

<RadioGroup.Root value="x" orientation="horizontal" ariaLabel="Disabled and loading, checked">
	<RadioGroup.Item value="x" disabled>
		<RadioGroup.Indicator />
		<RadioGroup.Label>Disabled</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root value="x" orientation="horizontal" ariaLabel="Loading, checked">
	<RadioGroup.Item value="x" loading>
		<RadioGroup.Indicator />
		<RadioGroup.Label>Loading</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root orientation="horizontal" ariaLabel="Loading, unchecked">
	<RadioGroup.Item value="y" loading>
		<RadioGroup.Indicator />
		<RadioGroup.Label>Loading</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
