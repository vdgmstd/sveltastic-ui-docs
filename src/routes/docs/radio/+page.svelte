<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/RadioSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import radioApi from 'sveltastic-ui/components/Radio/Radio.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Radio"
	api={radioApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <radio>'s root element."
/>
