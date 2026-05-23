<script lang="ts">
	import { Collapse, Chip, Button, Avatar } from 'sveltastic-ui';
	import { UserIcon, LightningIcon } from 'phosphor-svelte';
</script>

<Collapse variant="default" color="primary">
	{#snippet icon()}<UserIcon size={18} weight="fill" />{/snippet}
	{#snippet header()}
		<Avatar size="small" color="primary">JS</Avatar>
		<strong>Profile</strong>
	{/snippet}
	{#snippet extra()}
		<Chip variant="flat" color="success">Online</Chip>
	{/snippet}
	<p>Profile body — composed with avatar, header snippet and extra chip.</p>
	<div class="row">
		<Button variant="default" color="primary" size="small">Message</Button>
		<Button variant="flat" color="dark" size="small">View profile</Button>
	</div>
</Collapse>

<Collapse variant="flat" color="warn">
	{#snippet icon()}<LightningIcon size={18} weight="fill" />{/snippet}
	{#snippet header()}<strong>Action required</strong>{/snippet}
	{#snippet extra()}
		<Chip variant="flat" color="warn">Pending</Chip>
	{/snippet}
	<p>Three pending invoices need review before the end of the week.</p>
	<div class="row">
		<Button variant="default" color="warn" size="small">Review</Button>
		<Button variant="border" color="warn" size="small">Snooze</Button>
	</div>
</Collapse>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
		margin-top: 8px;
	}
</style>
