<script lang="ts">
	import { List } from 'sveltastic-ui';

	let active = $state<Record<string, number>>({ primary: 0, success: 0, danger: 0, warning: 0 });
</script>

<div class="stack">
	<List.Root color="primary">
		<List.Body>
			<List.Item active={active.primary === 0} onclick={() => (active.primary = 0)}>
				<List.ItemContent><List.ItemLabel>primary</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.primary === 1} onclick={() => (active.primary = 1)}>
				<List.ItemContent><List.ItemLabel>secondary</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root color="success">
		<List.Body>
			<List.Item active={active.success === 0} onclick={() => (active.success = 0)}>
				<List.ItemContent><List.ItemLabel>success</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.success === 1} onclick={() => (active.success = 1)}>
				<List.ItemContent><List.ItemLabel>secondary</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root color="danger">
		<List.Body>
			<List.Item active={active.danger === 0} onclick={() => (active.danger = 0)}>
				<List.ItemContent><List.ItemLabel>danger</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.danger === 1} onclick={() => (active.danger = 1)}>
				<List.ItemContent><List.ItemLabel>secondary</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root color="warning">
		<List.Body>
			<List.Item
				variant="flat"
				active={active.warning === 0}
				onclick={() => (active.warning = 0)}
			>
				<List.ItemContent><List.ItemLabel>warning · flat</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item
				variant="flat"
				active={active.warning === 1}
				onclick={() => (active.warning = 1)}
			>
				<List.ItemContent><List.ItemLabel>flat</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
