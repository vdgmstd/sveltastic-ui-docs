<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let value = $state('');
</script>

<Input bind:value placeholder="Type something" />
<Input value="" placeholder="Disabled" disabled />
<Input value="Read only" readonly />
