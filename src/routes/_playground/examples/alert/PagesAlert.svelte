<script lang="ts">
	import { Alert, Button } from 'sveltastic-ui';
	import { RocketIcon } from 'phosphor-svelte';

	const total = 3;
	let page = $state(1);

	const steps = [
		"Welcome! Let's set up your workspace in three short steps.",
		'Invite your team and assign roles from the admin panel.',
		"You're all set. Explore the dashboard to get started."
	];
</script>

<Alert variant="gradient" color="primary" bind:page pages={total}>
	{#snippet icon()}<RocketIcon size={22} weight="fill" />{/snippet}
	{#snippet title()}Onboarding{/snippet}
	{#snippet pagesContent(p: number)}
		<p>{steps[p - 1]}</p>
	{/snippet}
	{#snippet footer()}
		<Button size="small" variant="transparent" color="light" disabled={page <= 1} onclick={() => page--}>
			Previous
		</Button>
		<Button size="small" variant="flat" color="light" disabled={page >= total} onclick={() => page++}>
			Next
		</Button>
	{/snippet}
</Alert>
