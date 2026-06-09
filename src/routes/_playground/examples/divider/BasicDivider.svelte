<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<p>Above the divider.</p>
	<Divider.Root />
	<p>Below the divider.</p>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 320px;
	}
	p {
		margin: 0;
		opacity: 0.8;
	}
</style>
