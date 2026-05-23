<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/ButtonSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import api from 'sveltastic-ui/components/Button/Button.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Button"
	{api}
	hint="Plus every native <button>/<a> HTML attribute (id, aria-*, data-*, class, style, …)."
/>
