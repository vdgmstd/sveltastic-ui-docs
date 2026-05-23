<script lang="ts">
	import { Input } from 'sveltastic-ui';
	import { CheckCircleIcon, WarningCircleIcon } from 'phosphor-svelte';
</script>

<Input placeholder="Success" fieldState="success">
	{#snippet icon()}<CheckCircleIcon size={16} />{/snippet}
</Input>
<Input placeholder="Danger" fieldState="danger" />
<Input placeholder="Warning" fieldState="warning">
	{#snippet icon()}<WarningCircleIcon size={16} />{/snippet}
</Input>
<Input placeholder="Primary" fieldState="primary" />
