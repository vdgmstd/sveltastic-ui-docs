<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<Divider>Center</Divider>
	<Divider labelPlacement="start">Start</Divider>
	<Divider labelPlacement="end">End</Divider>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 320px;
	}
</style>
