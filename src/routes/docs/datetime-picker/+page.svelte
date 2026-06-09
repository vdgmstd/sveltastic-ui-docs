<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import TypesDateTimePicker from '../../_playground/examples/datetime-picker/TypesDateTimePicker.svelte';
	import SecondsDateTimePicker from '../../_playground/examples/datetime-picker/SecondsDateTimePicker.svelte';
	import Hour12DateTimePicker from '../../_playground/examples/datetime-picker/Hour12DateTimePicker.svelte';
	import LabelDateTimePicker from '../../_playground/examples/datetime-picker/LabelDateTimePicker.svelte';
	import LocaleDateTimePicker from '../../_playground/examples/datetime-picker/LocaleDateTimePicker.svelte';
	import RestrictedDateTimePicker from '../../_playground/examples/datetime-picker/RestrictedDateTimePicker.svelte';
	import IconPositionDateTimePicker from '../../_playground/examples/datetime-picker/IconPositionDateTimePicker.svelte';
	import CustomIconDateTimePicker from '../../_playground/examples/datetime-picker/CustomIconDateTimePicker.svelte';
	import PlacementDateTimePicker from '../../_playground/examples/datetime-picker/PlacementDateTimePicker.svelte';
	import EventsDateTimePicker from '../../_playground/examples/datetime-picker/EventsDateTimePicker.svelte';
	import ColorsDateTimePicker from '../../_playground/examples/datetime-picker/ColorsDateTimePicker.svelte';
	import StatesDateTimePicker from '../../_playground/examples/datetime-picker/StatesDateTimePicker.svelte';

	import typesSrc from '../../_playground/examples/datetime-picker/TypesDateTimePicker.svelte?raw';
	import secondsSrc from '../../_playground/examples/datetime-picker/SecondsDateTimePicker.svelte?raw';
	import hour12Src from '../../_playground/examples/datetime-picker/Hour12DateTimePicker.svelte?raw';
	import labelSrc from '../../_playground/examples/datetime-picker/LabelDateTimePicker.svelte?raw';
	import localeSrc from '../../_playground/examples/datetime-picker/LocaleDateTimePicker.svelte?raw';
	import restrictedSrc from '../../_playground/examples/datetime-picker/RestrictedDateTimePicker.svelte?raw';
	import iconPositionSrc from '../../_playground/examples/datetime-picker/IconPositionDateTimePicker.svelte?raw';
	import customIconSrc from '../../_playground/examples/datetime-picker/CustomIconDateTimePicker.svelte?raw';
	import placementSrc from '../../_playground/examples/datetime-picker/PlacementDateTimePicker.svelte?raw';
	import eventsSrc from '../../_playground/examples/datetime-picker/EventsDateTimePicker.svelte?raw';
	import colorsSrc from '../../_playground/examples/datetime-picker/ColorsDateTimePicker.svelte?raw';
	import statesSrc from '../../_playground/examples/datetime-picker/StatesDateTimePicker.svelte?raw';

	import ApiTable from '../_ApiTable.svelte';
	import type { ApiProp } from '../_ApiTable.svelte';

	const t = (key: string) => i18n.t(key);

	const rootApi: ApiProp[] = [
		{ name: 'type', type: "'time' | 'date' | 'datetime'", required: false, default: "'time'", description: 'What kind of value the field captures. Loads the matching panel (wheels, calendar, or both).' },
		{ name: 'value', type: 'string', required: false, default: "$bindable('')", description: "Bound value — 'HH:MM[:SS]' (time), 'YYYY-MM-DD' (date), 'YYYY-MM-DDTHH:MM[:SS]' (datetime)." },
		{ name: 'open', type: 'boolean', required: false, default: '$bindable(false)', description: 'Dropdown open state. Two-way bindable.' },
		{ name: 'closeOnClickOutside', type: 'boolean', required: false, default: 'true', description: 'Close the dropdown on an outside pointerdown.' },
		{ name: 'closeOnEsc', type: 'boolean', required: false, default: 'true', description: 'Close the dropdown on Escape.' },
		{ name: 'showSeconds', type: 'boolean', required: false, default: 'false', description: 'Add the seconds wheel + segment on time-bearing types.' },
		{ name: 'hour12', type: 'boolean', required: false, default: 'false', description: 'Render AM/PM and a 12-hour display. The bound value stays 24-hour ISO.' },
		{ name: 'locale', type: 'string', required: false, default: "'en-US'", description: "Calendar locale for month / weekday names (date-bearing types)." },
		{ name: 'weekStart', type: 'WeekStart', required: false, default: null, description: "First day of the week (0 = Sunday … 6). Defaults to the locale's convention." },
		{ name: 'min', type: 'DateLike', required: false, default: null, description: 'Lower bound for date-bearing types (inclusive).' },
		{ name: 'max', type: 'DateLike', required: false, default: null, description: 'Upper bound for date-bearing types (inclusive).' },
		{ name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the field and panel.' },
		{ name: 'readonly', type: 'boolean', required: false, default: 'false', description: 'Keep the value visible but inert — trigger and panel both blocked.' },
		{ name: 'color', type: 'Color', required: false, default: "'primary'", description: 'Palette accent for the input, calendar chrome, time wheels and AM/PM segmented.' },
		{ name: 'placeholder', type: 'string', required: false, default: null, description: 'Placeholder text for the trigger input.' },
		{ name: 'label', type: 'string', required: false, default: null, description: 'Field label.' },
		{ name: 'labelStyle', type: 'InputLabelStyle', required: false, default: null, description: "Label placement / behaviour, mirrors Input: 'default' | 'placeholder' | 'inline'." },
		{ name: 'ariaLabel', type: 'string', required: false, default: null, description: 'Accessible name for the field + panel when no visible label is set.' },
		{ name: 'block', type: 'boolean', required: false, default: 'false', description: 'Stretch the trigger to its container width.' },
		{ name: 'placement', type: 'PopoverPlacement', required: false, default: "'bottom-start'", description: 'Dropdown placement relative to the trigger.' },
		{ name: 'iconPosition', type: "'before' | 'after'", required: false, default: "'after'", description: 'Side of the field where the icon sits.' },
		{ name: 'mask', type: 'MaskOptions', required: false, default: null, description: 'Override the input mask. Defaults are derived from type, showSeconds and hour12.' },
		{ name: 'icon', type: 'Snippet', required: false, default: null, description: 'Custom icon glyph (render-prop). Falls back to a clock (time) or calendar (date / datetime).' },
		{ name: 'onValueChange', type: '(value: string) => void', required: false, default: null, description: 'Fires on every committed value change (kit controlled-state idiom).' },
		{ name: 'onOpenChange', type: '(open: boolean) => void', required: false, default: null, description: 'Fires whenever the dropdown open state changes.' },
		{ name: 'class', type: 'string', required: false, default: null, description: 'Class merged onto the trigger wrapper.' },
		{ name: 'style', type: 'string', required: false, default: null, description: 'Inline style merged onto the trigger wrapper.' }
	];

	const blocks = [
		{
			labelKey: 'playground.timePicker.types.label',
			hintKey: 'playground.timePicker.types.hint',
			Component: TypesDateTimePicker,
			src: typesSrc
		},
		{
			labelKey: 'playground.timePicker.withSeconds.label',
			hintKey: 'playground.timePicker.withSeconds.hint',
			Component: SecondsDateTimePicker,
			src: secondsSrc
		},
		{
			labelKey: 'playground.timePicker.hour12.label',
			hintKey: 'playground.timePicker.hour12.hint',
			Component: Hour12DateTimePicker,
			src: hour12Src
		},
		{
			labelKey: 'playground.timePicker.label.label',
			hintKey: 'playground.timePicker.label.hint',
			Component: LabelDateTimePicker,
			src: labelSrc
		},
		{
			labelKey: 'playground.timePicker.locale.label',
			hintKey: 'playground.timePicker.locale.hint',
			Component: LocaleDateTimePicker,
			src: localeSrc
		},
		{
			labelKey: 'playground.timePicker.restricted.label',
			hintKey: 'playground.timePicker.restricted.hint',
			Component: RestrictedDateTimePicker,
			src: restrictedSrc
		},
		{
			labelKey: 'playground.timePicker.iconPosition.label',
			hintKey: 'playground.timePicker.iconPosition.hint',
			Component: IconPositionDateTimePicker,
			src: iconPositionSrc
		},
		{
			labelKey: 'playground.timePicker.customIcon.label',
			hintKey: 'playground.timePicker.customIcon.hint',
			Component: CustomIconDateTimePicker,
			src: customIconSrc
		},
		{
			labelKey: 'playground.timePicker.placement.label',
			hintKey: 'playground.timePicker.placement.hint',
			Component: PlacementDateTimePicker,
			src: placementSrc
		},
		{
			labelKey: 'playground.timePicker.events.label',
			hintKey: 'playground.timePicker.events.hint',
			Component: EventsDateTimePicker,
			src: eventsSrc
		},
		{
			labelKey: 'playground.timePicker.colors.label',
			hintKey: 'playground.timePicker.colors.hint',
			Component: ColorsDateTimePicker,
			src: colorsSrc
		},
		{
			labelKey: 'playground.timePicker.states.label',
			hintKey: 'playground.timePicker.states.hint',
			Component: StatesDateTimePicker,
			src: statesSrc
		}
	];
</script>

<DocHeader category="Form controls" />

<header class="section__header">
	<h2>{t('playground.timePicker.title')}</h2>
	<p>{t('playground.timePicker.description')}</p>
</header>

{#each blocks as block (block.labelKey)}
	<DemoBlock
		label={t(block.labelKey)}
		description={t(block.hintKey)}
		codeLabel={t('playground.code.label')}
		Component={block.Component}
		src={block.src}
	/>
{/each}

<ApiTable
	title="DateTimePicker.Root"
	api={rootApi}
	hint="The single part — compose as <DateTimePicker.Root> (the field and panels are internal). One polymorphic field: set type to 'time' | 'date' | 'datetime' and bind:value. Plus every native HTML attribute (id, aria-*, data-*, …) forwarded to the trigger input."
/>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
</style>
