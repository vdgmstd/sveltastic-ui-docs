<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let small = $state(false);
	let medium = $state(true);
	let large = $state(true);
</script>

<Switch.Root bind:checked={small} size="small"><Switch.Thumb /></Switch.Root>
<Switch.Root bind:checked={medium} size="medium"><Switch.Thumb /></Switch.Root>
<Switch.Root bind:checked={large} size="large"><Switch.Thumb /></Switch.Root>
