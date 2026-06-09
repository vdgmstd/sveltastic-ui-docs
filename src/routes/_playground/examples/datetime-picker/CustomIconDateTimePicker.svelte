<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';
	import { AlarmIcon, CalendarHeartIcon } from 'phosphor-svelte';

	let time = $state('19:30');
	let date = $state('');
</script>

<DateTimePicker.Root type="time" bind:value={time} icon={alarmIcon} />
<DateTimePicker.Root type="date" bind:value={date} icon={calendarIcon} />

{#snippet alarmIcon()}
	<AlarmIcon size={18} weight="regular" />
{/snippet}

{#snippet calendarIcon()}
	<CalendarHeartIcon size={18} weight="regular" />
{/snippet}
