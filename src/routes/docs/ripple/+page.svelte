<script lang="ts">
	import DocHeader from '../DocHeader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import DemoBlock from '../../_playground/DemoBlock.svelte';

	import BasicRipple from '../../_playground/examples/ripple/BasicRipple.svelte';
	import ColorsRipple from '../../_playground/examples/ripple/ColorsRipple.svelte';
	import SolidBgRipple from '../../_playground/examples/ripple/SolidBgRipple.svelte';
	import DisabledRipple from '../../_playground/examples/ripple/DisabledRipple.svelte';
	import TextColorRipple from '../../_playground/examples/ripple/TextColorRipple.svelte';
	import SurfacesRipple from '../../_playground/examples/ripple/SurfacesRipple.svelte';

	import basicSrc from '../../_playground/examples/ripple/BasicRipple.svelte?raw';
	import colorsSrc from '../../_playground/examples/ripple/ColorsRipple.svelte?raw';
	import solidBgSrc from '../../_playground/examples/ripple/SolidBgRipple.svelte?raw';
	import disabledSrc from '../../_playground/examples/ripple/DisabledRipple.svelte?raw';
	import textColorSrc from '../../_playground/examples/ripple/TextColorRipple.svelte?raw';
	import surfacesSrc from '../../_playground/examples/ripple/SurfacesRipple.svelte?raw';

	const t = (key: string) => i18n.t(key);

	const blocks = [
		{ labelKey: 'playground.ripple.basic.label', hintKey: 'playground.ripple.basic.hint', Component: BasicRipple, src: basicSrc },
		{ labelKey: 'playground.ripple.colors.label', hintKey: 'playground.ripple.colors.hint', Component: ColorsRipple, src: colorsSrc },
		{ labelKey: 'playground.ripple.solidBg.label', hintKey: 'playground.ripple.solidBg.hint', Component: SolidBgRipple, src: solidBgSrc },
		{ labelKey: 'playground.ripple.disabled.label', hintKey: 'playground.ripple.disabled.hint', Component: DisabledRipple, src: disabledSrc },
		{ labelKey: 'playground.ripple.textColor.label', hintKey: 'playground.ripple.textColor.hint', Component: TextColorRipple, src: textColorSrc },
		{ labelKey: 'playground.ripple.surfaces.label', hintKey: 'playground.ripple.surfaces.hint', Component: SurfacesRipple, src: surfacesSrc }
	];
</script>

<DocHeader category="Actions" />

<header class="section__header">
	<h2>{t('playground.ripple.title')}</h2>
	<p>{t('playground.ripple.description')}</p>
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

<div class="block">
	<h3>{t('playground.ripple.options.label')}</h3>
	<p class="muted">{t('playground.ripple.options.hint')}</p>
	<table class="vars">
		<thead>
			<tr><th>Option</th><th>Type</th><th>Purpose</th></tr>
		</thead>
		<tbody>
			<tr><td><code>color</code></td><td><code>Color</code></td><td>{t('playground.ripple.options.color')}</td></tr>
			<tr><td><code>solidBg</code></td><td><code>boolean</code></td><td>{t('playground.ripple.options.solidBg')}</td></tr>
			<tr><td><code>disabled</code></td><td><code>boolean</code></td><td>{t('playground.ripple.options.disabled')}</td></tr>
			<tr><td><code>textColor</code></td><td><code>Color | 'currentColor'</code></td><td>{t('playground.ripple.options.textColor')}</td></tr>
		</tbody>
	</table>
</div>

<style>
	.section__header { margin-bottom: 1.5rem; }
	.section__header h2 { margin: 0 0 0.25rem; }
	.section__header p { margin: 0; opacity: 0.75; }

	.block { margin-bottom: 2rem; }
	.muted { font-size: 0.85rem; opacity: 0.7; margin: 0.25rem 0 0.75rem; }

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
