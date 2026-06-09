<script lang="ts">
	import { Alert } from 'sveltastic-ui';
	import { InfoIcon } from 'phosphor-svelte';
</script>

<!-- child snippet: receive the merged root props and render your own host element. -->
<Alert.Root color="primary">
	{#snippet child({ props })}
		<section {...props}>
			<Alert.Icon><InfoIcon size={22} weight="fill" /></Alert.Icon>
			<Alert.Title>Render delegation</Alert.Title>
			<Alert.Description>
				The <code>child</code> snippet hands you the merged root props so you can
				render a custom host element while keeping the styled parts inside.
			</Alert.Description>
		</section>
	{/snippet}
</Alert.Root>
