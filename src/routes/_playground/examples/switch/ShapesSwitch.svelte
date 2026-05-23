<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let square = $state(true);
</script>

<Switch checked />
<Switch bind:checked={square} shape="square" />
