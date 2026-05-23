<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicCalendar from '../../_playground/examples/calendar/BasicCalendar.svelte';
	import BoundCalendar from '../../_playground/examples/calendar/BoundCalendar.svelte';
	import RangeCalendar from '../../_playground/examples/calendar/RangeCalendar.svelte';
	import SizesCalendar from '../../_playground/examples/calendar/SizesCalendar.svelte';
	import LocaleCalendar from '../../_playground/examples/calendar/LocaleCalendar.svelte';
	import RestrictedCalendar from '../../_playground/examples/calendar/RestrictedCalendar.svelte';
	import ColorsCalendar from '../../_playground/examples/calendar/ColorsCalendar.svelte';
	import StatesCalendar from '../../_playground/examples/calendar/StatesCalendar.svelte';
	import TransparentCalendar from '../../_playground/examples/calendar/TransparentCalendar.svelte';

	import basicSrc from '../../_playground/examples/calendar/BasicCalendar.svelte?raw';
	import boundSrc from '../../_playground/examples/calendar/BoundCalendar.svelte?raw';
	import rangeSrc from '../../_playground/examples/calendar/RangeCalendar.svelte?raw';
	import sizesSrc from '../../_playground/examples/calendar/SizesCalendar.svelte?raw';
	import localeSrc from '../../_playground/examples/calendar/LocaleCalendar.svelte?raw';
	import restrictedSrc from '../../_playground/examples/calendar/RestrictedCalendar.svelte?raw';
	import colorsSrc from '../../_playground/examples/calendar/ColorsCalendar.svelte?raw';
	import statesSrc from '../../_playground/examples/calendar/StatesCalendar.svelte?raw';
	import transparentSrc from '../../_playground/examples/calendar/TransparentCalendar.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.calendar.basic.label', Component: BasicCalendar, src: basicSrc },
		{ labelKey: 'playground.calendar.bound.label', Component: BoundCalendar, src: boundSrc },
		{ labelKey: 'playground.calendar.range.label', Component: RangeCalendar, src: rangeSrc },
		{ labelKey: 'playground.calendar.sizes.label', Component: SizesCalendar, src: sizesSrc },
		{ labelKey: 'playground.calendar.locale.label', Component: LocaleCalendar, src: localeSrc },
		{ labelKey: 'playground.calendar.restricted.label', Component: RestrictedCalendar, src: restrictedSrc },
		{ labelKey: 'playground.calendar.colors.label', Component: ColorsCalendar, src: colorsSrc },
		{ labelKey: 'playground.calendar.states.label', Component: StatesCalendar, src: statesSrc },
		{
			labelKey: 'playground.calendar.transparent.label',
			hintKey: 'playground.calendar.transparent.hint',
			Component: TransparentCalendar,
			src: transparentSrc
		}
	];
	import ApiTable from '../_ApiTable.svelte';
	import calendarApi from 'sveltastic-ui/components/Calendar/Calendar.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.calendar.title')}</h2>
	<p>{t('playground.calendar.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={block.hintKey ? t(block.hintKey) : undefined}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="Calendar"
	api={calendarApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <calendar>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
