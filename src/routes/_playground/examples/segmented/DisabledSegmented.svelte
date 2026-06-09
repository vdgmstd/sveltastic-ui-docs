<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<Segmented.Root ariaLabel="Plan (one segment disabled)">
	<Segmented.Item value="a">Free</Segmented.Item>
	<Segmented.Item value="b" disabled>Plus</Segmented.Item>
	<Segmented.Item value="c">Pro</Segmented.Item>
	<Segmented.Item value="d">Team</Segmented.Item>
</Segmented.Root>
<Segmented.Root disabled ariaLabel="Whole group disabled">
	<Segmented.Item value="on">On</Segmented.Item>
	<Segmented.Item value="off">Off</Segmented.Item>
</Segmented.Root>
