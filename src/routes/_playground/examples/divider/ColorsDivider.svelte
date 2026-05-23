<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<Divider color="primary" />
	<Divider color="success" />
	<Divider color="danger" />
	<Divider color="warning" />
	<Divider color="#7d22f0" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 320px;
	}
</style>
