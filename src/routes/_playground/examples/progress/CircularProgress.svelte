<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<Progress.Root shape="circular" value={25}>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root shape="circular" value={60} color="success" size={72} thickness={8}>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root shape="circular" value={90} color="danger" size={88} thickness={10}>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root shape="circular" value={null} color="warning">
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
