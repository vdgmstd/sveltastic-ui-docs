<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<Segmented
	block
	items={[
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' },
		{ value: 'three', label: 'Three' },
		{ value: 'four', label: 'Four' }
	]}
/>
