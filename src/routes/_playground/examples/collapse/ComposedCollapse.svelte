<script lang="ts">
	import { Collapse, Chip, Button, Avatar } from 'sveltastic-ui';
	import { UserIcon, LightningIcon } from 'phosphor-svelte';
</script>

<Collapse.Root variant="default" color="primary">
	<Collapse.Trigger>
		<Collapse.Icon><UserIcon size={18} weight="fill" /></Collapse.Icon>
		<Collapse.Title>
			<Avatar.Root color="primary"><Avatar.Fallback>JS</Avatar.Fallback></Avatar.Root>
			<strong>Profile</strong>
		</Collapse.Title>
		<Collapse.Extra>
			<Chip.Root variant="flat" color="success">Online</Chip.Root>
		</Collapse.Extra>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content>
		<p>Profile body — composed with avatar, header snippet and extra chip.</p>
		<div class="row">
			<Button.Root variant="default" color="primary" size="small">Message</Button.Root>
			<Button.Root variant="flat" color="dark" size="small">View profile</Button.Root>
		</div>
	</Collapse.Content>
</Collapse.Root>

<Collapse.Root variant="flat" color="warn">
	<Collapse.Trigger>
		<Collapse.Icon><LightningIcon size={18} weight="fill" /></Collapse.Icon>
		<Collapse.Title><strong>Action required</strong></Collapse.Title>
		<Collapse.Extra>
			<Chip.Root variant="flat" color="warn">Pending</Chip.Root>
		</Collapse.Extra>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content>
		<p>Three pending invoices need review before the end of the week.</p>
		<div class="row">
			<Button.Root variant="default" color="warn" size="small">Review</Button.Root>
			<Button.Root variant="border" color="warn" size="small">Snooze</Button.Root>
		</div>
	</Collapse.Content>
</Collapse.Root>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
		margin-top: 8px;
	}
</style>
