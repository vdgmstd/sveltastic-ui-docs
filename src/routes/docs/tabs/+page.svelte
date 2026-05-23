<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import {
		Tabs,
		Avatar,
		Chip,
		List,
		ListItem,
		Button
	} from 'sveltastic-ui';
	import {
		HouseIcon,
		ChartLineIcon,
		EyeIcon,
		ClockCounterClockwiseIcon
	} from 'phosphor-svelte';

	const t = (key: string) => i18n.t(key);

	let basic = $state('overview');
	let vDefault = $state('overview');
	let vTonal = $state('overview');
	let vBorder = $state('overview');
	let vRelief = $state('overview');
	let composed = $state('overview');
	let success = $state('overview');
	let danger = $state('overview');
	let warning = $state('overview');
	let states = $state('overview');
	let keys = $state('overview');
	let cards = $state('overview');
	let slideTab = $state('overview');
	let icons = $state('overview');
	let block = $state('overview');
	let kitDemo = $state('users');
	let sizes = $state('overview');
	import ApiTable from '../_ApiTable.svelte';
	import tabsApi from 'sveltastic-ui/components/Tabs/Tabs.api.json';
	import tabApi from 'sveltastic-ui/components/Tabs/Tab.api.json';
	import tabListApi from 'sveltastic-ui/components/Tabs/TabList.api.json';
	import tabPanelApi from 'sveltastic-ui/components/Tabs/TabPanel.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.tabs.title')}</h2>
	<p>{t('playground.tabs.description')}</p>
</header>

<div class="block">
	<h3>{t('playground.tabs.basic.label')}</h3>
	<p class="hint">{t('playground.tabs.basic.hint')}</p>
	<Tabs bind:value={basic}>
		<Tabs.List ariaLabel="Basic tabs">
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="details"><p>{t('playground.tabs.panes.detailsBody')}</p></Tabs.Panel>
		<Tabs.Panel value="preview"><p>{t('playground.tabs.panes.previewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.variants.label')}</h3>
	<p class="hint">{t('playground.tabs.variants.hint')}</p>
	<div class="stack">
		<Tabs bind:value={vDefault} variant="default">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={vTonal} variant="tonal">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={vBorder} variant="border">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={vRelief} variant="relief">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	</div>
</div>

<div class="block">
	<h3>{t('playground.tabs.sizes.label')}</h3>
	<p class="hint">{t('playground.tabs.sizes.hint')}</p>
	<div class="stack">
		<Tabs bind:value={sizes} variant="tonal" size="xl">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={sizes} variant="tonal" size="large">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={sizes} variant="tonal" size="medium">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={sizes} variant="tonal" size="small">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={sizes} variant="tonal" size="mini">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
				<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	</div>
</div>

<div class="block">
	<h3>{t('playground.tabs.icons.label')}</h3>
	<p class="hint">{t('playground.tabs.icons.hint')}</p>
	<Tabs bind:value={icons} variant="tonal">
		<Tabs.List>
			<Tabs.Tab value="overview">
				{#snippet icon()}<HouseIcon size={16} />{/snippet}
				{t('playground.tabs.panes.overview')}
			</Tabs.Tab>
			<Tabs.Tab value="details">
				{#snippet icon()}<ChartLineIcon size={16} />{/snippet}
				{t('playground.tabs.panes.details')}
			</Tabs.Tab>
			<Tabs.Tab value="preview">
				{#snippet icon()}<EyeIcon size={16} />{/snippet}
				{t('playground.tabs.panes.preview')}
			</Tabs.Tab>
			<Tabs.Tab value="history">
				{#snippet icon()}<ClockCounterClockwiseIcon size={16} />{/snippet}
				{t('playground.tabs.panes.history')}
			</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="details"><p>{t('playground.tabs.panes.detailsBody')}</p></Tabs.Panel>
		<Tabs.Panel value="preview"><p>{t('playground.tabs.panes.previewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.block.label')}</h3>
	<p class="hint">{t('playground.tabs.block.hint')}</p>
	<Tabs bind:value={block} variant="default">
		<Tabs.List block>
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
		</Tabs.List>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.cardPanels.label')}</h3>
	<p class="hint">{t('playground.tabs.cardPanels.hint')}</p>
	<Tabs bind:value={cards} variant="tonal" panelVariant="card" transition="crossfade">
		<Tabs.List>
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview">
			<h4 class="panel-title">{t('playground.tabs.panes.overview')}</h4>
			<p>{t('playground.tabs.panes.overviewBody')}</p>
		</Tabs.Panel>
		<Tabs.Panel value="details">
			<h4 class="panel-title">{t('playground.tabs.panes.details')}</h4>
			<p>{t('playground.tabs.panes.detailsBody')}</p>
		</Tabs.Panel>
		<Tabs.Panel value="preview">
			<h4 class="panel-title">{t('playground.tabs.panes.preview')}</h4>
			<p>{t('playground.tabs.panes.previewBody')}</p>
		</Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.slide.label')}</h3>
	<p class="hint">{t('playground.tabs.slide.hint')}</p>
	<Tabs bind:value={slideTab} variant="default" panelVariant="card" transition="slide">
		<Tabs.List>
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="details"><p>{t('playground.tabs.panes.detailsBody')}</p></Tabs.Panel>
		<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.composed.label')}</h3>
	<p class="hint">{t('playground.tabs.composed.hint')}</p>
	<Tabs bind:value={kitDemo} variant="tonal" panelVariant="card" transition="crossfade">
		<Tabs.List>
			<Tabs.Tab value="users">Users</Tabs.Tab>
			<Tabs.Tab value="badges">Badges</Tabs.Tab>
			<Tabs.Tab value="actions">Actions</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="users">
			<List variant="transparent">
				<ListItem>
					{#snippet lead()}<Avatar text="JD" color="primary" size={32} />{/snippet}
					{#snippet trail()}<Chip variant="flat" color="primary">admin</Chip>{/snippet}
					Joana Doe
				</ListItem>
				<ListItem>
					{#snippet lead()}<Avatar text="MK" color="success" size={32} />{/snippet}
					{#snippet trail()}<Chip variant="flat" color="success">editor</Chip>{/snippet}
					Marc Kowalski
				</ListItem>
			</List>
		</Tabs.Panel>
		<Tabs.Panel value="badges">
			<div class="row">
				<Chip color="primary">primary</Chip>
				<Chip color="success" variant="flat">success</Chip>
				<Chip color="danger" variant="flat">danger</Chip>
				<Chip color="warning" variant="flat">warning</Chip>
			</div>
		</Tabs.Panel>
		<Tabs.Panel value="actions">
			<div class="row">
				<Button color="primary">Save</Button>
				<Button variant="flat" color="primary">Edit</Button>
				<Button variant="border" color="danger">Delete</Button>
			</div>
		</Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.composition.label')}</h3>
	<p class="hint">{t('playground.tabs.composition.hint')}</p>
	<Tabs bind:value={composed}>
		<div class="composition">
			<header class="composition__header">
				<Tabs.List ariaLabel="Composition demo">
					<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
					<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
					<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
				</Tabs.List>
			</header>
			<aside class="composition__aside">arbitrary content between trigger and panel</aside>
			<main class="composition__main">
				<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
				<Tabs.Panel value="details"><p>{t('playground.tabs.panes.detailsBody')}</p></Tabs.Panel>
				<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
			</main>
		</div>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.colors.label')}</h3>
	<div class="grid">
		<Tabs bind:value={success} color="success" variant="default">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={danger} color="danger" variant="tonal">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
		<Tabs bind:value={warning} color="warning" variant="border">
			<Tabs.List>
				<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
				<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	</div>
</div>

<div class="block">
	<h3>{t('playground.tabs.states.label')}</h3>
	<Tabs bind:value={states} color="dark">
		<Tabs.List>
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="preview" disabled>{t('playground.tabs.panes.preview')}</Tabs.Tab>
			<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="preview"><p>{t('playground.tabs.panes.previewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
	</Tabs>
</div>

<div class="block">
	<h3>{t('playground.tabs.keyboard.label')}</h3>
	<p class="hint">{t('playground.tabs.keyboard.hint')}</p>
	<Tabs bind:value={keys} variant="tonal">
		<Tabs.List>
			<Tabs.Tab value="overview">{t('playground.tabs.panes.overview')}</Tabs.Tab>
			<Tabs.Tab value="details">{t('playground.tabs.panes.details')}</Tabs.Tab>
			<Tabs.Tab value="preview">{t('playground.tabs.panes.preview')}</Tabs.Tab>
			<Tabs.Tab value="history">{t('playground.tabs.panes.history')}</Tabs.Tab>
		</Tabs.List>
		<Tabs.Panel value="overview"><p>{t('playground.tabs.panes.overviewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="details"><p>{t('playground.tabs.panes.detailsBody')}</p></Tabs.Panel>
		<Tabs.Panel value="preview"><p>{t('playground.tabs.panes.previewBody')}</p></Tabs.Panel>
		<Tabs.Panel value="history"><p>{t('playground.tabs.panes.historyBody')}</p></Tabs.Panel>
	</Tabs>
</div>

<ApiTable
	title="Tabs"
	api={tabsApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <tabs>'s root element."
/>
<ApiTable
	title="Tab"
	api={tabApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <tab>'s root element."
/>
<ApiTable
	title="TabList"
	api={tabListApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <tablist>'s root element."
/>
<ApiTable
	title="TabPanel"
	api={tabPanelApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <tabpanel>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.block { margin-bottom: 2.5rem; }
	.block :global(> h3) { margin-bottom: 0.25rem; }
	.stack { display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
	.row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
	.hint { margin: 0 0 1rem; font-size: 0.78rem; opacity: 0.65; }
	.panel-title { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 600; }
	.composition {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-rows: auto 1fr;
		gap: 16px;
		padding: 16px;
		border: 1px dashed rgb(var(--text) / 0.12);
		border-radius: 12px;
	}
	.composition__header { grid-column: 1 / -1; }
	.composition__aside {
		font-size: 0.75rem;
		opacity: 0.6;
		padding: 8px 12px;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		align-self: start;
	}
	.composition__main { min-width: 0; }
</style>
