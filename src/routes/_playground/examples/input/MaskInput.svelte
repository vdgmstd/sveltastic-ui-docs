<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let phone = $state('');
	let card = $state('');
	let date = $state('');
	let ip = $state('');
	let plate = $state('');
</script>

<Input.Root labelStyle="placeholder" bind:value={phone} mask="+# (###) ###-####">
	<Input.Control>
		<Input.Field />
		<Input.Label>Phone</Input.Label>
	</Input.Control>
</Input.Root>
<Input.Root labelStyle="inline" bind:value={card} mask="#### #### #### ####">
	<Input.Control>
		<Input.Field />
		<Input.Label>Card</Input.Label>
	</Input.Control>
</Input.Root>
<Input.Root labelStyle="placeholder" bind:value={date} mask="##.##.####">
	<Input.Control>
		<Input.Field />
		<Input.Label>Date</Input.Label>
	</Input.Control>
</Input.Root>
<Input.Root labelStyle="inline" bind:value={ip} mask={{ mask: '###.###.###.###', eager: true }}>
	<Input.Control>
		<Input.Field />
		<Input.Label>IP</Input.Label>
	</Input.Control>
</Input.Root>
<Input.Root
	labelStyle="placeholder"
	bind:value={plate}
	mask={{
		mask: 'A ### AA',
		tokens: { A: { pattern: /[A-Za-zА-Яа-я]/, transform: (c) => c.toUpperCase() } }
	}}
>
	<Input.Control>
		<Input.Field />
		<Input.Label>License plate</Input.Label>
	</Input.Control>
</Input.Root>
