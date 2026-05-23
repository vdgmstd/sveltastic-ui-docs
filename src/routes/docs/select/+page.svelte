<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/SelectSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import selectApi from 'sveltastic-ui/components/Select/Select.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Select"
	api={selectApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <select>'s root element."
/>
