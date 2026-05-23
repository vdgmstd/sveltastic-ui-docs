<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let basic = $state(false);
	let indeterminate = $state(true);
	let lineThrough = $state(false);
</script>

<Checkbox bind:checked={basic}>Basic</Checkbox>
<Checkbox bind:checked={indeterminate} indeterminate={indeterminate}>Indeterminate</Checkbox>
<Checkbox lineThrough bind:checked={lineThrough}>Line through</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
<Checkbox disabled checked>Disabled</Checkbox>
<Checkbox loading checked>Loading</Checkbox>
