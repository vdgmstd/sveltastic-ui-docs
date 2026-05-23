<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea bind:value placeholder="Type something — auto-grows…" autoGrow block />
