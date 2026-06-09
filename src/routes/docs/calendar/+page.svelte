<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';
	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	import BasicCalendar from '../../_playground/examples/calendar/BasicCalendar.svelte';
	import BoundCalendar from '../../_playground/examples/calendar/BoundCalendar.svelte';
	import RangeCalendar from '../../_playground/examples/calendar/RangeCalendar.svelte';
	import EventsCalendar from '../../_playground/examples/calendar/EventsCalendar.svelte';
	import ComposedCalendar from '../../_playground/examples/calendar/ComposedCalendar.svelte';
	import CustomDayCalendar from '../../_playground/examples/calendar/CustomDayCalendar.svelte';
	import ReadonlyCalendar from '../../_playground/examples/calendar/ReadonlyCalendar.svelte';
	import SizesCalendar from '../../_playground/examples/calendar/SizesCalendar.svelte';
	import LocaleCalendar from '../../_playground/examples/calendar/LocaleCalendar.svelte';
	import RestrictedCalendar from '../../_playground/examples/calendar/RestrictedCalendar.svelte';
	import ColorsCalendar from '../../_playground/examples/calendar/ColorsCalendar.svelte';
	import StatesCalendar from '../../_playground/examples/calendar/StatesCalendar.svelte';
	import TransparentCalendar from '../../_playground/examples/calendar/TransparentCalendar.svelte';

	import basicSrc from '../../_playground/examples/calendar/BasicCalendar.svelte?raw';
	import boundSrc from '../../_playground/examples/calendar/BoundCalendar.svelte?raw';
	import rangeSrc from '../../_playground/examples/calendar/RangeCalendar.svelte?raw';
	import eventsSrc from '../../_playground/examples/calendar/EventsCalendar.svelte?raw';
	import composedSrc from '../../_playground/examples/calendar/ComposedCalendar.svelte?raw';
	import customDaySrc from '../../_playground/examples/calendar/CustomDayCalendar.svelte?raw';
	import readonlySrc from '../../_playground/examples/calendar/ReadonlyCalendar.svelte?raw';
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
		{
			labelKey: 'playground.calendar.events.label',
			hintKey: 'playground.calendar.events.hint',
			Component: EventsCalendar,
			src: eventsSrc
		},
		{
			labelKey: 'playground.calendar.composed.label',
			hintKey: 'playground.calendar.composed.hint',
			Component: ComposedCalendar,
			src: composedSrc
		},
		{
			labelKey: 'playground.calendar.customDay.label',
			hintKey: 'playground.calendar.customDay.hint',
			Component: CustomDayCalendar,
			src: customDaySrc
		},
		{
			labelKey: 'playground.calendar.readonly.label',
			hintKey: 'playground.calendar.readonly.hint',
			Component: ReadonlyCalendar,
			src: readonlySrc
		},
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

	const rootApi: ApiProp[] = [
		{ name: 'type', type: "'single' | 'range'", required: false, default: "'single'", description: 'Selection mode. Discriminates the value type (string vs DateRange).' },
		{ name: 'value', type: 'string | DateRange', required: false, default: '$bindable()', description: 'Bound selection — a YYYY-MM-DD string in single mode, a { from, to } DateRange in range mode.' },
		{ name: 'placeholder', type: 'DateLike', required: false, default: '$bindable()', description: 'Controlled view month (YYYY-MM-DD); two-way bindable. Drives which month / year the grid shows.' },
		{ name: 'locale', type: 'string', required: false, default: "'en-US'", description: 'Locale for weekday / month labels.' },
		{ name: 'weekStart', type: 'WeekStart', required: false, default: null, description: "First day of the week (0=Sunday … 6=Saturday). Defaults to the locale's convention." },
		{ name: 'weekdayFormat', type: "'short' | 'narrow' | 'long'", required: false, default: "'short'", description: 'Weekday header label width.' },
		{ name: 'min', type: 'DateLike', required: false, default: null, description: 'Lower bound (inclusive).' },
		{ name: 'max', type: 'DateLike', required: false, default: null, description: 'Upper bound (inclusive).' },
		{ name: 'disabledDate', type: '(date: Temporal.PlainDate) => boolean', required: false, default: null, description: 'Predicate to disable individual days.' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the entire calendar.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Block selection while keeping the calendar interactive for navigation.' },
		{ name: 'size', type: 'Size', required: false, default: "'medium'", description: "Visual size — 'xl' | 'large' | 'medium' | 'small' | 'mini'." },
		{ name: 'bare', type: 'boolean', required: false, default: 'false', description: 'Drop the calendar background, padding, and radius — useful when embedded in a surface that already provides chrome (Dialog, Menu, Card).' },
		{ name: 'variant', type: "'default' | 'transparent'", required: false, default: "'default'", description: "Visual variant. 'transparent' drops the background only (padding and radius kept) so the calendar inherits the surface it sits on." },
		{ name: 'color', type: "'primary' | 'warning'", required: false, default: "'primary'", description: 'Calendar chrome accent. Use dayColor for per-day overrides.' },
		{ name: 'dayColor', type: '(date: Temporal.PlainDate) => Color | undefined', required: false, default: null, description: "Per-day color override. Returning undefined keeps the calendar's color." },
		{ name: 'showFooter', type: 'boolean', required: false, default: 'false', description: 'Show the "Today" / "Clear" footer.' },
		{ name: 'todayLabel', type: 'string', required: false, default: "'Today'", description: 'Footer "Today" button label.' },
		{ name: 'clearLabel', type: 'string', required: false, default: "'Clear'", description: 'Footer "Clear" button label.' },
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Calendar'", description: 'Accessible label for the calendar group.' },
		{ name: 'day', type: 'Snippet<[Temporal.PlainDate, CalendarDayState]>', required: false, default: null, description: 'Custom day renderer — receives the date and its day-state flags (today / selected / range / current-month) for per-cell content.' },
		{ name: 'onValueChange', type: '(value: string | DateRange) => void', required: false, default: null, description: 'Fires whenever the selection changes (kit controlled-state idiom).' },
		{ name: 'onValueChangeComplete', type: '(value: string | DateRange) => void', required: false, default: null, description: 'Fires after the selection pill / slide settles.' },
		{ name: 'onPlaceholderChange', type: '(value: string) => void', required: false, default: null, description: 'Fires when the view month changes.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the root element.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the root.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the root.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Compose Calendar.Header / Calendar.Grid (and their sub-parts) here. When omitted, the default month view renders.' }
	];

	const headerApi: ApiProp[] = [
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Header content. Omit for the default PrevButton + Heading + NextButton row.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the header element; spread the merged props it hands you.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the header element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the header element.' }
	];

	const headingApi: ApiProp[] = [
		{ name: 'caretPx', type: 'number', required: false, default: '11', description: 'Caret glyph size in px. Auto-supplied to match the size when rendered by the default Header.' }
	];

	const prevButtonApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Previous'", description: 'Accessible label for the previous-month button.' },
		{ name: 'iconPx', type: 'number', required: false, default: '14', description: 'Glyph size in px. Auto-supplied to match the size when rendered by the default Header.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom button glyph (replaces the default caret).' }
	];

	const nextButtonApi: ApiProp[] = [
		{ name: 'ariaLabel', type: 'string', required: false, default: "'Next'", description: 'Accessible label for the next-month button.' },
		{ name: 'iconPx', type: 'number', required: false, default: '14', description: 'Glyph size in px. Auto-supplied to match the size when rendered by the default Header.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom button glyph (replaces the default caret).' }
	];

	const gridApi: ApiProp[] = [
		{ name: 'gap', type: 'number', required: false, default: '2', description: 'Per-cell gap in px (drives pill geometry). Auto-supplied to match the size when rendered by Root.' },
		{ name: 'cellH', type: 'number', required: false, default: '32', description: 'Row height in px. Auto-supplied to match the size when rendered by Root.' },
		{ name: 'pill', type: 'number', required: false, default: '28', description: 'Selection-pill width in px. Auto-supplied to match the size when rendered by Root.' },
		{ name: 'day', type: 'Snippet<[Temporal.PlainDate, CalendarDayState]>', required: false, default: null, description: 'Custom day renderer, forwarded to the grid body.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Grid content. Omit for the default weekday row + GridBody.' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the grid element; spread the merged props it hands you.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the grid element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the grid element.' }
	];

	const gridBodyApi: ApiProp[] = [
		{ name: 'gap', type: 'number', required: false, default: '2', description: 'Per-cell gap in px (drives pill geometry).' },
		{ name: 'cellH', type: 'number', required: false, default: '32', description: 'Row height in px.' },
		{ name: 'pill', type: 'number', required: false, default: '28', description: 'Selection-pill width in px.' },
		{ name: 'day', type: 'Snippet<[Temporal.PlainDate, CalendarDayState]>', required: false, default: null, description: 'Custom day renderer.' }
	];

	const cellApi: ApiProp[] = [
		{ name: 'date', type: 'Temporal.PlainDate', required: true, default: null, description: 'The day this cell wraps — mirrors the day-state onto data-* (selected / today / outside-month / disabled / range-start / range-end / in-range / preview).' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Cell content (typically a Calendar.Day).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the cell element; spread the merged props it hands you.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the cell element.' },
		{ name: 'ref', type: 'HTMLDivElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the cell element.' }
	];

	const dayApi: ApiProp[] = [
		{ name: 'date', type: 'Temporal.PlainDate', required: true, default: null, description: 'The day this button represents — drives every data-* state (selected / current / in-range / range-start / range-end / preview / muted / disabled) from root state.' },
		{ name: 'color', type: 'Color', required: false, default: null, description: 'Per-day accent override. Falls back to the root color.' },
		{ name: 'children', type: 'Snippet', required: false, default: null, description: 'Custom day label (replaces the default day number).' },
		{ name: 'child', type: 'Snippet<[{ props }]>', required: false, default: null, description: 'Render-delegation (bits-ui v2 child): replaces the day button; spread the merged gridcell props it hands you.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the day button.' },
		{ name: 'ref', type: 'HTMLButtonElement | null', required: false, default: '$bindable(null)', description: 'Bindable ref to the day button.' }
	];
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
	title="Calendar.Root"
	api={rootApi}
	hint="The shell. All selection / view / visual config and bind:value + onValueChange live here and flow to the parts via context. Generic over the value and discriminated on type. Publishes data-view / data-type / data-disabled / data-readonly hooks. Omit children for the default month view, or compose Calendar.Header / Calendar.Grid yourself. Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to the root element."
/>
<ApiTable
	title="Calendar.Header"
	api={headerApi}
	hint="The navigation row above the grid. Renders Calendar.PrevButton + Calendar.Heading + Calendar.NextButton by default; pass children to re-arrange them. Publishes a data-disabled hook. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Calendar.Heading"
	api={headingApi}
	hint="The month / year chips inside Calendar.Header. Clicking a chip steps the view between days → months → years; the chip text crossfades on change."
/>
<ApiTable
	title="Calendar.PrevButton"
	api={prevButtonApi}
	hint="The icon-only button that steps the view back one month / page. Disabled with the calendar."
/>
<ApiTable
	title="Calendar.NextButton"
	api={nextButtonApi}
	hint="The icon-only button that steps the view forward one month / page. Disabled with the calendar."
/>
<ApiTable
	title="Calendar.Grid"
	api={gridApi}
	hint="The month grid (role=grid). Renders the weekday header row + Calendar.GridBody by default; pass children to hand-author the grid. Publishes a data-disabled hook and owns the grid keyboard map. Plus every native HTML attribute forwarded to the element."
/>
<ApiTable
	title="Calendar.GridBody"
	api={gridBodyApi}
	hint="The animated rows of Calendar.Day cells, plus the selection-pill / range-body layer. Reads the visible weeks from root state."
/>
<ApiTable
	title="Calendar.Cell"
	api={cellApi}
	hint="A single day slot (role=presentation). Mirrors the day-state onto data-* attributes; wraps a Calendar.Day."
/>
<ApiTable
	title="Calendar.Day"
	api={dayApi}
	hint="A selectable day button (role=gridcell). Renders the day number with ripple + press-bounce by default, keyed to roving focus. Publishes the full data-* state matrix (selected / current / in-range / range-start / range-end / preview / muted / disabled)."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
