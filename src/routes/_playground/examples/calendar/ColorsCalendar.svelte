<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
</script>

<Calendar value="2026-04-15" size="large" color="primary" />
<Calendar value="2026-04-15" color="warning" />
<Calendar
	value="2026-04-15"
	size="small"
	dayColor={(d) => {
		if (d.dayOfWeek === 6 || d.dayOfWeek === 7) return 'danger';
		if (d.day % 7 === 0) return 'success';
		return undefined;
	}}
/>
