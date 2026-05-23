<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/CardSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import cardApi from 'sveltastic-ui/components/Card/Card.api.json';
</script>

<DocHeader category="Display" />
<Section />
<ApiTable
	title="Card"
	api={cardApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <card>'s root element."
/>
