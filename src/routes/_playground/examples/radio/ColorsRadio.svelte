<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';
</script>

<RadioGroup.Root value="primary" color="primary" orientation="horizontal" ariaLabel="Primary">
	<RadioGroup.Item value="primary">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Primary</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root value="success" color="success" orientation="horizontal" ariaLabel="Success">
	<RadioGroup.Item value="success">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Success</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root value="danger" color="danger" orientation="horizontal" ariaLabel="Danger">
	<RadioGroup.Item value="danger">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Danger</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root value="warning" color="warning" orientation="horizontal" ariaLabel="Warning">
	<RadioGroup.Item value="warning">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Warning</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
<RadioGroup.Root value="dark" color="dark" orientation="horizontal" ariaLabel="Dark">
	<RadioGroup.Item value="dark">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Dark</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>
