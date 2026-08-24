<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<Progress.Root shape="circular" value={70}>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root shape="circular" value={70} glow>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root shape="circular" value={70} glow color="danger" size={88}>
	<Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
