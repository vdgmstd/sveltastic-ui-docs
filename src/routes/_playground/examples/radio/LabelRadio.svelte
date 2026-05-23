<script lang="ts">
	import { Radio } from 'sveltastic-ui';

	let labels = $state<string | number>('after');
</script>

<Radio labelPosition="before" bind:group={labels} value="before">Label before</Radio>
<Radio labelPosition="after" bind:group={labels} value="after">Label after</Radio>
