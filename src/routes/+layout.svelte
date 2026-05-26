<script lang="ts">
	import { version as pkgVersion } from "../../package.json";
	import { Chip } from 'sveltastic-ui';
	import { onMount } from 'svelte';
	import { SunIcon, MoonIcon, TextAaIcon } from 'phosphor-svelte';
	import { Button, NotificationsHost, ScrollbarHost, Switch, theme } from 'sveltastic-ui';
	import 'sveltastic-ui/styles';
	import PaletteSwitcher, { hydratePalette } from './_palette/PaletteSwitcher.svelte';
	import FontSwitcher, { hydrateFont } from './_palette/FontSwitcher.svelte';

	let { children } = $props();
	let themeSwitchEl: HTMLElement | undefined = $state();

	onMount(() => {
		try {
			localStorage.removeItem('sveltastic-ui:theme-preset');
			localStorage.removeItem('sveltastic-ui:font-preset');
		} catch {
			/* storage unavailable */
		}
		theme.hydrate();
		hydratePalette();
		hydrateFont();
	});

	onMount(() => {
		// Native CSS scroll-driven animation does the actual translate (see
		// `.bg-backdrop` style). JS only needs to keep `--bg-max-py` in sync
		// with the current document height — the browser interpolates between
		// 0 and that maximum based on scroll progress, entirely on the
		// compositor thread. No scroll listener, no rAF loop, no smoothing
		// — touchpad / mouse wheel / touch all feel native.
		const root = document.documentElement;

		const setMax = (): void => {
			const max = Math.max(0, root.scrollHeight - window.innerHeight) * 0.15;
			root.style.setProperty('--bg-max-py', `${max}px`);
		};

		setMax();
		const ro = new ResizeObserver(setMax);
		ro.observe(document.body);
		window.addEventListener('resize', setMax, { passive: true });

		return () => {
			ro.disconnect();
			window.removeEventListener('resize', setMax);
		};
	});

	function handleThemeToggle(_event: Event, checked: boolean): void {
		const next = checked ? 'dark' : 'light';
		const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
		const supportsVT =
			typeof (document as Document & { startViewTransition?: unknown }).startViewTransition ===
			'function';

		if (reduced) {
			theme.setTheme(next);
			return;
		}

		const rect = themeSwitchEl?.getBoundingClientRect();
		const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
		const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
		const root = document.documentElement;
		root.style.setProperty('--vt-x', `${x}px`);
		root.style.setProperty('--vt-y', `${y}px`);

		if (supportsVT) {
			(
				document as Document & { startViewTransition: (cb: () => void) => unknown }
			).startViewTransition(() => {
				theme.setTheme(next);
			});
			return;
		}

		// Fallback for browsers without View Transitions (e.g. Firefox on Windows).
		// Capture the current background color, apply the next theme, then mask the
		// page with an overlay of the *old* background and shrink it to a circle
		// at the toggle's origin. The new theme is revealed underneath.
		const oldBg = getComputedStyle(root).getPropertyValue('--background').trim();
		const overlay = document.createElement('div');
		overlay.setAttribute('aria-hidden', 'true');
		overlay.style.cssText = `position:fixed;inset:0;z-index:9998;pointer-events:none;background:rgb(${oldBg || '255 255 255'});clip-path:circle(150% at ${x}px ${y}px);transition:clip-path 600ms cubic-bezier(0.4, 0, 0.2, 1);`;
		document.body.appendChild(overlay);
		theme.setTheme(next);
		requestAnimationFrame(() => {
			overlay.style.clipPath = `circle(0 at ${x}px ${y}px)`;
		});
		let removed = false;
		const cleanup = (): void => {
			if (removed) return;
			removed = true;
			overlay.remove();
		};
		overlay.addEventListener('transitionend', cleanup, { once: true });
		setTimeout(cleanup, 800);
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<div class="bg-backdrop" aria-hidden="true"></div>

<header class="app-header">
	<div class="app-header__inner">
		<a class="app-header__title" href="/">
			<img class="app-header__logo" src="/favicon.svg" alt="" aria-hidden="true" />
			<strong class="app-header__brand">Sveltastic UI</strong>
			<strong class="app-header__brand app-header__brand--short" aria-hidden="true">SUI</strong>
			<strong class="app-header__brand--short" >[BETA]</strong>
			<Chip shape="square" size="mini">{pkgVersion}</Chip>
		</a>
		<div class="app-header__controls">
			<FontSwitcher />
			<PaletteSwitcher />
			<span bind:this={themeSwitchEl} class="theme-switch" aria-label="Toggle dark mode">
				<Switch
					checked={theme.theme === 'dark'}
					onchange={handleThemeToggle}
					size="medium"
					ghostKnob
				>
					{#snippet knob()}
						{#if theme.theme === 'dark'}
							<MoonIcon size={14} weight="fill" />
						{:else}
							<SunIcon size={14} weight="fill" />
						{/if}
					{/snippet}
				</Switch>
			</span>
			<Button
				size="small"
				variant="border"
				color="dark"
				onclick={() => theme.toggleRtl()}
				aria-label="Toggle text direction"
			>
				{theme.rtl ? 'RTL' : 'LTR'}
			</Button>
		</div>
	</div>
</header>

<main class="app-main">
	{@render children()}
</main>

<NotificationsHost />
<ScrollbarHost />

<style>
	:global(body) {
		margin: 0;
		position: relative;
		overflow-x: hidden;
	}

	/* SVG decoration spans the full page, sits behind everything, and
	   translates on scroll for a parallax feel. The header sits above with a
	   translucent background + backdrop-filter, so the pattern blurs through.
	   Tiles vertically when the page is taller than one image's natural-aspect
	   height. Inverts in dark mode so the same asset works for both themes. */
	.bg-backdrop {
		position: absolute;
		inset: 0;
		opacity: 0.1;
		pointer-events: none;
		z-index: -1;
		overflow: hidden;
		background-image: url('/background.svg');
		background-repeat: repeat;
		background-size: 100% auto;
		background-position: top center;
		will-change: transform;
		/* Native scroll-driven parallax: linear 0 → max as the page scrolls
		   0 → end. Runs on the compositor without a JS listener. Gracefully
		   degrades to no parallax in browsers without animation-timeline
		   (currently Firefox). */
		animation: bg-parallax linear forwards;
		animation-timeline: scroll(root block);
	}
	@keyframes bg-parallax {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(0, var(--bg-max-py, 0px), 0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.bg-backdrop {
			animation: none;
		}
	}
	:global([data-theme='dark']) .bg-backdrop {
		filter: invert(1);
	}

	/*
	 * View Transitions: theme reveal radiates out from the toggle.
	 * Old snapshot (current theme) stays underneath; new snapshot
	 * (next theme) clips in as a circle expanding from --vt-x/--vt-y.
	 * Falls back silently in browsers without ::view-transition support.
	 */
	:global {
		::view-transition-old(root),
		::view-transition-new(root) {
			animation: none;
			mix-blend-mode: normal;
		}
		::view-transition-old(root) {
			z-index: 1;
		}
		::view-transition-new(root) {
			z-index: 2;
			animation: theme-reveal 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
		}
		@keyframes theme-reveal {
			from {
				clip-path: circle(0 at var(--vt-x, 50%) var(--vt-y, 50%));
			}
			to {
				clip-path: circle(150% at var(--vt-x, 50%) var(--vt-y, 50%));
			}
		}
	}

	.theme-switch {
		display: inline-flex;
		align-items: center;
	}
	.app-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		height: 56px;
		border-bottom: 1px solid rgb(var(--gray-3) / 0.6);
		background: rgb(var(--background) / 0.55);
		-webkit-backdrop-filter: var(--frost);
		backdrop-filter: var(--frost);
	}
	.app-header__inner {
		max-width: 1720px;
		margin: 0 auto;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	/* Below the 1720 frame the header gets a viewport-edge gutter; at
	   ≥1720 the box itself is exactly 1720 wide with no inset, so the
	   brand and the body content align to the same 1720 edges. */
	@media (max-width: 1719px) {
		.app-header__inner {
			padding-inline: clamp(0.85rem, 2vw, 1.25rem);
		}
	}
	.app-header__title {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: inherit;
		text-decoration: none;
		font-size: 1rem;
		min-width: 0;
		flex-shrink: 1;
	}
	.app-header__logo {
		width: 38px;
		height: 38px;
		flex-shrink: 0;
		display: block;
	}
	.app-header__brand {
		white-space: nowrap;
	}
	.app-header__brand--short {
		display: none;
	}
	.app-header__sub {
		font-size: 0.7rem;
		opacity: 0.55;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		white-space: nowrap;
	}
	.app-header__controls {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		flex-shrink: 0;
	}
	.app-main {
		max-width: 1720px;
		margin: 0 auto;
		padding: 56px 0 0;
		box-sizing: border-box;
	}

	@media (max-width: 520px) {
		.app-header__inner { gap: 0.4rem; }
		.app-header__brand { display: none; }
		.app-header__brand--short { display: inline; }
		.app-header__sub { display: none; }
		.app-header__controls { gap: 0.3rem; }
	}
</style>
