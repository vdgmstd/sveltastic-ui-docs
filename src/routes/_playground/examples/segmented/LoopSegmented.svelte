<script lang="ts">
	import { Segmented } from 'sveltastic-ui';

	let value = $state<'mon' | 'tue' | 'wed' | 'thu' | 'fri'>('mon');
</script>

<!-- loop: arrow keys wrap past the first/last segment. -->
<Segmented.Root bind:value loop ariaLabel="Weekday (arrow keys wrap)">
	<Segmented.Item value="mon">Mon</Segmented.Item>
	<Segmented.Item value="tue">Tue</Segmented.Item>
	<Segmented.Item value="wed">Wed</Segmented.Item>
	<Segmented.Item value="thu">Thu</Segmented.Item>
	<Segmented.Item value="fri">Fri</Segmented.Item>
</Segmented.Root>
