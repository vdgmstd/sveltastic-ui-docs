<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('2026-04-15');
</script>

<!-- Compose the parts yourself: Header (PrevButton / Heading / NextButton) + Grid. -->
<Calendar.Root type="single" bind:value>
	<Calendar.Header />
	<Calendar.Grid />
</Calendar.Root>

<!-- Re-arrange the header parts; Heading carries the month / year chips. -->
<Calendar.Root type="single" bind:value color="warning">
	<Calendar.Header>
		<Calendar.PrevButton ariaLabel="Previous month" />
		<Calendar.NextButton ariaLabel="Next month" />
		<Calendar.Heading />
	</Calendar.Header>
	<Calendar.Grid />
</Calendar.Root>
