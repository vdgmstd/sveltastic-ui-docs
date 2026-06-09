<script lang="ts">
	import { Collapse } from 'sveltastic-ui';

	let value = $state<string | null>('a');
</script>

<Collapse.Group type="single" layout="fused" variant="border" color="dark" bind:value>
	<Collapse.Root key="a">
		<Collapse.Trigger>
			<Collapse.Title>Section 1</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body 1</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="b">
		<Collapse.Trigger>
			<Collapse.Title>Section 2</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body 2</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="c">
		<Collapse.Trigger>
			<Collapse.Title>Section 3</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Body 3</p></Collapse.Content>
	</Collapse.Root>
</Collapse.Group>
