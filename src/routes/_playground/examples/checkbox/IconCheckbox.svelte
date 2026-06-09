<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';
	import { HeartIcon } from 'phosphor-svelte';

	let custom = $state(false);
</script>

<Checkbox.Root bind:checked={custom} color="danger">
	<Checkbox.Indicator>
		<Checkbox.Icon>
			<HeartIcon size={14} weight="fill" />
		</Checkbox.Icon>
	</Checkbox.Indicator>
	<Checkbox.Label>Custom checked icon</Checkbox.Label>
</Checkbox.Root>
