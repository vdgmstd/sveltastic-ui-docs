<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
</script>

{#each ['pop', 'slide', 'fade', 'spring'] as kind (kind)}
	<Menu.Root openAnim={kind as 'pop' | 'slide' | 'fade' | 'spring'}>
		<Menu.Trigger>
			{#snippet child({ props })}<Button.Root variant="border" size="small" {...props}>{kind}</Button.Root>{/snippet}
		</Menu.Trigger>
		<Menu.Content>
			<Menu.Item>Option 1</Menu.Item>
			<Menu.Item>Option 2</Menu.Item>
			<Menu.Item>Option 3</Menu.Item>
		</Menu.Content>
	</Menu.Root>
{/each}
