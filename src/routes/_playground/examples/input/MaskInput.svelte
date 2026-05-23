<script lang="ts">
	import { Input } from 'sveltastic-ui';

	let phone = $state('');
	let card = $state('');
	let date = $state('');
	let ip = $state('');
	let plate = $state('');
</script>

<Input label="Phone" labelStyle="placeholder" bind:value={phone} mask="+1 (###) ###-####" />
<Input label="Card" labelStyle="inline" bind:value={card} mask="#### #### #### ####" />
<Input label="Date" labelStyle="placeholder" bind:value={date} mask="##.##.####" />
<Input
	label="IP"
	labelStyle="inline"
	bind:value={ip}
	mask={{ mask: '###.###.###.###', eager: true }}
/>
<Input
	label="License plate"
	labelStyle="placeholder"
	bind:value={plate}
	mask={{
		mask: 'A ### AA',
		tokens: { A: { pattern: /[A-Za-zА-Яа-я]/, transform: (c) => c.toUpperCase() } }
	}}
/>
