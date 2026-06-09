<script lang="ts">
	import { Textarea } from 'sveltastic-ui';

	let codes = $state('');
</script>

<Textarea.Root labelStyle="placeholder" bind:value={codes} mask="@@@-####">
	<Textarea.Control>
		<Textarea.Field rows={3} />
	</Textarea.Control>
	<Textarea.Label>Invite codes</Textarea.Label>
</Textarea.Root>
