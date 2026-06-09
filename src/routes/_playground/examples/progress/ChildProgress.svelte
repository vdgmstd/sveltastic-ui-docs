<script lang="ts">
	import { Progress } from 'sveltastic-ui';

	let value = $state(48);
</script>

<div class="col">
	<Progress.Root {value} color="primary">
		{#snippet child({ props })}
			<div {...props}>
				<div class="track">
					<div class="fill" style:width="{value}%"></div>
				</div>
				<span class="pct">{value}%</span>
			</div>
		{/snippet}
	</Progress.Root>
	<p class="muted">
		The <code>props</code> carry <code>role="progressbar"</code>, <code>aria-value*</code> and
		<code>data-state</code>; the markup is yours.
	</p>
	<input type="range" min="0" max="100" bind:value aria-label="Value" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
	.track {
		height: 6px;
		border-radius: 50vmax;
		background: rgb(var(--gray-3));
		overflow: hidden;
	}
	.fill {
		height: 100%;
		background: rgb(var(--primary));
		border-radius: inherit;
	}
	.pct {
		font-size: 0.8rem;
		opacity: 0.7;
	}
	.muted {
		margin: 0;
		font-size: 0.85rem;
		opacity: 0.7;
	}
	code {
		font-family: var(--font-mono);
		font-size: 0.85em;
	}
</style>
