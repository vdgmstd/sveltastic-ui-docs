<script lang="ts">
	import { List } from 'sveltastic-ui';

	let active = $state('quarterly');
</script>

<List.Root>
	<List.Label>Recent</List.Label>
	<List.Body>
		<List.Item active={active === 'quarterly'} onclick={() => (active = 'quarterly')}>
			<List.ItemContent><List.ItemLabel>Quarterly report</List.ItemLabel></List.ItemContent>
		</List.Item>
		<List.Item active={active === 'design'} onclick={() => (active = 'design')}>
			<List.ItemContent><List.ItemLabel>Design review</List.ItemLabel></List.ItemContent>
		</List.Item>
	</List.Body>
	<List.Separator />
	<List.Label>Pinned</List.Label>
	<List.Body>
		<List.Item active={active === 'roadmap'} onclick={() => (active = 'roadmap')}>
			<List.ItemContent><List.ItemLabel>Roadmap</List.ItemLabel></List.ItemContent>
		</List.Item>
	</List.Body>
</List.Root>
