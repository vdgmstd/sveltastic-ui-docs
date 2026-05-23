<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('08:00');
	let date = $state('');
	let datetime = $state('');
</script>

<DateTimePicker type="time" bind:value={time} label="Reminder time" labelStyle="placeholder" />
<DateTimePicker type="date" bind:value={date} label="Birthday" labelStyle="inline" />
<DateTimePicker type="datetime" bind:value={datetime} label="Meeting" />
