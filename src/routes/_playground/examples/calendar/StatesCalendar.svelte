<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
</script>

<Calendar.Root type="single" value="2026-04-15" disabled />
<span class="muted">Disabled</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
