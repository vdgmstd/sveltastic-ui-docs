<script lang="ts">
	import { Collapse, CollapseGroup } from 'sveltastic-ui';
	import { QuestionIcon, UserIcon, CreditCardIcon } from 'phosphor-svelte';

	let value = $state<string | null>('a');
</script>

<CollapseGroup mode="single" variant="default" bind:value>
	<Collapse key="a" title="What is sveltastic-ui?">
		{#snippet icon()}<QuestionIcon size={18} />{/snippet}
		<p>A Svelte 5 + Tailwind v4 component kit, runes-only, no stores.</p>
	</Collapse>
	<Collapse key="b" title="How do I sign in?">
		{#snippet icon()}<UserIcon size={18} />{/snippet}
		<p>Use the email and password from your invite.</p>
	</Collapse>
	<Collapse key="c" title="How is billing handled?">
		{#snippet icon()}<CreditCardIcon size={18} />{/snippet}
		<p>Monthly invoices, paid by card or bank transfer.</p>
	</Collapse>
</CollapseGroup>
