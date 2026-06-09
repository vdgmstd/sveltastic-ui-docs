<script lang="ts">
	import { List } from 'sveltastic-ui';

	let active = $state<Record<string, number>>({
		default: 1,
		flat: 1,
		border: -1,
		transparent: -1,
		shadow: -1
	});
</script>

<div class="stack">
	<List.Root variant="default">
		<List.Body>
			<List.Item active={active.default === 0} onclick={() => (active.default = 0)}>
				<List.ItemContent><List.ItemLabel>default</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.default === 1} onclick={() => (active.default = 1)}>
				<List.ItemContent><List.ItemLabel>active</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root variant="flat">
		<List.Body>
			<List.Item active={active.flat === 0} onclick={() => (active.flat = 0)}>
				<List.ItemContent><List.ItemLabel>flat</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item variant="flat" active={active.flat === 1} onclick={() => (active.flat = 1)}>
				<List.ItemContent><List.ItemLabel>active flat</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root variant="border">
		<List.Body>
			<List.Item active={active.border === 0} onclick={() => (active.border = 0)}>
				<List.ItemContent><List.ItemLabel>border</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.border === 1} onclick={() => (active.border = 1)}>
				<List.ItemContent><List.ItemLabel>border</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root variant="transparent">
		<List.Body>
			<List.Item active={active.transparent === 0} onclick={() => (active.transparent = 0)}>
				<List.ItemContent><List.ItemLabel>transparent</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.transparent === 1} onclick={() => (active.transparent = 1)}>
				<List.ItemContent><List.ItemLabel>transparent</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Body>
	</List.Root>
	<List.Root variant="shadow">
		<List.Body>
			<List.Item active={active.shadow === 0} onclick={() => (active.shadow = 0)}>
				<List.ItemContent><List.ItemLabel>shadow</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active.shadow === 1} onclick={() => (active.shadow = 1)}>
				<List.ItemContent><List.ItemLabel>shadow</List.ItemLabel></List.ItemContent>
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
