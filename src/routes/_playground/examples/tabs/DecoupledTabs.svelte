<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<Tabs.Root bind:value>
	<div class="composition">
		<header class="composition__header">
			<Tabs.List ariaLabel="Decoupled layout demo">
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="details">Details</Tabs.Trigger>
				<Tabs.Trigger value="history">History</Tabs.Trigger>
			</Tabs.List>
		</header>
		<aside class="composition__aside">arbitrary content between trigger and panel</aside>
		<main class="composition__main">
			<Tabs.Content value="overview"><p>An at-a-glance summary of your project.</p></Tabs.Content>
			<Tabs.Content value="details"><p>Granular metadata and configuration.</p></Tabs.Content>
			<Tabs.Content value="history"><p>Audit log of recent changes.</p></Tabs.Content>
		</main>
	</div>
</Tabs.Root>

<style>
	.composition {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-rows: auto 1fr;
		gap: 16px;
		padding: 16px;
		border: 1px dashed rgb(var(--text) / 0.12);
		border-radius: 12px;
		width: 100%;
	}
	.composition__header {
		grid-column: 1 / -1;
	}
	.composition__aside {
		font-size: 0.75rem;
		opacity: 0.6;
		padding: 8px 12px;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		align-self: start;
	}
	.composition__main {
		min-width: 0;
	}
</style>
