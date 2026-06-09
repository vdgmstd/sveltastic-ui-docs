<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let value = $state('');
</script>

<Textarea.Root bind:value block>
	<Textarea.Control>
		<Textarea.Field placeholder="Stretches to full width" rows={4} />
	</Textarea.Control>
</Textarea.Root>
