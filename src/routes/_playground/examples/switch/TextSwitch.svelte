<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let withText = $state(true);
</script>

<Switch bind:checked={withText} color="success">
	{#snippet iconOn()}On{/snippet}
	{#snippet iconOff()}Off{/snippet}
</Switch>
