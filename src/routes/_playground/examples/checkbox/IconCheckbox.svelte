<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';
	import { HeartIcon } from 'phosphor-svelte';

	let custom = $state(false);
</script>

<Checkbox bind:checked={custom} color="danger">
	{#snippet iconChecked()}
		<HeartIcon size={14} weight="fill" />
	{/snippet}
	Custom checked icon
</Checkbox>
