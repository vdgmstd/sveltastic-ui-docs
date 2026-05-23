<script lang="ts">
	import { ripple } from 'sveltastic-ui';
</script>

<button class="filled" use:ripple={{ color: 'primary', solidBg: true }}>Filled (solidBg)</button>
<button use:ripple={{ color: 'primary' }}>Flat (default)</button>

<style>
	.filled {
		background: rgb(var(--primary));
		color: white;
	}
</style>
