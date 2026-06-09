<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
</script>

<Collapse.Root variant="flat" color="primary">
	<Collapse.Trigger>
		<Collapse.Title>Primary</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" color="success">
	<Collapse.Trigger>
		<Collapse.Title>Success</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" color="danger">
	<Collapse.Trigger>
		<Collapse.Title>Danger</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" color="warn">
	<Collapse.Trigger>
		<Collapse.Title>Warning</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" color="dark">
	<Collapse.Trigger>
		<Collapse.Title>Dark</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
