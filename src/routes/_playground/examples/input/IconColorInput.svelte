<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon, EnvelopeIcon } from 'phosphor-svelte';
</script>

<Input placeholder="Primary icon" iconColor="primary">
	{#snippet icon()}<MagnifyingGlassIcon size={16} />{/snippet}
</Input>
<Input placeholder="Warning icon" iconColor="warning">
	{#snippet icon()}<EnvelopeIcon size={16} />{/snippet}
</Input>
