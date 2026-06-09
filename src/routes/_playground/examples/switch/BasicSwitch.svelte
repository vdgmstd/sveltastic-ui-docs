<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let checked = $state(true);
</script>

<Switch.Root bind:checked><Switch.Thumb /></Switch.Root>
<Switch.Root checked><Switch.Thumb /></Switch.Root>
<Switch.Root><Switch.Thumb /></Switch.Root>
