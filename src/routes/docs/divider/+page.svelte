<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/DividerSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import dividerApi from 'sveltastic-ui/components/Divider/Divider.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Divider"
	api={dividerApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <divider>'s root element."
/>
