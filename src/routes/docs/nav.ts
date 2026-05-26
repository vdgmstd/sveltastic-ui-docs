export type DocCategory = 'Guide' | 'Form controls' | 'Display' | 'Overlays & feedback' | 'Composite' | 'Styling' | 'Actions';

export interface DocLink {
	slug: string;
	name: string;
	source: string;
	version: 'v4' | 'v3' | 'v1';
	category: DocCategory;
	/** Short one-line description shown on the docs index tile. */
	summary: string;
}

export const componentLinks: readonly DocLink[] = [
	{ slug: 'button', name: 'Button', source: 'Button', version: 'v1', category: 'Form controls', summary: 'Clickable trigger with variants, sizes, and loading state.' },
	{ slug: 'input', name: 'Input', source: 'Input', version: 'v1', category: 'Form controls', summary: 'Single-line text field with label, prefix, and validation.' },
	{ slug: 'input-number', name: 'Input Number', source: 'InputNumber', version: 'v1', category: 'Form controls', summary: 'Numeric input with steppers, clamping, and step control.' },
	{ slug: 'textarea', name: 'Textarea', source: 'TextArea', version: 'v1', category: 'Form controls', summary: 'Multi-line text field with autosize and char counter.' },
	{ slug: 'checkbox', name: 'Checkbox', source: 'CheckBox', version: 'v1', category: 'Form controls', summary: 'Binary toggle with indeterminate state and groups.' },
	{ slug: 'radio', name: 'Radio', source: 'Radio', version: 'v1', category: 'Form controls', summary: 'Mutually exclusive option inside a radio group.' },
	{ slug: 'segmented', name: 'Segmented', source: 'Segmented', version: 'v1', category: 'Form controls', summary: 'Compact segmented control with a sliding indicator.' },
	{ slug: 'switch', name: 'Switch', source: 'Switch', version: 'v1', category: 'Form controls', summary: 'On/off toggle with animated thumb and labels.' },
	{ slug: 'select', name: 'Select', source: 'Select', version: 'v1', category: 'Form controls', summary: 'Dropdown picker with single, multi, and async options.' },
	{ slug: 'slider', name: 'Slider', source: 'Slider', version: 'v1', category: 'Form controls', summary: 'Continuous or stepped value range with tooltips.' },
	{ slug: 'datetime-picker', name: 'DateTime', source: 'DateTimePicker', version: 'v1', category: 'Form controls', summary: 'Combined date and time selector with calendar popover.' },
	{ slug: 'calendar', name: 'Calendar', source: 'Calendar', version: 'v1', category: 'Form controls', summary: 'Inline month calendar with selection and disabled days.' },
	{ slug: 'upload', name: 'Upload', source: 'Upload', version: 'v1', category: 'Form controls', summary: 'File picker with drag-and-drop, previews, and progress.' },
	{ slug: 'chip', name: 'Chip', source: 'Chip', version: 'v1', category: 'Form controls', summary: 'Tag-like pill for labels, filters, and inline tokens.' },
	{ slug: 'collapse', name: 'Collapse', source: 'Collapse', version: 'v1', category: 'Form controls', summary: 'Expand and collapse a section with smooth height.' },
	{ slug: 'avatar', name: 'Avatar', source: 'Avatar', version: 'v1', category: 'Form controls', summary: 'User avatar with image fallback, initials, and groups.' },
	{ slug: 'progress', name: 'Progress', source: 'Progress', version: 'v1', category: 'Form controls', summary: 'Linear and circular determinate progress indicators.' },
	{ slug: 'list', name: 'List', source: 'List', version: 'v1', category: 'Form controls', summary: 'Vertically stacked, selectable item rows.' },
	{ slug: 'tabs', name: 'Tabs', source: 'Tabs', version: 'v1', category: 'Form controls', summary: 'Tabbed navigation with animated thumb across five variants.' },
	{ slug: 'pagination', name: 'Pagination', source: 'Pagination', version: 'v1', category: 'Form controls', summary: 'Page navigation for long, paged collections.' },
	{ slug: 'divider', name: 'Divider', source: 'Divider', version: 'v1', category: 'Form controls', summary: 'Horizontal or vertical visual separator with optional label.' },

	{ slug: 'card', name: 'Card', source: 'Card', version: 'v1', category: 'Display', summary: 'Container surface with header, body, image, and actions.' },

	{ slug: 'alert', name: 'Alert', source: 'Alert', version: 'v1', category: 'Overlays & feedback', summary: 'Banner for info, success, warning, and error states.' },
	{ slug: 'dialog', name: 'Dialog', source: 'Dialog', version: 'v1', category: 'Overlays & feedback', summary: 'Modal overlay with focus trap and scroll lock.' },
	{ slug: 'tooltip', name: 'Tooltip', source: 'Tooltip', version: 'v1', category: 'Overlays & feedback', summary: 'Contextual hint anchored and positioned to a target.' },
	{ slug: 'menu', name: 'Menu', source: 'Menu', version: 'v1', category: 'Overlays & feedback', summary: 'Floating list of actions with keyboard navigation.' },
	{ slug: 'notifications', name: 'Notifications', source: 'Notifications', version: 'v1', category: 'Overlays & feedback', summary: 'Imperative toast queue with positions and timeouts.' }
];

export interface HelperLink {
	slug: string;
	name: string;
	rationale: string;
	category: DocCategory;
	/** Short one-line description shown on the docs index tile. */
	summary: string;
}

export const helperLinks: readonly HelperLink[] = [
	{
		slug: 'scrollbar',
		name: 'Scrollbar',
		summary: 'Themed, auto-hiding scrollbars applied kit-wide.',
		rationale: 'Themed, auto-hiding scrollbars applied kit-wide via base styles. Customizable per-element via CSS variables.',
		category: 'Styling'
	},
	{
		slug: 'ripple',
		name: 'Ripple',
		summary: 'GPU-composited click bloom as a use:ripple action.',
		rationale: 'GPU-composited click bloom packaged as a `use:ripple` Svelte action. Drop on any host element.',
		category: 'Actions'
	},
	{
		slug: 'dates',
		name: 'Date utilities',
		summary: 'Temporal parsers and formatters for date components.',
		rationale: 'Temporal-based parsers, formatters and locale helpers powering Calendar and the picker family. Importable from `sveltastic-ui`.',
		category: 'Styling'
	},
	{
		slug: 'theme',
		name: 'Theme',
		summary: 'Reactive light/dark + RTL singleton with localStorage persistence.',
		rationale: 'Kit-wide theme and direction singleton. Reactive `theme.theme` / `theme.rtl`, persisted to localStorage, honours `prefers-color-scheme` on first load.',
		category: 'Styling'
	}
];

export interface GuideLink {
	slug: string;
	name: string;
	/** Short one-line description shown on the docs index tile. */
	summary: string;
}

export const guideLinks: readonly GuideLink[] = [
	{
		slug: 'getting-started',
		name: 'Getting Started',
		summary: 'Install the kit, import the tokens, and ship your first component.'
	}
];

export const allLinks = [
	...guideLinks.map((l) => ({ ...l, kind: 'guide' as const })),
	...componentLinks.map((l) => ({ ...l, kind: 'component' as const })),
	...helperLinks.map((l) => ({ ...l, kind: 'helper' as const }))
];
