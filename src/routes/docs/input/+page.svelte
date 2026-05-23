<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/InputSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import inputApi from 'sveltastic-ui/components/Input/Input.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Input"
	api={inputApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <input>'s root element."
/>
