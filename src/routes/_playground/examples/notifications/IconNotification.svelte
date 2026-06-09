<script lang="ts">
	import { Button, notify } from 'sveltastic-ui';
	import { RocketLaunchIcon } from 'phosphor-svelte';
</script>

<!-- icon replaces the variant default glyph with your own snippet. -->
<Button.Root
	color="primary"
	onclick={() => notify({ title: 'Launched', text: 'Custom icon snippet.', color: 'primary', icon: rocket })}
>
	Custom icon toast
</Button.Root>

{#snippet rocket()}
	<RocketLaunchIcon size={22} weight="fill" />
{/snippet}
