<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import TypesDateTimePicker from '../../_playground/examples/datetime-picker/TypesDateTimePicker.svelte';
	import SecondsDateTimePicker from '../../_playground/examples/datetime-picker/SecondsDateTimePicker.svelte';
	import Hour12DateTimePicker from '../../_playground/examples/datetime-picker/Hour12DateTimePicker.svelte';
	import LabelDateTimePicker from '../../_playground/examples/datetime-picker/LabelDateTimePicker.svelte';
	import IconPositionDateTimePicker from '../../_playground/examples/datetime-picker/IconPositionDateTimePicker.svelte';
	import CustomIconDateTimePicker from '../../_playground/examples/datetime-picker/CustomIconDateTimePicker.svelte';
	import ColorsDateTimePicker from '../../_playground/examples/datetime-picker/ColorsDateTimePicker.svelte';
	import StatesDateTimePicker from '../../_playground/examples/datetime-picker/StatesDateTimePicker.svelte';

	import typesSrc from '../../_playground/examples/datetime-picker/TypesDateTimePicker.svelte?raw';
	import secondsSrc from '../../_playground/examples/datetime-picker/SecondsDateTimePicker.svelte?raw';
	import hour12Src from '../../_playground/examples/datetime-picker/Hour12DateTimePicker.svelte?raw';
	import labelSrc from '../../_playground/examples/datetime-picker/LabelDateTimePicker.svelte?raw';
	import iconPositionSrc from '../../_playground/examples/datetime-picker/IconPositionDateTimePicker.svelte?raw';
	import customIconSrc from '../../_playground/examples/datetime-picker/CustomIconDateTimePicker.svelte?raw';
	import colorsSrc from '../../_playground/examples/datetime-picker/ColorsDateTimePicker.svelte?raw';
	import statesSrc from '../../_playground/examples/datetime-picker/StatesDateTimePicker.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{
			label: 'Types',
			description: 'A single polymorphic component. Pick a `type` — the right panel chunk is loaded on demand.',
			Component: TypesDateTimePicker,
			src: typesSrc
		},
		{
			label: t('playground.timePicker.withSeconds.label'),
			description: '`showSeconds` adds a third wheel for time-bearing types.',
			Component: SecondsDateTimePicker,
			src: secondsSrc
		},
		{
			label: '12-hour mode',
			description: '`hour12` toggles AM/PM display in the input + segmented switcher in the panel. The bound value stays 24-hour ISO.',
			Component: Hour12DateTimePicker,
			src: hour12Src
		},
		{
			label: 'With label',
			description: 'Floating / inline / static — same `label` / `labelStyle` props as the kit\'s Input.',
			Component: LabelDateTimePicker,
			src: labelSrc
		},
		{
			label: 'Icon position',
			description: '`iconPosition="before"` puts the glyph on the leading edge of the field.',
			Component: IconPositionDateTimePicker,
			src: iconPositionSrc
		},
		{
			label: 'Custom icon',
			description: 'Pass an `icon` snippet to override the default clock / calendar glyph.',
			Component: CustomIconDateTimePicker,
			src: customIconSrc
		},
		{
			label: t('playground.timePicker.colors.label'),
			description: 'Accent flows through input, calendar, time-wheels, and AM/PM segmented.',
			Component: ColorsDateTimePicker,
			src: colorsSrc
		},
		{
			label: t('playground.timePicker.states.label'),
			description: '`disabled` makes both trigger and panel inert; `readonly` keeps the value visible but blocks edits.',
			Component: StatesDateTimePicker,
			src: statesSrc
		}
	];
	import ApiTable from '../_ApiTable.svelte';
	import dateTimePickerApi from 'sveltastic-ui/components/DateTimePicker/DateTimePicker.api.json';
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.timePicker.title')}</h2>
	<p>{t('playground.timePicker.description')}</p>
</header>

{#each blocks as block (block.label)}
	<DemoBlock
		label={block.label}
		description={block.description}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="DateTimePicker"
	api={dateTimePickerApi}
	hint="Plus every native HTML attribute (id, aria-*, data-*, class, style, …) forwarded to <datetimepicker>'s root element."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
