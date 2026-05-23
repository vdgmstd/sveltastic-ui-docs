<script lang="ts">
	import type { Component } from 'svelte';
	import { Card, ripple } from 'sveltastic-ui';
	import {
		BellIcon,
		CalendarBlankIcon,
		CalendarCheckIcon,
		CardsIcon,
		CaretCircleDownIcon,
		CaretDownIcon,
		ChatCircleIcon,
		ChatTeardropTextIcon,
		CheckSquareIcon,
		CircleNotchIcon,
		ClockCountdownIcon,
		CursorClickIcon,
		DotsThreeVerticalIcon,
		DropIcon,
		HashIcon,
		ListBulletsIcon,
		ListNumbersIcon,
		MinusIcon,
		RadioButtonIcon,
		ScrollIcon,
		SlidersHorizontalIcon,
		SquaresFourIcon,
		TabsIcon,
		TagIcon,
		TextAaIcon,
		TextAlignLeftIcon,
		ToggleRightIcon,
		UploadSimpleIcon,
		UserCircleIcon,
		WarningCircleIcon
	} from 'phosphor-svelte';

	import { componentLinks, helperLinks, type DocCategory } from './nav';

	const componentIcons: Record<string, Component> = {
		button: CursorClickIcon,
		input: TextAaIcon,
		'input-number': HashIcon,
		textarea: TextAlignLeftIcon,
		checkbox: CheckSquareIcon,
		radio: RadioButtonIcon,
		segmented: SquaresFourIcon,
		switch: ToggleRightIcon,
		select: CaretCircleDownIcon,
		slider: SlidersHorizontalIcon,
		'datetime-picker': ClockCountdownIcon,
		calendar: CalendarBlankIcon,
		upload: UploadSimpleIcon,
		chip: TagIcon,
		collapse: CaretDownIcon,
		avatar: UserCircleIcon,
		progress: CircleNotchIcon,
		list: ListBulletsIcon,
		tabs: TabsIcon,
		pagination: ListNumbersIcon,
		divider: MinusIcon,
		card: CardsIcon,
		alert: WarningCircleIcon,
		dialog: ChatTeardropTextIcon,
		tooltip: ChatCircleIcon,
		menu: DotsThreeVerticalIcon,
		notifications: BellIcon
	};

	const helperIcons: Record<string, Component> = {
		scrollbar: ScrollIcon,
		ripple: DropIcon,
		dates: CalendarCheckIcon
	};

	const componentCategories: DocCategory[] = [
		'Form controls',
		'Display',
		'Overlays & feedback',
		'Composite'
	];
	const helperCategories: DocCategory[] = ['Styling', 'Actions'];

	const componentGroups = componentCategories
		.map((cat) => ({ cat, items: componentLinks.filter((l) => l.category === cat) }))
		.filter((g) => g.items.length > 0);

	const helperGroups = helperCategories
		.map((cat) => ({ cat, items: helperLinks.filter((l) => l.category === cat) }))
		.filter((g) => g.items.length > 0);
</script>

<header class="hero">
	<h1>Sveltastic UI</h1>
	<p>
		A Svelte 5 + Tailwind v4 UI kit on its way to a publishable npm package. Pick any component
		below to inspect props, sizes, colors, variants, and states.
	</p>
</header>

<section class="section">
	<header class="section__head">
		<h2>Components</h2>
		<p>{componentLinks.length} components in the kit, grouped by role.</p>
	</header>

	{#each componentGroups as group (group.cat)}
		<div class="group">
			<h3 class="group__title">{group.cat}</h3>
			<ul class="grid">
				{#each group.items as link (link.slug)}
					{@const Icon = componentIcons[link.slug] ?? CursorClickIcon}
					<li>
						<a href="/docs/{link.slug}" class="tile" use:ripple={{ color: 'primary', soft: true }}>
							<Card variant="compact" imgSize={64}>
								{#snippet img()}
									<div class="tile__icon"><Icon size={32} weight="duotone" /></div>
								{/snippet}
								{#snippet title()}
									<h4>{link.name}</h4>
								{/snippet}
								{#snippet body()}
									<p>{link.summary}</p>
								{/snippet}
							</Card>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<section class="section">
	<header class="section__head">
		<h2>Helpers</h2>
		<p>Layout and lifecycle helpers shipped alongside the components.</p>
	</header>

	{#each helperGroups as group (group.cat)}
		<div class="group">
			<h3 class="group__title">{group.cat}</h3>
			<ul class="grid">
				{#each group.items as link (link.slug)}
					{@const Icon = helperIcons[link.slug] ?? DropIcon}
					<li>
						<a href="/docs/{link.slug}" class="tile" use:ripple={{ color: 'primary', soft: true }}>
							<Card variant="compact" imgSize={64}>
								{#snippet img()}
									<div class="tile__icon"><Icon size={32} weight="duotone" /></div>
								{/snippet}
								{#snippet title()}
									<h4>{link.name}</h4>
								{/snippet}
								{#snippet body()}
									<p>{link.summary}</p>
								{/snippet}
							</Card>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.hero {
		margin-bottom: 2.5rem;
	}
	.hero h1 {
		margin: 0 0 0.5rem;
		font-size: 2rem;
	}
	.hero p {
		margin: 0;
		opacity: 0.85;
		max-width: 720px;
	}

	.section {
		margin-top: 2.5rem;
	}
	.section__head {
		margin-bottom: 1.25rem;
	}
	.section__head h2 {
		margin: 0 0 0.25rem;
	}
	.section__head p {
		margin: 0;
		opacity: 0.7;
		font-size: 0.9rem;
	}

	.group {
		margin-top: 1.75rem;
	}
	.group__title {
		margin: 0 0 0.75rem;
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.7;
		font-weight: 600;
	}

	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem 1.25rem;
	}
	@media (max-width: 1100px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.grid li {
		display: block;
		height: 100%;
	}

	.tile {
		display: block;
		height: 100%;
		color: inherit;
		text-decoration: none;
		border-radius: 35px;
	}
	.tile:focus-visible {
		outline: 2px solid rgb(var(--primary));
		outline-offset: 3px;
	}

	.tile :global(.card-content) {
		height: 100%;
	}
	.tile :global(.vs-ripple__layer) {
		z-index: 5;
	}
	.tile :global(.card-content--compact .card) {
		width: auto;
		max-width: none;
		height: 100%;
	}
	.tile :global(.card__title :is(h2, h3, h4, h5, h6)) {
		font-size: 0.95rem;
	}
	.tile :global(.card__text p) {
		font-size: 0.78rem;
		opacity: 0.65;
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.tile__icon {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(var(--c) / 0.1);
		color: rgb(var(--c));
		border-radius: inherit;
	}
</style>
