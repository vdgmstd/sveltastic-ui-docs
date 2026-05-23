<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let indeterminate = $state(true);
</script>

<Switch loading checked />
<Switch loading />
<Switch disabled />
<Switch disabled checked />
<Switch indeterminate bind:checked={indeterminate} />
