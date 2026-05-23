<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let value = $state('a');
</script>

<Input bind:value fieldState="danger" label="Username" labelStyle="inline">
	{#snippet message()}
		<span>Must be at least 3 characters</span>
	{/snippet}
</Input>
