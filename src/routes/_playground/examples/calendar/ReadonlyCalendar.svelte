<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
</script>

<!-- readonly: navigable but not selectable; weekStart + weekdayFormat tune the header row. -->
<Calendar.Root type="single" value="2026-04-15" readonly weekStart={1} weekdayFormat="narrow" />
<Calendar.Root type="single" value="2026-04-15" weekStart={0} weekdayFormat="long" size="large" />
