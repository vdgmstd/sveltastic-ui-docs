<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/PaginationSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import paginationApi from 'sveltastic-ui/components/Pagination/Pagination.api.json';
</script>

<DocHeader category="Form controls" />
<Section />
<ApiTable
	title="Pagination"
	api={paginationApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <pagination>'s root element."
/>
