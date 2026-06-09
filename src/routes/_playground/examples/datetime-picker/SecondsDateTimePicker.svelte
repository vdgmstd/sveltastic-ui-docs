<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('09:15:30');
	let datetime = $state('');
</script>

<DateTimePicker.Root type="time" bind:value={time} showSeconds />
<DateTimePicker.Root type="datetime" bind:value={datetime} showSeconds />
