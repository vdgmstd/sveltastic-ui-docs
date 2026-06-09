<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="row">
	<button class="link">Profile</button>
	<Divider.Root orientation="vertical" />
	<button class="link">Settings</button>
	<Divider.Root orientation="vertical" />
	<button class="link">Logout</button>
</div>

<style>
	.row {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		border-radius: 12px;
		background: rgb(var(--gray-1));
	}
	.link {
		background: none;
		border: 0;
		cursor: pointer;
		color: inherit;
		padding: 0.25rem 0.4rem;
		font-size: 0.9rem;
	}
	.link:hover {
		color: rgb(var(--primary));
	}
</style>
