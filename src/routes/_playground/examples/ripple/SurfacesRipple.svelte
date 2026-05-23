<script lang="ts">
	import { ripple } from 'sveltastic-ui';
</script>

<div class="card" use:ripple={{ color: 'primary' }}>
	<strong>Card host</strong>
	<span>Click to ripple</span>
</div>
<div class="circle" use:ripple={{ color: 'danger' }} aria-label="circular ripple host">♥</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding: 0.85rem 1rem;
		min-width: 220px;
		border-radius: 12px;
		background: rgb(var(--gray-1));
		cursor: pointer;
	}
	.circle {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: rgb(var(--gray-2));
		cursor: pointer;
	}
</style>
