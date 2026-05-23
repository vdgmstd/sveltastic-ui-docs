<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea bind:value placeholder="Stretches to full width" block rows={4} />
