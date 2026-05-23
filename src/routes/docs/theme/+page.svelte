<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import CurrentTheme from '../../_playground/examples/theme/CurrentTheme.svelte';
	import ThemeControls from '../../_playground/examples/theme/ThemeControls.svelte';

	import currentSrc from '../../_playground/examples/theme/CurrentTheme.svelte?raw';
	import controlsSrc from '../../_playground/examples/theme/ThemeControls.svelte?raw';

	const t = (key: string) => i18n.t(key);
</script>

<DocHeader category="Styling" />

<header class="section__header">
	<h2>{t('playground.theme.title')}</h2>
	<p>{t('playground.theme.description')}</p>
</header>

<DemoBlock
	label={t('playground.theme.current.label')}
	description={t('playground.theme.current.hint')}
	codeLabel={t('playground.code.label')}
	Component={CurrentTheme}
	src={currentSrc}
/>

<DemoBlock
	label={t('playground.theme.controls.label')}
	description={t('playground.theme.controls.hint')}
	codeLabel={t('playground.code.label')}
	Component={ThemeControls}
	src={controlsSrc}
/>

<div class="block">
	<h3>{t('playground.theme.api.label')}</h3>
	<p class="muted">{t('playground.theme.api.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Member</th><th>Type</th><th>Purpose</th></tr>
		</thead>
		<tbody>
			<tr><td><code>theme.theme</code></td><td><code>'light' | 'dark'</code></td><td>{t('playground.theme.api.themeField')}</td></tr>
			<tr><td><code>theme.rtl</code></td><td><code>boolean</code></td><td>{t('playground.theme.api.rtlField')}</td></tr>
			<tr><td><code>setTheme(next)</code></td><td><code>(Theme) =&gt; void</code></td><td>{t('playground.theme.api.setTheme')}</td></tr>
			<tr><td><code>toggleTheme()</code></td><td><code>() =&gt; void</code></td><td>{t('playground.theme.api.toggleTheme')}</td></tr>
			<tr><td><code>setRtl(next)</code></td><td><code>(boolean) =&gt; void</code></td><td>{t('playground.theme.api.setRtl')}</td></tr>
			<tr><td><code>toggleRtl()</code></td><td><code>() =&gt; void</code></td><td>{t('playground.theme.api.toggleRtl')}</td></tr>
			<tr><td><code>hydrate()</code></td><td><code>() =&gt; void</code></td><td>{t('playground.theme.api.hydrate')}</td></tr>
		</tbody>
	</table>
</div>

<div class="block">
	<h3>{t('playground.theme.usage.label')}</h3>
	<p class="muted">{t('playground.theme.usage.hint')}</p>
	<pre class="snippet">{`<` + `script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from 'sveltastic-ui';

  onMount(() => theme.hydrate());
</` + `script>

<button onclick={() => theme.toggleTheme()}>
  {theme.theme === 'dark' ? '☀' : '☾'}
</button>`}</pre>
</div>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }

	.block { margin: 0 0 1.5rem; }
	.muted { font-size: 0.85rem; opacity: 0.7; margin: 0.25rem 0 0.75rem; }

	.snippet {
		margin: 0.6rem 0 0;
		padding: 0.6rem 0.8rem;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		font-size: 0.78rem;
		font-family: var(--font-mono);
		overflow-x: auto;
		max-width: 480px;
	}

	.vars {
		width: 100%;
		max-width: 720px;
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
