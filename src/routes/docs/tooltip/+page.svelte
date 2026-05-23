<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/TooltipSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import tooltipApi from 'sveltastic-ui/components/Tooltip/Tooltip.api.json';
</script>

<DocHeader category="Overlays & feedback" />
<Section />
<ApiTable
	title="Tooltip"
	api={tooltipApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <tooltip>'s root element."
/>
