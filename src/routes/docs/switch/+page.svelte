<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/SwitchSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import switchApi from 'sveltastic-ui/components/Switch/Switch.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Switch"
	api={switchApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <switch>'s root element."
/>
