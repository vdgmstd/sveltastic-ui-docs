<script lang="ts">
	import { Collapse, CollapseGroup } from 'sveltastic-ui';
	import { QuestionIcon, UserIcon, CreditCardIcon } from 'phosphor-svelte';
</script>

<CollapseGroup mode="single" layout="card" color="primary" title="FAQ">
	{#snippet footer()}
		<span>Still have questions? Email us.</span>
	{/snippet}
	<Collapse key="a" title="What is sveltastic-ui?">
		{#snippet icon()}<QuestionIcon size={18} />{/snippet}
		<p>A Svelte 5 + Tailwind v4 component kit.</p>
	</Collapse>
	<Collapse key="b" title="How do I sign in?">
		{#snippet icon()}<UserIcon size={18} />{/snippet}
		<p>Use the email from your invite.</p>
	</Collapse>
	<Collapse key="c" title="Billing">
		{#snippet icon()}<CreditCardIcon size={18} />{/snippet}
		<p>Monthly invoices.</p>
	</Collapse>
</CollapseGroup>
