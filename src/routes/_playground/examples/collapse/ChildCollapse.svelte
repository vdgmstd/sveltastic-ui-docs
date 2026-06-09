<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
	import { GearIcon } from 'phosphor-svelte';
</script>

<!-- child render-delegation: own the root element, compose Collapse.Trigger / Collapse.Content inside. -->
<Collapse.Root variant="border" color="primary">
	{#snippet child({ props })}
		<div {...props}>
			<Collapse.Trigger>
				<Collapse.Icon><GearIcon size={18} weight="fill" /></Collapse.Icon>
				<Collapse.Title>Advanced settings</Collapse.Title>
				<Collapse.Caret />
			</Collapse.Trigger>
			<Collapse.Content>
				<p>The caret, open state and aria wiring flow through context to every part.</p>
			</Collapse.Content>
		</div>
	{/snippet}
</Collapse.Root>
