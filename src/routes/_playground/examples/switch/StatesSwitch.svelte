<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let indeterminate = $state(true);
</script>

<Switch.Root loading checked><Switch.Thumb /></Switch.Root>
<Switch.Root loading><Switch.Thumb /></Switch.Root>
<Switch.Root disabled><Switch.Thumb /></Switch.Root>
<Switch.Root disabled checked><Switch.Thumb /></Switch.Root>
<Switch.Root indeterminate bind:checked={indeterminate}><Switch.Thumb /></Switch.Root>
