<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let floating = $state('');
	let inline = $state('');
</script>

<Input labelStyle="placeholder" label="Floating label" bind:value={floating} />
<Input
	labelStyle="inline"
	label="Inline label"
	bind:value={inline}
	placeholder="Placeholder"
/>
