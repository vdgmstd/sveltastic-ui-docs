<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon, EnvelopeIcon } from 'phosphor-svelte';
</script>

<Input placeholder="Search">
	{#snippet icon()}<MagnifyingGlassIcon size={16} />{/snippet}
</Input>
<Input placeholder="Email" iconPosition="after">
	{#snippet icon()}<EnvelopeIcon size={16} />{/snippet}
</Input>
