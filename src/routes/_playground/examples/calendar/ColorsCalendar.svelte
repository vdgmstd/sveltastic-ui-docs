<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
</script>

<Calendar.Root type="single" value="2026-04-15" size="large" color="primary" />
<Calendar.Root type="single" value="2026-04-15" color="warning" />
<Calendar.Root
	type="single"
	value="2026-04-15"
	size="small"
	dayColor={(d) => {
		if (d.dayOfWeek === 6 || d.dayOfWeek === 7) return 'danger';
		if (d.day % 7 === 0) return 'success';
		return undefined;
	}}
/>
