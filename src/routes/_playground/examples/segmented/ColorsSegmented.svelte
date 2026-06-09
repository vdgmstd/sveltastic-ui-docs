<script lang="ts">
	import { Segmented } from 'sveltastic-ui';
</script>

<Segmented.Root ariaLabel="Decision">
	<Segmented.Item value="ok" color="success">Approve</Segmented.Item>
	<Segmented.Item value="wait" color="warning">Review</Segmented.Item>
	<Segmented.Item value="no" color="danger">Reject</Segmented.Item>
</Segmented.Root>
