<script lang="ts">
	import { Alert } from 'sveltastic-ui';
</script>

<Alert variant="relief" color="primary">
	{#snippet title()}Relief{/snippet}
	Soft offset shadow — the default variant.
</Alert>

<Alert variant="gradient" color="success">
	{#snippet title()}Gradient{/snippet}
	A diagonal hue-shifted overlay over the base color.
</Alert>
