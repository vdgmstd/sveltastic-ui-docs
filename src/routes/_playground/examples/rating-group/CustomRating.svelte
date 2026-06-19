<script lang="ts">
	import { RatingGroup } from 'sveltastic-ui';
	import { HeartIcon } from 'phosphor-svelte';

	let value = $state(2);
</script>

<RatingGroup.Root bind:value max={5} color="danger" ariaLabel="Favorite level">
	{#each { length: 5 } as _, i (i)}
		<RatingGroup.Item index={i}>
			{#snippet children({ state })}
				<HeartIcon size={24} weight={state === 'empty' ? 'regular' : 'fill'} />
			{/snippet}
		</RatingGroup.Item>
	{/each}
</RatingGroup.Root>
