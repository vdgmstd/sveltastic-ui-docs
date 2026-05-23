<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';
	import { CalendarBlankIcon } from 'phosphor-svelte';

	let time = $state('19:30');
	let date = $state('');
</script>

<DateTimePicker type="time" bind:value={time} icon={calendarIcon} />
<DateTimePicker type="date" bind:value={date} icon={calendarIcon} />

{#snippet calendarIcon()}
	<CalendarBlankIcon size={18} weight="regular" />
{/snippet}
