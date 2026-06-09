<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';
</script>

<Checkbox.Root color="primary" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Primary</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="success" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Success</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="danger" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Danger</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="warning" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Warning</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="dark" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Dark</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="#7d33ff" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>Hex</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root color="rgb(59,222,200)" checked>
	<Checkbox.Indicator />
	<Checkbox.Label>RGB</Checkbox.Label>
</Checkbox.Root>
