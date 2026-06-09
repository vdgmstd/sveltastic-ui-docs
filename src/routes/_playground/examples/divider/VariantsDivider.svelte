<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<span class="tag">solid</span>
	<Divider.Root variant="solid" />
	<span class="tag">dashed</span>
	<Divider.Root variant="dashed" />
	<span class="tag">dotted</span>
	<Divider.Root variant="dotted" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 320px;
	}
	.tag {
		font-size: 0.75rem;
		opacity: 0.6;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
</style>
