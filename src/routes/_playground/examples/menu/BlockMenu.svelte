<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
</script>

<div class="frame">
	<Menu.Root block matchWidth placement="bottom-start">
		<Menu.Trigger>
			{#snippet child({ props })}
				<Button.Root block variant="border" {...props}>Stretches to the parent</Button.Root>
			{/snippet}
		</Menu.Trigger>
		<Menu.Content>
			<Menu.Item>Option 1</Menu.Item>
			<Menu.Item>Option 2</Menu.Item>
		</Menu.Content>
	</Menu.Root>
</div>

<style>
	.frame {
		width: 320px;
	}
</style>
