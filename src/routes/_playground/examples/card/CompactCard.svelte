<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';

	const src = '/card-demo/avatar-portrait.jpg';
</script>

<Card variant="compact">
	{#snippet img()}
		<img {src} alt="Portrait of Sara Lindqvist" />
	{/snippet}
	{#snippet interactions()}
		3
	{/snippet}
	{#snippet title()}
		<h4>Sara Lindqvist</h4>
	{/snippet}
	{#snippet body()}
		<p>Invited you to collaborate on the VGStudio design system.</p>
	{/snippet}
	{#snippet actions()}
		<div class="flex w-full">
			<Button color="success">Accept</Button>
			<Button variant="shadow" color="danger">Decline</Button>
		</div>
	{/snippet}
</Card>
