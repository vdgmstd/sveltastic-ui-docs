<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<Segmented
	items={[
		{ value: 'a', label: 'Free' },
		{ value: 'b', label: 'Plus', disabled: true },
		{ value: 'c', label: 'Pro' },
		{ value: 'd', label: 'Team' }
	]}
/>
<Segmented
	disabled
	items={[
		{ value: 'on', label: 'On' },
		{ value: 'off', label: 'Off' }
	]}
/>
