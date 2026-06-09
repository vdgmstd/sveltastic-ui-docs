<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon } from 'phosphor-svelte';

	let value = $state('');
</script>

<!-- child snippet on Field: keep the shell (bg, icon, focus ripple) but render your own control. -->
<Input.Root bind:value>
	<Input.Control>
		<Input.Icon><MagnifyingGlassIcon size={16} /></Input.Icon>
		<Input.Field placeholder="Render-delegated input">
			{#snippet child({ props })}
				<input {...props} />
			{/snippet}
		</Input.Field>
	</Input.Control>
</Input.Root>
