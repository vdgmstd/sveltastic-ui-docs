<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let beforeLabel = $state(true);
</script>

<Checkbox labelPosition="before" bind:checked={beforeLabel}>Label before</Checkbox>
<Checkbox labelPosition="after">Label after</Checkbox>
