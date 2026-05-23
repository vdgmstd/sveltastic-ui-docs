<script lang="ts">
	import { Collapse, CollapseGroup } from 'sveltastic-ui';

	let value = $state<string | null>('a');
</script>

<CollapseGroup mode="single" layout="fused" variant="border" color="dark" bind:value>
	<Collapse key="a" title="Section 1"><p>Body 1</p></Collapse>
	<Collapse key="b" title="Section 2"><p>Body 2</p></Collapse>
	<Collapse key="c" title="Section 3"><p>Body 3</p></Collapse>
</CollapseGroup>
