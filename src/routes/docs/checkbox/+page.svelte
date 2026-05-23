<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/CheckboxSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import checkboxApi from 'sveltastic-ui/components/Checkbox/Checkbox.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Checkbox"
	api={checkboxApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <checkbox>'s root element."
/>
