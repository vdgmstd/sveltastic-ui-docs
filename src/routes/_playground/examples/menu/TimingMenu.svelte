<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { expoOut, backOut } from 'svelte/easing';
</script>

<Menu.Root openAnim="pop" openDuration={120}>
	<Menu.Trigger>
		{#snippet child({ props })}<Button.Root variant="flat" size="small" {...props}>120ms snap</Button.Root>{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Item>Option 1</Menu.Item>
		<Menu.Item>Option 2</Menu.Item>
	</Menu.Content>
</Menu.Root>
<Menu.Root openAnim="slide" openDuration={500} openEasing={expoOut}>
	<Menu.Trigger>
		{#snippet child({ props })}<Button.Root variant="flat" size="small" {...props}>500ms slide</Button.Root>{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Item>Option 1</Menu.Item>
		<Menu.Item>Option 2</Menu.Item>
	</Menu.Content>
</Menu.Root>
<Menu.Root openAnim="spring" openDuration={650} openEasing={backOut}>
	<Menu.Trigger>
		{#snippet child({ props })}<Button.Root variant="flat" size="small" color="success" {...props}>650ms back</Button.Root>{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Item>Option 1</Menu.Item>
		<Menu.Item>Option 2</Menu.Item>
	</Menu.Content>
</Menu.Root>
