<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('12:00');
	let date = $state('');
</script>

<DateTimePicker.Root type="time" bind:value={time} iconPosition="before" />
<DateTimePicker.Root type="date" bind:value={date} iconPosition="before" />
