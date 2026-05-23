<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<Segmented
	items={[
		{ value: 'ok', label: 'Approve', color: 'success' },
		{ value: 'wait', label: 'Review', color: 'warning' },
		{ value: 'no', label: 'Reject', color: 'danger' }
	]}
/>
