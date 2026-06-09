<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let a = $state('10:00');
	let b = $state('2026-04-28');
</script>

<div class="stack">
	<DateTimePicker.Root
		type="time"
		bind:value={a}
		placement="top-start"
		placeholder="Opens upward"
		ariaLabel="Reminder time"
		block
	/>
	<DateTimePicker.Root
		type="date"
		bind:value={b}
		placement="bottom-end"
		label="Block field"
		labelStyle="placeholder"
		block
	/>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 280px;
	}
</style>
