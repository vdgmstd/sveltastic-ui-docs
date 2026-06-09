<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(3);
</script>

<div class="col">
	<p>Render your own root with the merged prop bag — the kit shell, full custom body.</p>
	<!-- child replaces the root <div> + stepper body; props carry the input-number classes, data-* and ref. -->
	<InputNumber.Root bind:value min={0} max={20} color="primary">
		{#snippet child({ props })}
			<div {...props}>
				<input
					class="custom-field"
					type="number"
					min="0"
					max="20"
					bind:value
					aria-label="Quantity"
				/>
			</div>
		{/snippet}
	</InputNumber.Root>
	<p>
		<code>props</code> spread the <code>input-number</code> classes,
		<code>data-state</code>/<code>data-disabled</code> hooks, <code>style</code> and the bindable
		<code>ref</code>; the body is entirely yours.
	</p>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 340px;
	}
	p {
		margin: 0;
		opacity: 0.8;
	}
	code {
		font-family: var(--font-mono);
		font-size: 0.85em;
	}
	.custom-field {
		width: 8ch;
		padding: 7px 6px;
		text-align: center;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		font-variant-numeric: tabular-nums;
		outline: none;
	}
</style>
