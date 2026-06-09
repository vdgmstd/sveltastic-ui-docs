<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let basic = $state(false);
	let indeterminate = $state(true);
	let lineThrough = $state(false);
</script>

<Checkbox.Root bind:checked={basic}>
	<Checkbox.Indicator />
	<Checkbox.Label>Basic</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root bind:checked={indeterminate} indeterminate={indeterminate}>
	<Checkbox.Indicator />
	<Checkbox.Label>Indeterminate</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root lineThrough bind:checked={lineThrough}>
	<Checkbox.Indicator />
	<Checkbox.Label>Line through</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root disabled>
	<Checkbox.Indicator />
	<Checkbox.Label>Disabled</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root disabled checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Disabled</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root loading checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Loading</Checkbox.Label>
</Checkbox.Root>
