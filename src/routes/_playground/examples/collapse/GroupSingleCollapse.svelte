<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
	import { QuestionIcon, UserIcon, CreditCardIcon } from 'phosphor-svelte';

	let value = $state<string | null>('a');
</script>

<Collapse.Group type="single" variant="default" bind:value>
	<Collapse.Root key="a">
		<Collapse.Trigger>
			<Collapse.Icon><QuestionIcon size={18} /></Collapse.Icon>
			<Collapse.Title>What is sveltastic-ui?</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>A Svelte 5 + Tailwind v4 component kit, runes-only, no stores.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="b">
		<Collapse.Trigger>
			<Collapse.Icon><UserIcon size={18} /></Collapse.Icon>
			<Collapse.Title>How do I sign in?</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Use the email and password from your invite.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="c">
		<Collapse.Trigger>
			<Collapse.Icon><CreditCardIcon size={18} /></Collapse.Icon>
			<Collapse.Title>How is billing handled?</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Monthly invoices, paid by card or bank transfer.</p></Collapse.Content>
	</Collapse.Root>
</Collapse.Group>
