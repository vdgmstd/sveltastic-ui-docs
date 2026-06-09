<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<div class="stack">
	<Segmented.Root variant="default" ariaLabel="Default variant">
		<Segmented.Item value="5">5 min</Segmented.Item>
		<Segmented.Item value="15">15 min</Segmented.Item>
		<Segmented.Item value="30">30 min</Segmented.Item>
	</Segmented.Root>
	<Segmented.Root variant="flat" ariaLabel="Flat variant">
		<Segmented.Item value="5">5 min</Segmented.Item>
		<Segmented.Item value="15">15 min</Segmented.Item>
		<Segmented.Item value="30">30 min</Segmented.Item>
	</Segmented.Root>
	<Segmented.Root variant="border" ariaLabel="Border variant">
		<Segmented.Item value="5">5 min</Segmented.Item>
		<Segmented.Item value="15">15 min</Segmented.Item>
		<Segmented.Item value="30">30 min</Segmented.Item>
	</Segmented.Root>
	<Segmented.Root variant="relief" ariaLabel="Relief variant">
		<Segmented.Item value="5">5 min</Segmented.Item>
		<Segmented.Item value="15">15 min</Segmented.Item>
		<Segmented.Item value="30">30 min</Segmented.Item>
	</Segmented.Root>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
</style>
