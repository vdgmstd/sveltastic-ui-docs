<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let pwd = $state('');
</script>

<Input.Root bind:value={pwd}>
	<Input.Control>
		<Input.Field type="password" passwordReveal placeholder="Password" />
	</Input.Control>
</Input.Root>
