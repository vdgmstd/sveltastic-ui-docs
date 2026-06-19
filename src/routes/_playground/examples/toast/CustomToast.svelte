<script lang="ts">
	import { Button, Toast, toast } from 'sveltastic-ui';
	import { RocketLaunchIcon } from 'phosphor-svelte';
</script>

{#snippet deploying()}
	<Toast.Root>
		<Toast.Icon><RocketLaunchIcon size={20} weight="fill" /></Toast.Icon>
		<div class="toast__body">
			<Toast.Title>Deploy started</Toast.Title>
			<Toast.Description>Building and shipping your site…</Toast.Description>
		</div>
		<Toast.Close />
	</Toast.Root>
{/snippet}

<Button.Root onclick={() => toast({ color: 'primary', content: deploying })}>
	Custom content
</Button.Root>
