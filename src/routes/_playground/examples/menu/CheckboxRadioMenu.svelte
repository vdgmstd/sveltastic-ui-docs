<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { SlidersHorizontalIcon } from 'phosphor-svelte';

	let showStatusBar = $state(true);
	let showActivityBar = $state(false);
	let position = $state('bottom');
</script>

<Menu.Root closeOnSelect={false} placement="bottom-start">
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" {...props}>
				<SlidersHorizontalIcon size={15} />
				View
			</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.GroupHeading>Appearance</Menu.GroupHeading>
		<Menu.CheckboxItem bind:checked={showStatusBar}>Status bar</Menu.CheckboxItem>
		<Menu.CheckboxItem bind:checked={showActivityBar}>Activity bar</Menu.CheckboxItem>
		<Menu.Separator />
		<Menu.GroupHeading>Panel position</Menu.GroupHeading>
		<Menu.RadioGroup bind:value={position} ariaLabel="Panel position">
			<Menu.RadioItem value="top">Top</Menu.RadioItem>
			<Menu.RadioItem value="bottom">Bottom</Menu.RadioItem>
			<Menu.RadioItem value="right">Right</Menu.RadioItem>
		</Menu.RadioGroup>
	</Menu.Content>
</Menu.Root>
<p class="muted">status: {showStatusBar} · activity: {showActivityBar} · position: {position}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
