<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('2026-04-15');
	const dots = new Set([3, 9, 17, 24]);
</script>

<!-- day snippet: render your own cell content; state carries selection / today flags. -->
<Calendar.Root type="single" bind:value>
	{#snippet day(date, state)}
		<span class="cell" class:cell--today={state.isToday}>
			{date.day}
			{#if dots.has(date.day) && state.isCurrentMonth}
				<span class="dot"></span>
			{/if}
		</span>
	{/snippet}
</Calendar.Root>

<style>
	.cell {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	.cell--today {
		font-weight: 700;
	}
	.dot {
		position: absolute;
		bottom: 1px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: currentColor;
		opacity: 0.6;
	}
</style>
