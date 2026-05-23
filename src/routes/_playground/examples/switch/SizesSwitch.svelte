<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let small = $state(false);
	let medium = $state(true);
	let large = $state(true);
</script>

<Switch bind:checked={small} size="small" />
<Switch bind:checked={medium} size="medium" />
<Switch bind:checked={large} size="large" />
