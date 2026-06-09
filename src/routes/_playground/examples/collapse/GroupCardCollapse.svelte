<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
	import { QuestionIcon, UserIcon, CreditCardIcon } from 'phosphor-svelte';
</script>

<Collapse.Group
	type="single"
	layout="card"
	color="primary"
	title="FAQ"
	footer="Still have questions? Email us."
>
	<Collapse.Root key="a">
		<Collapse.Trigger>
			<Collapse.Icon><QuestionIcon size={18} /></Collapse.Icon>
			<Collapse.Title>What is sveltastic-ui?</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>A Svelte 5 + Tailwind v4 component kit.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="b">
		<Collapse.Trigger>
			<Collapse.Icon><UserIcon size={18} /></Collapse.Icon>
			<Collapse.Title>How do I sign in?</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Use the email from your invite.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="c">
		<Collapse.Trigger>
			<Collapse.Icon><CreditCardIcon size={18} /></Collapse.Icon>
			<Collapse.Title>Billing</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Monthly invoices.</p></Collapse.Content>
	</Collapse.Root>
</Collapse.Group>
