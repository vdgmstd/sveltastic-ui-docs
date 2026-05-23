<script lang="ts">
	import { Calendar } from 'sveltastic-ui';
</script>

<div class="surface">
	<Calendar value="2026-04-15" variant="transparent" />
</div>

<style>
	.surface {
		display: inline-block;
		padding: 16px;
		border-radius: 24px;
		background: linear-gradient(135deg, rgb(var(--primary) / 0.18), rgb(var(--primary) / 0.06));
		border: 1px solid rgb(var(--primary) / 0.22);
	}
</style>
