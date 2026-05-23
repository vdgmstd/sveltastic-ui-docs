<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import {
		toPlainDate,
		toPlainTime,
		toPlainDateTime,
		plainDateToISO,
		plainTimeToISO,
		plainDateTimeToISO,
		formatDate,
		formatTime,
		formatDateTime,
		formatMonthYear,
		resolveLocale,
		localeWeekStart,
		localeUses12Hour,
		today
	} from 'sveltastic-ui';

	const t = (key: string) => i18n.t(key);

	const locales = ['en-US', 'en-GB', 'ru-RU', 'ja-JP', 'fr-FR', 'de-DE'];
	const sample = toPlainDate('2026-04-15');
	const sampleTime = toPlainTime('14:30');
	const sampleDt = toPlainDateTime('2026-04-15T14:30');
</script>

<DocHeader category="Styling" />

<header class="section__header">
	<h2>{t('playground.dates.title')}</h2>
	<p>{t('playground.dates.description')}</p>
</header>

<div class="block">
	<h3>{t('playground.dates.parsing.label')}</h3>
	<p class="muted">{t('playground.dates.parsing.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Helper</th><th>Input</th><th>Output</th></tr>
		</thead>
		<tbody>
			<tr><td><code>toPlainDate</code></td><td><code>'2026-04-15'</code></td><td><code>{toPlainDate('2026-04-15')?.toString() ?? '—'}</code></td></tr>
			<tr><td><code>toPlainDate</code></td><td><code>new Date()</code></td><td><code>{toPlainDate(new Date())?.toString() ?? '—'}</code></td></tr>
			<tr><td><code>toPlainDate</code></td><td><code>'invalid'</code></td><td><code>{String(toPlainDate('invalid'))}</code></td></tr>
			<tr><td><code>toPlainTime</code></td><td><code>'14:30'</code></td><td><code>{toPlainTime('14:30')?.toString() ?? '—'}</code></td></tr>
			<tr><td><code>toPlainDateTime</code></td><td><code>'2026-04-15T14:30'</code></td><td><code>{toPlainDateTime('2026-04-15T14:30')?.toString() ?? '—'}</code></td></tr>
			<tr><td><code>plainDateToISO</code></td><td><code>today()</code></td><td><code>{plainDateToISO(today())}</code></td></tr>
			<tr><td><code>plainTimeToISO</code></td><td><code>sampleTime, true</code></td><td><code>{plainTimeToISO(sampleTime, true)}</code></td></tr>
			<tr><td><code>plainDateTimeToISO</code></td><td><code>sampleDt</code></td><td><code>{plainDateTimeToISO(sampleDt)}</code></td></tr>
		</tbody>
	</table>
</div>

<div class="block">
	<h3>{t('playground.dates.formatting.label')}</h3>
	<p class="muted">{t('playground.dates.formatting.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Locale</th><th>formatDate</th><th>formatTime</th><th>formatDateTime</th><th>formatMonthYear</th></tr>
		</thead>
		<tbody>
			{#each locales as loc (loc)}
				<tr>
					<td><code>{loc}</code></td>
					<td>{sample ? formatDate(sample, loc) : '—'}</td>
					<td>{sampleTime ? formatTime(sampleTime, loc) : '—'}</td>
					<td>{sampleDt ? formatDateTime(sampleDt, loc) : '—'}</td>
					<td>{sample ? formatMonthYear(sample, loc) : '—'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="block">
	<h3>{t('playground.dates.locale.label')}</h3>
	<p class="muted">{t('playground.dates.locale.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Helper</th><th>Output</th></tr>
		</thead>
		<tbody>
			<tr><td><code>resolveLocale()</code></td><td><code>{resolveLocale()}</code></td></tr>
			<tr><td><code>localeWeekStart('en-US')</code></td><td><code>{localeWeekStart('en-US')}</code> (Sun)</td></tr>
			<tr><td><code>localeWeekStart('ru-RU')</code></td><td><code>{localeWeekStart('ru-RU')}</code> (Mon)</td></tr>
			<tr><td><code>localeUses12Hour('en-US')</code></td><td><code>{String(localeUses12Hour('en-US'))}</code></td></tr>
			<tr><td><code>localeUses12Hour('de-DE')</code></td><td><code>{String(localeUses12Hour('de-DE'))}</code></td></tr>
			<tr><td><code>today()</code></td><td><code>{today().toString()}</code></td></tr>
		</tbody>
	</table>
</div>

<div class="block">
	<h3>{t('playground.dates.types.label')}</h3>
	<p class="muted">{t('playground.dates.types.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Type</th><th>Shape</th></tr>
		</thead>
		<tbody>
			<tr><td><code>DateLike</code></td><td><code>string | Date | Temporal.PlainDate</code></td></tr>
			<tr><td><code>TimeLike</code></td><td><code>string | Date | Temporal.PlainTime</code></td></tr>
			<tr><td><code>DateTimeLike</code></td><td><code>string | Date | Temporal.PlainDateTime</code></td></tr>
			<tr><td><code>DateRange</code></td><td><code>{`{ from?: string; to?: string }`}</code></td></tr>
			<tr><td><code>TimeRange</code></td><td><code>{`{ from?: string; to?: string }`}</code></td></tr>
			<tr><td><code>DateTimeRange</code></td><td><code>{`{ from?: string; to?: string }`}</code></td></tr>
		</tbody>
	</table>
</div>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }
	.vars {
		width: 100%;
		max-width: 920px;
		border-collapse: collapse;
		font-size: 0.85rem;
	}
	.vars th, .vars td {
		text-align: left;
		padding: 0.45rem 0.6rem;
		border-bottom: 1px solid rgb(var(--gray-3));
		vertical-align: top;
	}
	.vars th { font-weight: 600; opacity: 0.7; }
	.vars code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		background: rgb(var(--gray-2));
		padding: 0.05rem 0.35rem;
		border-radius: 4px;
		white-space: nowrap;
	}
</style>
