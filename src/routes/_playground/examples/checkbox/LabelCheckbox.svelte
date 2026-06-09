<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let beforeLabel = $state(true);
</script>

<Checkbox.Root labelPosition="before" bind:checked={beforeLabel}>
	<Checkbox.Indicator />
	<Checkbox.Label>Label before</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root labelPosition="after">
	<Checkbox.Indicator />
	<Checkbox.Label>Label after</Checkbox.Label>
</Checkbox.Root>
