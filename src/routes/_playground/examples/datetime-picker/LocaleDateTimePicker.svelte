<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';
</script>

<div class="row">
	<DateTimePicker.Root
		type="date"
		value="2026-04-15"
		locale="en-US"
		label="English — week starts Sunday"
		labelStyle="placeholder"
	/>
	<DateTimePicker.Root
		type="date"
		value="2026-04-15"
		locale="ru-RU"
		weekStart={1}
		label="Russian — week starts Monday"
		labelStyle="placeholder"
	/>
	<DateTimePicker.Root
		type="date"
		value="2026-04-15"
		locale="ja-JP"
		weekStart={0}
		label="Japanese — week starts Sunday"
		labelStyle="placeholder"
	/>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: flex-start;
	}
</style>
