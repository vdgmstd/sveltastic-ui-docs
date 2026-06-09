<script lang="ts">
	import { Alert, Pagination } from 'sveltastic-ui';
	import { RocketIcon } from 'phosphor-svelte';

	const steps = [
		"Welcome! Let's set up your workspace in three short steps.",
		'Invite your team and assign roles from the admin panel.',
		"You're all set. Explore the dashboard to get started."
	];

	let page = $state(1);
</script>

<Alert.Root variant="gradient" color="primary">
	<Alert.Icon><RocketIcon size={22} weight="fill" /></Alert.Icon>
	<Alert.Title>Onboarding</Alert.Title>
	<Alert.Description>
		<p>{steps[page - 1]}</p>
	</Alert.Description>
	<Alert.Action>
		<Pagination.Root
			bind:page
			length={steps.length}
			mode="dots"
			arrows
			size="small"
			color="light"
		/>
	</Alert.Action>
</Alert.Root>
