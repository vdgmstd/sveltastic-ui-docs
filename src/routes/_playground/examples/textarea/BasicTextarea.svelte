<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea bind:value placeholder="Type a few words…" rows={3} />
