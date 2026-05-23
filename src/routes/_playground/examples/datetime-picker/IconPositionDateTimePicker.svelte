<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('12:00');
	let date = $state('');
</script>

<DateTimePicker type="time" bind:value={time} iconPosition="before" />
<DateTimePicker type="date" bind:value={date} iconPosition="before" />
