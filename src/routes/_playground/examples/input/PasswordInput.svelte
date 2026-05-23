<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let pwd = $state('');
</script>

<Input type="password" passwordReveal placeholder="Password" bind:value={pwd} />
