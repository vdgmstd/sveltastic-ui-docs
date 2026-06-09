<script lang="ts">
	import { Collapse } from 'sveltastic-ui';

	let basicA = $state(true);
</script>

<div class="stack">
	<Collapse.Root variant="default" bind:open={basicA}>
		<Collapse.Trigger>
			<Collapse.Title>Default</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="flat">
		<Collapse.Trigger>
			<Collapse.Title>Flat</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="border">
		<Collapse.Trigger>
			<Collapse.Title>Border</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="solid">
		<Collapse.Trigger>
			<Collapse.Title>Solid</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="gradient">
		<Collapse.Trigger>
			<Collapse.Title>Gradient</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="relief">
		<Collapse.Trigger>
			<Collapse.Title>Relief</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root variant="ghost">
		<Collapse.Trigger>
			<Collapse.Title>Ghost</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
	</Collapse.Root>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;
	}
</style>
