<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('17:45');
	let datetime = $state('');
</script>

<DateTimePicker type="time" bind:value={time} hour12 />
<DateTimePicker type="datetime" bind:value={datetime} hour12 />
