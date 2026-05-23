<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { MagnifyingGlassIcon } from 'phosphor-svelte';
</script>

<Input placeholder="Default" />
<Input placeholder="Border" variant="border">
	{#snippet icon()}<MagnifyingGlassIcon size={16} />{/snippet}
</Input>
<Input placeholder="Shadow" variant="shadow">
	{#snippet icon()}<MagnifyingGlassIcon size={16} />{/snippet}
</Input>
