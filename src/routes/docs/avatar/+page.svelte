<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import Section from '../../_playground/AvatarSection.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import avatarApi from 'sveltastic-ui/components/Avatar/Avatar.api.json';
	import avatarGroupApi from 'sveltastic-ui/components/Avatar/AvatarGroup.api.json';
</script>

<DocHeader category="Display" />
<Section />
<ApiTable
	title="Avatar"
	api={avatarApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <avatar>'s root element."
/>
<ApiTable
	title="AvatarGroup"
	api={avatarGroupApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <avatargroup>'s root element."
/>
