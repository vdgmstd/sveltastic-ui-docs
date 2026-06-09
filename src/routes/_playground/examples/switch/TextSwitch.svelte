<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let withText = $state(true);
</script>

<Switch.Root bind:checked={withText} color="success">
	<Switch.Thumb />
	<Switch.Icon state="on">On</Switch.Icon>
	<Switch.Icon state="off">Off</Switch.Icon>
</Switch.Root>
