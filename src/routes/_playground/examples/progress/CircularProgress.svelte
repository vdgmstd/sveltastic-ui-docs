<script lang="ts">
	import { Progress } from 'sveltastic-ui';
</script>

<Progress shape="circular" value={25} />
<Progress shape="circular" value={60} color="success" size={72} thickness={8} />
<Progress shape="circular" value={90} color="danger" size={88} thickness={10} />
<Progress shape="circular" indeterminate color="warning" />
