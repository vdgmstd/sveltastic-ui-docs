<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let checked = $state(true);
</script>

<Switch bind:checked />
<Switch checked />
<Switch />
