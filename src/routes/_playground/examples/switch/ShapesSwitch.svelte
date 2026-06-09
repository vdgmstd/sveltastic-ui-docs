<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let square = $state(true);
</script>

<Switch.Root checked><Switch.Thumb /></Switch.Root>
<Switch.Root bind:checked={square} shape="square"><Switch.Thumb /></Switch.Root>
