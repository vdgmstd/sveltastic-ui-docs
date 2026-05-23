<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<div class="item">
		<span class="avatar">A</span>
		<span class="label">Alpha</span>
	</div>
	<Divider inset="3rem" />
	<div class="item">
		<span class="avatar">B</span>
		<span class="label">Bravo</span>
	</div>
	<Divider inset="3rem" />
	<div class="item">
		<span class="avatar">C</span>
		<span class="label">Charlie</span>
	</div>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 320px;
	}
	.item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.25rem 0;
	}
	.avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: rgb(var(--primary) / 0.15);
		color: rgb(var(--primary));
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
	}
	.label {
		font-size: 0.9rem;
	}
</style>
