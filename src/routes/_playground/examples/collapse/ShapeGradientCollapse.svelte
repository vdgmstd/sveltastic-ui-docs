<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
</script>

<!-- shape controls the corner radius; gradientEnd sets the gradient variant end-stop. -->
<Collapse.Root variant="default" shape="square">
	<Collapse.Trigger>
		<Collapse.Title>Square shape</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>square zeroes the radius for tight, edge-to-edge lists.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="flat" color="primary" shape="circle">
	<Collapse.Trigger>
		<Collapse.Title>Circle shape</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>circle rounds the header into a pill.</p></Collapse.Content>
</Collapse.Root>
<Collapse.Root variant="gradient" color="primary" gradientEnd="danger">
	<Collapse.Trigger>
		<Collapse.Title>Gradient with custom end-stop</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>gradientEnd overrides the default --gradient-end token.</p></Collapse.Content>
</Collapse.Root>
