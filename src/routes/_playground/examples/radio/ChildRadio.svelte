<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';

	let plan = $state('pro');
</script>

<!-- child snippet: receive the merged props and render your own group container. -->
<RadioGroup.Root bind:value={plan} orientation="horizontal" ariaLabel="Plan">
	{#snippet child({ props })}
		<fieldset {...props} class="plan">
			<legend>Choose a plan</legend>
			<RadioGroup.Item value="free">
				<RadioGroup.Indicator />
				<RadioGroup.Label>Free</RadioGroup.Label>
			</RadioGroup.Item>
			<RadioGroup.Item value="pro">
				<RadioGroup.Indicator />
				<RadioGroup.Label>Pro</RadioGroup.Label>
			</RadioGroup.Item>
			<RadioGroup.Item value="team">
				<RadioGroup.Indicator />
				<RadioGroup.Label>Team</RadioGroup.Label>
			</RadioGroup.Item>
		</fieldset>
	{/snippet}
</RadioGroup.Root>
<p class="selected">Selected: {plan}</p>

<style>
	.plan {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		border: 1px solid rgb(var(--text) / 0.15);
		border-radius: 12px;
		padding: 0.75rem 1rem 1rem;
	}
	.plan legend {
		padding: 0 0.4rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.6;
	}
	.selected {
		margin: 0.5rem 0 0;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
