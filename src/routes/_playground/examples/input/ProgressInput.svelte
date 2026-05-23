<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let progress = $state(45);
	let pwd = $state('');
</script>

<Input placeholder="Password strength" {progress} bind:value={pwd} />
<input
	type="range"
	min="0"
	max="100"
	bind:value={progress}
	aria-label="Progress"
/>
<span class="muted">{progress}%</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
