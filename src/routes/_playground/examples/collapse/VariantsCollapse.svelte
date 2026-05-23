<script lang="ts">
	import { Collapse } from 'sveltastic-ui';

	let basicA = $state(true);
</script>

<div class="stack">
	<Collapse variant="default" bind:open={basicA} title="Default">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="flat" title="Flat">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="border" title="Border">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="solid" title="Solid">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="gradient" title="Gradient">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="relief" title="Relief">
		<p>Body content goes here.</p>
	</Collapse>
	<Collapse variant="ghost" title="Ghost">
		<p>Body content goes here.</p>
	</Collapse>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;
	}
</style>
