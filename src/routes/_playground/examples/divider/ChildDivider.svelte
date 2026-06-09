<script lang="ts">
	import { Divider } from 'sveltastic-ui';
</script>

<div class="col">
	<p>Render your own element with the merged prop bag.</p>
	<Divider.Root color="primary">
		{#snippet child({ props })}
			<hr {...props} class="custom" />
		{/snippet}
	</Divider.Root>
	<p>The <code>props</code> carry the divider's classes, <code>data-*</code> and ARIA.</p>
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
	code {
		font-family: var(--font-mono);
		font-size: 0.85em;
	}
	.custom {
		border-radius: 50vmax;
	}
</style>
