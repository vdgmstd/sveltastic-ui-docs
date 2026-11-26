<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let typed = $state('');
	let preset = $state('1992-12-25');
</script>

<div class="row">
	<DateTimePicker.Root
		type="date"
		bind:value={typed}
		format="DD-MM-YYYY"
		maskHint="ДД-ММ-ГГГГ"
		label="Localized ghost"
	/>
	<DateTimePicker.Root type="date" bind:value={preset} format="MM/DD/YYYY" label="US order" />
</div>

<dl class="status">
	<dt>DD-MM-YYYY → value</dt>
	<dd>{typed || '—'}</dd>
	<dt>MM/DD/YYYY → value</dt>
	<dd>{preset || '—'}</dd>
</dl>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: flex-start;
	}
	.status {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 4px 12px;
		margin: 12px 0 0;
		font-size: 0.8rem;
	}
	.status dt {
		color: rgb(var(--text) / 0.55);
		font-weight: 500;
	}
	.status dd {
		margin: 0;
		font-variant-numeric: tabular-nums;
	}
</style>
