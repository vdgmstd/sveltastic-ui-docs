<script lang="ts">
	import {
		AppWindowIcon,
		ArrowRightIcon,
		ArrowUpRightIcon,
		BellIcon,
		BookmarkSimpleIcon,
		BowlFoodIcon,
		BrowserIcon,
		CalendarIcon,
		CaretCircleDownIcon,
		CaretDownIcon,
		ChartLineIcon,
		ChatCircleIcon,
		ChatCircleTextIcon,
		CheckIcon,
		ClockIcon,
		CursorTextIcon,
		DiscordLogoIcon,
		DotsThreeIcon,
		FlagIcon,
		GithubLogoIcon,
		HashIcon,
		HeartIcon,
		LightningIcon,
		ListDashesIcon,
		ListIcon,
		MagnifyingGlassIcon,
		MinusIcon,
		MoonIcon,
		NotePencilIcon,
		PackageIcon,
		PaletteIcon,
		PaperPlaneTiltIcon,
		PlayIcon,
		PlusIcon,
		RadioButtonIcon,
		SkipBackIcon,
		SkipForwardIcon,
		SlidersIcon,
		SparkleIcon,
		SpeakerHighIcon,
		SquaresFourIcon,
		StarIcon,
		SunIcon,
		TagIcon,
		ThumbsUpIcon,
		ToggleRightIcon,
		UploadIcon,
		UserIcon,
		XIcon,
	} from "phosphor-svelte";
	import {
		Alert,
		Avatar,
		AvatarGroup,
		Button,
		Calendar,
		Card,
		Checkbox,
		Chip,
		Collapse,
		CollapseGroup,
		Divider,
		Input,
		InputNumber,
		Pagination,
		Progress,
		Radio,
		Segmented,
		Select,
		Slider,
		Switch,
		Tabs,
		Textarea,
	} from "sveltastic-ui";
	import { version as pkgVersion } from "../../package.json";

	const componentIcons: Record<string, typeof BellIcon> = {
		Alert: BellIcon,
		Avatar: UserIcon,
		Button: LightningIcon,
		Calendar: CalendarIcon,
		Card: HeartIcon,
		Checkbox: CheckIcon,
		Chip: TagIcon,
		Collapse: CaretDownIcon,
		DateTimePicker: ClockIcon,
		Dialog: AppWindowIcon,
		Divider: MinusIcon,
		Input: CursorTextIcon,
		InputNumber: HashIcon,
		List: ListIcon,
		Menu: ListDashesIcon,
		Pagination: DotsThreeIcon,
		Progress: ChartLineIcon,
		Radio: RadioButtonIcon,
		Segmented: SquaresFourIcon,
		Select: CaretCircleDownIcon,
		Slider: SlidersIcon,
		Switch: ToggleRightIcon,
		Tabs: BrowserIcon,
		Textarea: NotePencilIcon,
		Tooltip: ChatCircleIcon,
		Upload: UploadIcon,
	};

	const componentNames = Object.keys(componentIcons).sort();
	const componentCount = componentNames.length;

	let signInEmail = $state("ada@sveltastic-ui.dev");
	let signInPassword = $state("hellomypass123");
	let darkPreview = $state(true);
	let notify = $state(true);
	let sync = $state(true);
	let beta = $state(false);
	let push = $state(true);
	let dnd = $state(false);
	let analytics = $state(true);
	let volume = $state(64);
	let palette = $state("petrol");
	let plan = $state("yearly");
	let searchValue = $state("avatar");
	let chipFilters = $state({
		buttons: true,
		forms: false,
		motion: true,
		a11y: true,
	});
	let coverage = $state(96);
	let sprintProgress = $state(64);
	let page = $state(2);
	let agree = $state(true);
	let news = $state(false);
	let early = $state(true);
	let activeTab = $state("preview");
	let calendarValue = $state("2026-05-14");
	let calendarRange = $state({ from: "2026-05-12", to: "2026-05-19" });
	let scrubProgress = $state(42);
	let commentValue = $state(
		"Loved how this lands — the springs feel snappier than I expected.",
	);
	let cartQty = $state(2);
	let postTags = $state(["design", "svelte", "tokens"]);
	let rememberMe = $state(true);
	let faqOpen = $state(true);
	let surveyChoice = $state("weekly");
	let pageStep = $state(2);

	let sketchEl = $state<HTMLElement>();
	let heroEl = $state<HTMLElement>();

	$effect(() => {
		if (!sketchEl || !heroEl) return;
		const desktop = window.matchMedia("(min-width: 1360px)");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const ac = new AbortController();
		const sk = sketchEl;
		const hr = heroEl;

		let active = false;
		let colDelta = 0;
		let maxScroll = 0;
		let ticking = false;

		const scrollY = (): number => {
			const se = document.scrollingElement as HTMLElement | null;
			return se?.scrollTop ?? window.pageYOffset ?? 0;
		};

		const write = (): void => {
			if (!active || colDelta <= 0 || maxScroll <= 0) {
				hr.style.transform = "";
				return;
			}
			const p = Math.min(1, Math.max(0, scrollY() / maxScroll));
			hr.style.transform = `translate3d(0, ${(p * colDelta).toFixed(1)}px, 0)`;
		};

		const onScroll = (): void => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				write();
				ticking = false;
			});
		};

		const measure = (): void => {
			active = desktop.matches && !reduced.matches;
			if (!active) {
				colDelta = 0;
				maxScroll = 0;
				hr.style.transform = "";
				return;
			}
			const sketchH = sk.offsetHeight;
			const heroH = hr.offsetHeight;
			const docH = document.documentElement.scrollHeight;
			colDelta = Math.max(0, sketchH - heroH);
			maxScroll = Math.max(0, docH - window.innerHeight);
			write();
		};

		measure();
		if (document.readyState === "complete") {
			requestAnimationFrame(measure);
		} else {
			window.addEventListener("load", measure, {
				once: true,
				signal: ac.signal,
			});
		}

		// Re-measure on any layout change: sketch/hero column height
		// (fonts/images settling, content edits) or document height
		// (anything below the fold appearing/disappearing).
		const ro = new ResizeObserver(measure);
		ro.observe(sk);
		ro.observe(hr);
		ro.observe(document.documentElement);

		window.addEventListener("scroll", onScroll, {
			passive: true,
			signal: ac.signal,
		});
		window.addEventListener("resize", measure, {
			passive: true,
			signal: ac.signal,
		});
		desktop.addEventListener("change", measure, { signal: ac.signal });
		reduced.addEventListener("change", measure, { signal: ac.signal });

		return () => {
			ac.abort();
			ro.disconnect();
			hr.style.transform = "";
		};
	});
</script>

<section class="intro">
	<div class="intro__inner">
		<div class="intro__sketch" aria-hidden="true" bind:this={sketchEl}>
			<div class="mosaic">
				<div class="bob is-stack" style="--sx: 14px; --sy: 6px; --sr: 1deg; --delay: -0s;">
					{@render playerCard()}
				</div>
				<div class="bob" style="--sx: 10px; --sy: -10px; --sr: 2deg; --delay: -1.2s;">
					{@render stepsCard()}
				</div>
				<div class="bob is-stack" style="--sx: -12px; --sy: -8px; --sr: -1.5deg; --delay: -2.4s;">
					{@render surveyCard()}
				</div>
				<div class="bob is-stack" style="--sx: -16px; --sy: -10px; --sr: -3deg; --delay: -3.6s;">
					{@render authCard()}
				</div>
				<div class="bob" style="--sx: 12px; --sy: -10px; --sr: 1.5deg; --delay: -4.8s;">
					{@render cartCard()}
				</div>
				<div class="bob" style="--sx: 14px; --sy: 6px; --sr: 1.5deg; --delay: -0.6s;">
					{@render calendarCard()}
				</div>
				<div class="bob" style="--sx: 14px; --sy: -8px; --sr: 2deg; --delay: -1.8s;">
					{@render workspaceCard()}
				</div>
				<div class="bob" style="--sx: -10px; --sy: 14px; --sr: -2deg; --delay: -3s;">
					{@render faqCard()}
				</div>
				<div class="bob" style="--sx: 12px; --sy: 8px; --sr: -2deg; --delay: -4.2s;">
					{@render inviteCard()}
				</div>
				<div class="bob" style="--sx: 14px; --sy: 10px; --sr: 1.5deg; --delay: -5.4s;">
					{@render planCard()}
				</div>
				<div class="bob" style="--sx: -8px; --sy: 12px; --sr: -1.5deg; --delay: -2.1s;">
					{@render tabsCard()}
				</div>
				<div class="bob" style="--sx: 0px; --sy: -10px; --sr: 0deg; --delay: -3.9s;">
					{@render articleCard()}
				</div>
			</div>
		</div>

		<div class="intro__hero" bind:this={heroEl}>
			<header class="hero">
				<img class="hero__logo" src="/favicon.svg" alt="" aria-hidden="true" />
				<Chip size="small" variant="border" color="primary">
					{#snippet icon()}<SparkleIcon
							size={12}
							weight="fill"
						/>{/snippet}
					v{pkgVersion} · {componentCount} components [BETA]
				</Chip>

				<h1 class="intro__title">
					A <em>sharper</em> kit for
					<span class="brand">Svelte&nbsp;5</span>.
				</h1>

				<p class="intro__lede">
					Featherweight, ruthlessly powerful. No grid system, no
					opinionated styling to fight &mdash; just primitives that
					step aside, leaving you total control over your layout and
					your interface.
				</p>

				<div class="intro__actions">
					<Button
						color="primary"
						size="large"
						variant="gradient"
						href="/docs"
					>
						Get started
						{#snippet animate()}
							<span class="row-1"
								>Get started <ArrowRightIcon
									size={16}
									weight="bold"
								/></span
							>
						{/snippet}
					</Button>
					<Button
						size="large"
						variant="border"
						href="https://github.com/vdgmstd/sveltastic-ui"
					>
						<GithubLogoIcon size={16} weight="fill" />
						GitHub
					</Button>
				</div>

				<Divider />

				<div class="intro__meta">
					<Card>
						{#snippet body()}
							<div class="cell">
								<span class="cell__mark"
									><PackageIcon
										size={16}
										weight="fill"
									/></span
								>
								<div class="cell__text">
									<strong>Bundle</strong>
									<span class="muted">tree-shaken</span>
								</div>
							</div>
						{/snippet}
					</Card>
					<Card>
						{#snippet body()}
							<div class="cell">
								<span class="cell__mark"
									><LightningIcon
										size={16}
										weight="fill"
									/></span
								>
								<div class="cell__text">
									<strong>Runtime</strong>
									<span class="muted">SSR-safe</span>
								</div>
							</div>
						{/snippet}
					</Card>
					<Card>
						{#snippet body()}
							<div class="cell">
								<span class="cell__mark"
									><PaletteIcon
										size={16}
										weight="fill"
									/></span
								>
								<div class="cell__text">
									<strong>Theming</strong>
									<span class="muted">1 CSS line</span>
								</div>
							</div>
						{/snippet}
					</Card>
				</div>
			</header>
			<section class="info">
				<h2>Built for Svelte&nbsp;5 craft</h2>
				<p>
					No <code>createEventDispatcher</code>. No legacy stores.
					Pure runes, callback props, and actions. Every component is
					SSR-safe and tree-shakable to the byte.
				</p>
				<ul class="bullets">
					<li>
						<CheckIcon size={14} weight="bold" /> Runes-first reactivity
						(<code>$state</code>, <code>$derived</code>,
						<code>$effect</code>)
					</li>
					<li>
						<CheckIcon size={14} weight="bold" /> Springs &amp; tweens
						via <code>svelte/motion</code>
					</li>
					<li>
						<CheckIcon size={14} weight="bold" /> Tailwind v4 tokens
						— one CSS line to retheme
					</li>
					<li>
						<CheckIcon size={14} weight="bold" /> i18n-agnostic — bring
						your own t()
					</li>
				</ul>
			</section>

			<section class="info">
				<h2>{componentCount} components, one barrel</h2>
				<div class="comp-chips">
					{#each componentNames as name (name)}
						{@const Icon = componentIcons[name] ?? PackageIcon}
						<Chip size="small" variant="flat" color="primary">
							{#snippet icon()}<Icon size={11} weight="fill" />{/snippet}
							{name}
						</Chip>
					{/each}
				</div>
			</section>

			<section class="info">
				<h2>Pick your palette</h2>
				<p>
					Each accent ships pre-tuned for both modes — switch with one
					CSS line, no overrides.
				</p>
				<div class="palette-row">
					<Chip size="medium" variant="border" color="rgb(6 148 178)">
						{#snippet icon()}<span class="swatch-dot" style="--c: 6 148 178"></span>{/snippet}
						Petrol
					</Chip>
					<Chip size="medium" variant="border" color="rgb(99 102 241)">
						{#snippet icon()}<span class="swatch-dot" style="--c: 99 102 241"></span>{/snippet}
						Indigo
					</Chip>
					<Chip size="medium" variant="border" color="rgb(5 150 105)">
						{#snippet icon()}<span class="swatch-dot" style="--c: 5 150 105"></span>{/snippet}
						Pine
					</Chip>
					<Chip size="medium" variant="border" color="rgb(225 29 72)">
						{#snippet icon()}<span class="swatch-dot" style="--c: 225 29 72"></span>{/snippet}
						Wine
					</Chip>
					<Chip size="medium" variant="border" color="rgb(234 88 12)">
						{#snippet icon()}<span class="swatch-dot" style="--c: 234 88 12"></span>{/snippet}
						Bronze
					</Chip>
				</div>
			</section>

			<section class="info">
				<h2>Numbers we like</h2>
				<div class="stats">
					<div class="stat">
						<strong>24&nbsp;kB</strong>
						<span class="muted">tree-shaken</span>
					</div>
					<div class="stat">
						<strong>0</strong>
						<span class="muted">runtime stores</span>
					</div>
					<div class="stat">
						<strong>96%</strong>
						<span class="muted">a11y coverage</span>
					</div>
					<div class="stat">
						<strong>{componentCount}</strong>
						<span class="muted">components</span>
					</div>
				</div>
			</section>
			<Button
				size="medium"
				color="primary"
				variant="gradient"
				href="/docs"
			>
				Read the docs
				{#snippet animate()}
					<span class="row-1"
						>Read the docs <ArrowRightIcon
							size={14}
							weight="bold"
						/></span
					>
				{/snippet}
			</Button>
		</div>
	</div>
</section>

<!-- ── Card snippets ──────────────────────────────────────────────────── -->

{#snippet authCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="auth">
					<div class="auth__brand">
						<span class="auth__mark"
							><LightningIcon size={16} weight="fill" /></span
						>
						<div>
							<strong>Welcome back</strong>
							<span class="muted">Sign in to continue</span>
						</div>
					</div>
					<Input
						bind:value={signInEmail}
						label="Email"
						labelStyle="placeholder"
						block
					/>
					<Input
						bind:value={signInPassword}
						type="password"
						label="Password"
						labelStyle="placeholder"
						passwordReveal
						block
					/>
					<div class="row-between auth__remember">
						<Checkbox bind:checked={rememberMe}
							>Remember me</Checkbox
						>
						<a class="auth__forgot" href="#forgot">Forgot?</a>
					</div>
					<Button
						color="primary"
						variant="gradient"
						size="small"
						block>Continue</Button
					>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet themeCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="cell">
					<Switch bind:checked={darkPreview} size="medium" ghostKnob>
						{#snippet knob()}
							{#if darkPreview}
								<MoonIcon size={14} weight="fill" />
							{:else}
								<SunIcon size={14} weight="fill" />
							{/if}
						{/snippet}
					</Switch>
					<div class="cell__text">
						<strong>Appearance</strong>
						<span class="muted"
							>{darkPreview ? "Dark" : "Light"} mode</span
						>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet inviteCard()}
	<div class="tile">
		<Card variant="compact">
			{#snippet img()}
				<img
					src="/card-demo/avatar-portrait.jpg"
					alt="Sara Lindqvist"
				/>
			{/snippet}
			{#snippet interactions()}Pro{/snippet}
			{#snippet title()}
				<h4>Sara Lindqvist</h4>
			{/snippet}
			{#snippet body()}
				<p>
					Your account manager · Stripe Enterprise · weekdays 9-6 CET.
				</p>
			{/snippet}
			{#snippet actions()}
				<Button block color="primary" size="small">Message</Button>
				<Button block variant="shadow" color="dark" size="small"
					>Schedule</Button
				>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet volumeCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="kv">
					<header class="row-between">
						<strong class="kv__title">Volume</strong>
						<Chip size="mini" variant="transparent" color="primary"
							>{volume}%</Chip
						>
					</header>
					<Slider
						bind:value={volume}
						color="primary"
						size="small"
						showTooltip
					/>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet pagiCard()}
	<div class="tile tile--bare tile--center">
		<Pagination bind:value={page} length={5} max={5} size="small" arrows />
	</div>
{/snippet}

{#snippet workspaceCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="workspace">
					<header class="workspace__head">
						<div class="workspace__brand">
							<span class="workspace__mark"
								><LightningIcon size={14} weight="fill" /></span
							>
							<strong>Notifications</strong>
						</div>
						<Chip size="mini" variant="transparent">2/5</Chip>
					</header>

					<Divider />

					<div class="workspace__rows">
						<div class="row-between">
							<div class="kv__row">
								<strong>Push</strong>
								<span class="muted xs">to all devices</span>
							</div>
							<Switch
								bind:checked={push}
								size="small"
								color="primary"
							>
								{#snippet iconOn()}<CheckIcon
										size={10}
										weight="bold"
									/>{/snippet}
								{#snippet iconOff()}<XIcon
										size={10}
										weight="bold"
									/>{/snippet}
							</Switch>
						</div>
						<div class="row-between">
							<div class="kv__row">
								<strong>Theme</strong>
								<span class="muted xs"
									>{darkPreview ? "Dark" : "Light"} mode</span
								>
							</div>
							<Switch
								bind:checked={darkPreview}
								size="small"
								ghostKnob
							>
								{#snippet knob()}
									{#if darkPreview}
										<MoonIcon size={12} weight="fill" />
									{:else}
										<SunIcon size={12} weight="fill" />
									{/if}
								{/snippet}
							</Switch>
						</div>
						<div class="row-between">
							<div class="kv__row">
								<strong>Sound effects</strong>
								<span class="muted xs">square shape</span>
							</div>
							<Switch
								bind:checked={sync}
								size="small"
								shape="square"
								color="success"
							/>
						</div>
						<div class="row-between">
							<div class="kv__row">
								<strong>Auto-update</strong>
								<span class="muted xs">checking…</span>
							</div>
							<Switch checked size="small" loading color="warn" />
						</div>
						<div class="row-between">
							<div class="kv__row">
								<strong>Beta features</strong>
								<span class="muted xs">indeterminate</span>
							</div>
							<Switch indeterminate size="small" color="dark" />
						</div>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet searchCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="search">
					<Input
						bind:value={searchValue}
						placeholder="Search components"
						block
					>
						{#snippet icon()}<MagnifyingGlassIcon
								size={16}
							/>{/snippet}
					</Input>
					<div class="row-wrap">
						<Chip
							size="small"
							variant={chipFilters.buttons ? "default" : "border"}
							color="primary"
							active={chipFilters.buttons}
							onclick={() =>
								(chipFilters.buttons = !chipFilters.buttons)}
						>
							Buttons
						</Chip>
						<Chip
							size="small"
							variant={chipFilters.forms ? "default" : "border"}
							color="primary"
							active={chipFilters.forms}
							onclick={() =>
								(chipFilters.forms = !chipFilters.forms)}
						>
							Forms
						</Chip>
						<Chip
							size="small"
							variant={chipFilters.motion ? "default" : "border"}
							color="primary"
							active={chipFilters.motion}
							onclick={() =>
								(chipFilters.motion = !chipFilters.motion)}
						>
							Motion
						</Chip>
						<Chip
							size="small"
							variant={chipFilters.a11y ? "default" : "border"}
							color="primary"
							active={chipFilters.a11y}
							onclick={() =>
								(chipFilters.a11y = !chipFilters.a11y)}
						>
							A11y
						</Chip>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet sprintCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="sprint">
					<header class="row-between">
						<strong class="kv__title">Sprint&nbsp;24</strong>
						<Chip size="mini" variant="flat" color="warn">
							{#snippet icon()}<FlagIcon
									size={11}
									weight="fill"
								/>{/snippet}
							2&nbsp;days
						</Chip>
					</header>
					<Progress
						value={sprintProgress}
						thickness={6}
						color="primary"
					/>
					<div class="sprint__foot">
						<span class="muted xs"
							>{sprintProgress}% · 9/14 tasks</span
						>
						<AvatarGroup max={3}>
							<Avatar text="AL" color="primary" size={20} />
							<Avatar text="MP" color="warn" size={20} />
							<Avatar text="SK" color="danger" size={20} />
						</AvatarGroup>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet coverageCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="coverage">
					<Progress
						shape="circular"
						value={coverage}
						size={68}
						thickness={7}
						color="success"
					>
						<strong>{coverage}%</strong>
					</Progress>
					<div class="coverage__text">
						<strong>Coverage</strong>
						<span class="muted xs">a11y · 142 / 148 rules</span>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet connectCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="connect">
					<header class="row-between">
						<strong class="kv__title">Connect</strong>
						<Chip size="mini" variant="transparent">3 / 4</Chip>
					</header>
					<div class="connect__row">
						<div class="connect__lhs">
							<span class="connect__icon connect__icon--primary"
								><BellIcon size={14} weight="fill" /></span
							>
							<span>Push notifications</span>
						</div>
						<Switch
							bind:checked={push}
							size="small"
							color="primary"
						/>
					</div>
					<div class="connect__row">
						<div class="connect__lhs">
							<span class="connect__icon connect__icon--success"
								><MoonIcon size={14} weight="fill" /></span
							>
							<span>Do not disturb</span>
						</div>
						<Switch
							bind:checked={dnd}
							size="small"
							color="success"
						/>
					</div>
					<div class="connect__row">
						<div class="connect__lhs">
							<span class="connect__icon connect__icon--warn"
								><SparkleIcon size={14} weight="fill" /></span
							>
							<span>Analytics</span>
						</div>
						<Switch
							bind:checked={analytics}
							size="small"
							color="warn"
						/>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet planCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="plan">
					<header class="plan__head">
						<strong>Premium</strong>
						<Chip size="mini" variant="flat" color="warn">
							{#snippet icon()}<StarIcon
									size={11}
									weight="fill"
								/>{/snippet}
							Best
						</Chip>
					</header>
					<Segmented
						bind:value={plan}
						items={[
							{ value: "monthly", label: "Monthly" },
							{ value: "yearly", label: "Yearly" },
						]}
						size="small"
						color="primary"
						block
					/>
					<div class="plan__price">
						<span class="plan__amount"
							>${plan === "yearly" ? 19 : 24}</span
						>
						<span class="plan__period">/ month</span>
					</div>
					<ul class="plan__feats">
						<li>
							<CheckIcon size={12} weight="bold" /> Unlimited projects
						</li>
						<li>
							<CheckIcon size={12} weight="bold" /> Team analytics
						</li>
						<li>
							<CheckIcon size={12} weight="bold" /> Priority support
						</li>
					</ul>
					<Button
						color="primary"
						variant="gradient"
						size="small"
						block>Subscribe</Button
					>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet activityCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="feed">
					<header class="row-between">
						<strong class="kv__title">Activity</strong>
						<Chip size="mini" variant="transparent" color="primary"
							>today</Chip
						>
					</header>
					<div class="feed__row">
						<Avatar size={28}>
							<img src="/avatars/1.jpg" alt="" />
						</Avatar>
						<div>
							<strong>Lev shipped</strong>
							<span class="muted xs">Login revamp · 2m</span>
						</div>
					</div>
					<div class="feed__row">
						<Avatar size={28}>
							<img src="/avatars/4.jpg" alt="" />
						</Avatar>
						<div>
							<strong>Marina commented</strong>
							<span class="muted xs">on Buttons RFC · 14m</span>
						</div>
					</div>
					<div class="feed__row">
						<Avatar size={28}>
							<img src="/avatars/7.jpg" alt="" />
						</Avatar>
						<div>
							<strong>Sasha opened</strong>
							<span class="muted xs">PR #428 · 1h</span>
						</div>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet checkoutCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="kv">
					<header class="row-between">
						<strong class="kv__title">Almost done</strong>
						<Chip size="mini" variant="transparent" color="success"
							>3/4</Chip
						>
					</header>
					<Checkbox bind:checked={agree}
						>Accept terms of service</Checkbox
					>
					<Checkbox bind:checked={news} color="success">
						Subscribe to changelog
					</Checkbox>
					<Checkbox bind:checked={early} color="warn"
						>Join beta program</Checkbox
					>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet likedCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="liked">
					<Avatar size={38} badge badgeColor="danger">
						<img src="/avatars/8.jpg" alt="" />
					</Avatar>
					<div class="liked__text">
						<strong>Iris liked your post</strong>
						<span class="muted xs"
							>“Springs in Svelte&nbsp;5” · 2m</span
						>
					</div>
					<Button
						iconOnly
						size="mini"
						variant="transparent"
						color="danger"
					>
						<HeartIcon size={14} weight="fill" />
					</Button>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet calendarCard()}
	<div class="tile tile--bare">
		<Calendar
			bind:range={calendarRange}
			mode="range"
			size="small"
			color="primary"
			showFooter
		/>
	</div>
{/snippet}

{#snippet articleCard()}
	<div class="tile">
		<Card variant="peek">
			{#snippet img()}
				<img
					src="/card-demo/mountain-sunrise.jpg"
					alt="Mountain sunrise"
				/>
			{/snippet}
			{#snippet title()}
				<h3>Release notes · v{pkgVersion}</h3>
			{/snippet}
			{#snippet body()}
				<p>
					Springs land in the motion toolkit. 12 new components and a
					frosted Card variant.
				</p>
			{/snippet}
			{#snippet interactions()}
				<Button
					iconOnly
					color="danger"
					shape="circle"
					aria-label="Reactions"
				>
					<HeartIcon size={16} weight="fill" />
				</Button>
				<Button variant="shadow" color="primary" aria-label="Comments">
					<ChatCircleIcon size={18} weight="fill" />
					<span>32</span>
				</Button>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet peekCard()}
	<div class="tile">
		<Card variant="peek">
			{#snippet img()}
				<img
					src="/card-demo/reykjavik-church.jpg"
					alt="Hallgrímskirkja"
				/>
			{/snippet}
			{#snippet title()}
				<h3>Three days in Reykjavik</h3>
			{/snippet}
			{#snippet body()}
				<p>
					Geothermal pools and the world's quietest city after
					midnight.
				</p>
			{/snippet}
			{#snippet interactions()}
				<Button
					iconOnly
					color="danger"
					shape="circle"
					size="small"
					aria-label="Like"
				>
					<HeartIcon size={14} weight="fill" />
				</Button>
				<Button
					variant="shadow"
					color="primary"
					size="small"
					aria-label="Chat"
				>
					<ChatCircleIcon size={14} weight="fill" />
					<span>54</span>
				</Button>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet captionCard()}
	<div class="tile">
		<Card variant="caption">
			{#snippet img()}
				<img
					src="/card-demo/tokyo-alley.jpg"
					alt="Tokyo alley at night"
				/>
			{/snippet}
			{#snippet title()}
				<Button color="primary" variant="relief" size="small">
					Shinjuku
					<ArrowUpRightIcon size={12} weight="bold" />
				</Button>
			{/snippet}
			{#snippet body()}
				<p>Twelve nights, one camera, vending-machine coffee.</p>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet playerCard()}
	<div class="tile">
		<Card imgInset>
			{#snippet img()}
				<img src="/card-demo/desk-workspace.jpg" alt="Album art" />
			{/snippet}
			{#snippet title()}
				<h3>Late night focus</h3>
			{/snippet}
			{#snippet body()}
				<p>Lo-fi study mix</p>
				<div class="scrub">
					<span>02:14</span>
					<Slider
						bind:value={scrubProgress}
						size="small"
						color="primary"
					/>
					<span>04:38</span>
				</div>
			{/snippet}
			{#snippet buttons()}
				<div class="player-controls">
					<Button
						iconOnly
						variant="transparent"
						shape="circle"
						color="dark"
						aria-label="Volume"
					>
						<SpeakerHighIcon size={18} weight="fill" />
					</Button>
					<Button
						iconOnly
						variant="transparent"
						shape="circle"
						color="dark"
						aria-label="Previous track"
					>
						<SkipBackIcon size={22} weight="fill" />
					</Button>
					<Button
						iconOnly
						shape="circle"
						color="primary"
						size="large"
						aria-label="Play"
					>
						<PlayIcon size={26} weight="fill" />
					</Button>
					<Button
						iconOnly
						variant="transparent"
						shape="circle"
						color="dark"
						aria-label="Next track"
					>
						<SkipForwardIcon size={22} weight="fill" />
					</Button>
					<Button
						iconOnly
						variant="transparent"
						shape="circle"
						color="danger"
						aria-label="Favorite"
					>
						<HeartIcon size={18} weight="fill" />
					</Button>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet commentCard()}
	<div class="tile">
		<Card>
			{#snippet img()}
				<img
					src="/card-demo/coffee-espresso.jpg"
					alt="Espresso shot pouring"
				/>
			{/snippet}
			{#snippet title()}
				<h3>Leave a comment</h3>
			{/snippet}
			{#snippet body()}
				<p>Share what you thought about this guide.</p>
			{/snippet}
			{#snippet buttons()}
				<div class="comment-form">
					<Input
						bind:value={commentValue}
						placeholder="Write..."
						block
					/>
					<Button
						iconOnly
						variant="gradient"
						color="primary"
						size="small"
						aria-label="Send"
					>
						<PaperPlaneTiltIcon size={14} weight="fill" />
					</Button>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet tagsCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="kv">
					<header class="row-between">
						<strong class="kv__title">Labels · #428</strong>
						<Chip size="mini" variant="flat" color="warn">p1</Chip>
					</header>
					<span class="muted xs">Linked to the active sprint.</span>
					<Select
						bind:value={postTags}
						multiple
						items={[
							{ value: "bug", label: "bug" },
							{ value: "p1", label: "p1" },
							{ value: "frontend", label: "frontend" },
							{ value: "needs-review", label: "needs review" },
							{ value: "design", label: "design" },
						]}
						placeholder="Pick labels"
						label="Labels"
						labelStyle="placeholder"
						variant="border"
						color="primary"
						collapseChips
						block
					/>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet cartCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="cart">
					<header class="cart__head">
						<div>
							<strong>Workspace seats</strong>
							<span class="muted xs">Pro · billed monthly</span>
						</div>
						<Chip size="mini" variant="flat" color="primary"
							>Pro</Chip
						>
					</header>
					<div class="cart__row">
						<div class="kv__row">
							<strong>Active seats</strong>
							<span class="muted xs">4 used · 12 max</span>
						</div>
						<InputNumber
							bind:value={cartQty}
							min={1}
							max={12}
							size="small"
						/>
					</div>
					<Divider />
					<div class="cart__foot">
						<span class="cart__price"
							><strong>${cartQty * 19}</strong>
							<span class="muted xs">/ month</span></span
						>
						<Button color="primary" variant="gradient" size="small"
							>Update billing</Button
						>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet commentComposerCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="composer">
					<header class="composer__head">
						<Avatar size={28}>
							<img src="/avatars/3.jpg" alt="" />
						</Avatar>
						<div>
							<strong>Code review · PR #428</strong>
							<span class="muted xs">Replying to @ada</span>
						</div>
					</header>
					<Textarea
						bind:value={commentValue}
						label="Comment"
						labelStyle="placeholder"
						variant="border"
						block
						autoGrow
					/>
					<div class="row-end">
						<Button size="small" variant="transparent"
							>Cancel</Button
						>
						<Button color="primary" variant="gradient" size="small">
							Send
						</Button>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet faqCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="kv">
					<header class="row-between">
						<strong class="kv__title">Setup checklist</strong>
						<Chip size="mini" variant="flat" color="success"
							>2 / 4 done</Chip
						>
					</header>
					<CollapseGroup>
						<Collapse
							title="Connect a repository"
							key="repo"
							bind:open={faqOpen}
							size="small"
						>
							<p class="muted xs">
								Link GitHub or GitLab to enable preview
								deployments.
							</p>
						</Collapse>
						<Collapse
							title="Invite your team"
							key="invite"
							size="small"
						>
							<p class="muted xs">
								Members get billed at the Pro seat rate.
							</p>
						</Collapse>
						<Collapse
							title="Configure environments"
							key="env"
							size="small"
						>
							<p class="muted xs">
								Production, preview, and local — separate
								secrets each.
							</p>
						</Collapse>
					</CollapseGroup>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet tabsCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="tabs-card">
					<Tabs bind:value={activeTab} size="small">
						<Tabs.List>
							<Tabs.Tab value="preview">Production</Tabs.Tab>
							<Tabs.Tab value="code">Preview</Tabs.Tab>
							<Tabs.Tab value="docs">Local</Tabs.Tab>
						</Tabs.List>
						<Tabs.Panel value="preview">
							<div class="tabs-card__panel">
								<div class="env-row">
									<Chip
										size="mini"
										variant="flat"
										color="success">Ready</Chip
									>
									<span class="muted xs"
										>main · deployed 2m ago</span
									>
								</div>
								<code class="env-url"
									>https://acme.vercel.app</code
								>
							</div>
						</Tabs.Panel>
						<Tabs.Panel value="code">
							<div class="tabs-card__panel">
								<div class="env-row">
									<Chip
										size="mini"
										variant="flat"
										color="warn">Building</Chip
									>
									<span class="muted xs"
										>feat/checkout · 14s</span
									>
								</div>
								<code class="env-url"
									>https://feat-checkout-acme.vercel.app</code
								>
							</div>
						</Tabs.Panel>
						<Tabs.Panel value="docs">
							<div class="tabs-card__panel">
								<div class="env-row">
									<Chip
										size="mini"
										variant="flat"
										color="dark">Stopped</Chip
									>
									<span class="muted xs"
										>npm run dev — last ran 4h ago</span
									>
								</div>
								<code class="env-url"
									>http://localhost:5173</code
								>
							</div>
						</Tabs.Panel>
					</Tabs>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet alertCard()}
	<div class="tile tile--bare">
		<Alert color="success" closable progress={100}>
			{#snippet icon()}<CheckIcon size={18} weight="bold" />{/snippet}
			{#snippet title()}
				<strong>Deployment ready</strong>
			{/snippet}
			Production · <code>a14f8e2</code> · live in 12s
			{#snippet footer()}
				<div class="row-end">
					<Button size="mini" variant="transparent" color="success"
						>View logs</Button
					>
				</div>
			{/snippet}
		</Alert>
	</div>
{/snippet}

{#snippet surveyCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="survey">
					<header class="row-between">
						<strong class="kv__title">Email cadence</strong>
						<Chip size="mini" variant="transparent" color="primary"
							>team</Chip
						>
					</header>
					<span class="muted xs"
						>When should we send the team digest?</span
					>
					<div class="survey__opts">
						<Radio
							bind:group={surveyChoice}
							value="daily"
							color="primary">Daily summary</Radio
						>
						<Radio
							bind:group={surveyChoice}
							value="weekly"
							color="primary">Monday digest</Radio
						>
						<Radio
							bind:group={surveyChoice}
							value="monthly"
							color="primary">Monthly only</Radio
						>
						<Radio
							bind:group={surveyChoice}
							value="never"
							color="dark">Pause emails</Radio
						>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet stepsCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="kv">
					<header class="row-between">
						<strong class="kv__title">Project setup</strong>
						<Chip size="mini" variant="flat" color="primary"
							>{pageStep} / 4</Chip
						>
					</header>
					<span class="muted xs"
						>Connect tooling — 2 min remaining</span
					>
					<Progress
						value={(pageStep / 4) * 100}
						thickness={6}
						color="primary"
						stripes
					/>
					<div class="row-between">
						<Pagination
							bind:value={pageStep}
							length={4}
							arrows
							size="small"
						/>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet teamGroupCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="team">
					<header class="row-between">
						<strong class="kv__title">Design crew</strong>
						<Chip size="mini" variant="transparent" color="success"
							>5 online</Chip
						>
					</header>
					<AvatarGroup max={6}>
						<Avatar
							size={34}
							badge
							badgeColor="success"
							history
							historyGradient
						>
							<img src="/avatars/1.jpg" alt="" />
						</Avatar>
						<Avatar size={34} badge badgeColor="warn" history>
							<img src="/avatars/2.jpg" alt="" />
						</Avatar>
						<Avatar
							size={34}
							badge
							badgeColor="primary"
							writing
							history
						>
							<img src="/avatars/3.jpg" alt="" />
						</Avatar>
						<Avatar size={34} history>
							<img src="/avatars/4.jpg" alt="" />
						</Avatar>
						<Avatar size={34}>
							<img src="/avatars/5.jpg" alt="" />
						</Avatar>
						<Avatar size={34}>
							<img src="/avatars/6.jpg" alt="" />
						</Avatar>
						<Avatar size={34}>
							<img src="/avatars/7.jpg" alt="" />
						</Avatar>
					</AvatarGroup>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet switchesCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="variants">
					<header class="row-between">
						<strong class="kv__title">Switch</strong>
						<Chip size="mini" variant="transparent">5 props</Chip>
					</header>
					<div class="variants__row">
						<span class="variants__lbl">ghostKnob</span>
						<Switch
							bind:checked={darkPreview}
							size="small"
							ghostKnob
						>
							{#snippet knob()}
								{#if darkPreview}
									<MoonIcon size={12} weight="fill" />
								{:else}
									<SunIcon size={12} weight="fill" />
								{/if}
							{/snippet}
						</Switch>
					</div>
					<div class="variants__row">
						<span class="variants__lbl">iconOn / iconOff</span>
						<Switch
							bind:checked={push}
							size="small"
							color="success"
						>
							{#snippet iconOn()}<CheckIcon
									size={10}
									weight="bold"
								/>{/snippet}
							{#snippet iconOff()}<XIcon
									size={10}
									weight="bold"
								/>{/snippet}
						</Switch>
					</div>
					<div class="variants__row">
						<span class="variants__lbl">shape="square"</span>
						<Switch
							bind:checked={sync}
							size="small"
							shape="square"
							color="primary"
						/>
					</div>
					<div class="variants__row">
						<span class="variants__lbl">loading</span>
						<Switch checked size="small" loading color="warn" />
					</div>
					<div class="variants__row">
						<span class="variants__lbl">indeterminate</span>
						<Switch indeterminate size="small" color="dark" />
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet categoriesCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="variants">
					<header class="row-between">
						<strong class="kv__title">Checkbox</strong>
						<Chip size="mini" variant="transparent" color="primary"
							>5 props</Chip
						>
					</header>
					<Checkbox bind:checked={agree} color="danger">
						{#snippet iconChecked()}<HeartIcon
								size={11}
								weight="fill"
							/>{/snippet}
						<span class="muted xs">iconChecked = heart</span>
					</Checkbox>
					<Checkbox indeterminate color="warn">
						<span class="muted xs">indeterminate</span>
					</Checkbox>
					<Checkbox checked lineThrough color="success">
						<span class="muted xs">lineThrough · done</span>
					</Checkbox>
					<Checkbox checked loading color="primary">
						<span class="muted xs">loading</span>
					</Checkbox>
					<Checkbox
						bind:checked={news}
						labelPosition="before"
						color="dark"
					>
						<span class="muted xs">labelPosition = before</span>
					</Checkbox>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet inputsCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="fields">
					<header class="row-between">
						<strong class="kv__title">Input</strong>
						<Chip size="mini" variant="transparent" color="primary"
							>4</Chip
						>
					</header>
					<Input
						value="Ada"
						label="default"
						labelStyle="placeholder"
						variant="default"
						block
					/>
					<Input
						value="border"
						label="border"
						labelStyle="placeholder"
						variant="border"
						block
					/>
					<Input
						value="shadow"
						label="shadow"
						labelStyle="placeholder"
						variant="shadow"
						block
					/>
					<Input
						value="success"
						label="fieldState"
						labelStyle="placeholder"
						fieldState="success"
						block
						progress={68}
					/>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

{#snippet eventCard()}
	<div class="tile">
		<Card>
			{#snippet body()}
				<div class="event">
					<header class="event__head">
						<div class="event__date">
							<span class="event__day">14</span>
							<span class="event__mo">May</span>
						</div>
						<div class="event__text">
							<strong>Design review</strong>
							<span class="muted xs">3:00 – 4:00 PM</span>
						</div>
					</header>
					<div class="event__foot">
						<AvatarGroup max={3}>
							<Avatar text="AL" color="primary" size={20} />
							<Avatar text="MP" color="warn" size={20} />
							<Avatar text="LE" color="success" size={20} />
						</AvatarGroup>
						<Chip size="mini" variant="flat" color="primary"
							>In&nbsp;1h</Chip
						>
					</div>
				</div>
			{/snippet}
		</Card>
	</div>
{/snippet}

<style>
	/* Section spans the full body width (matches header). Content stays
	   inside `.intro__inner` which centers up to its own max-width. */
	.intro {
		position: relative;
		min-height: calc(100vh - 56px);
		isolation: isolate;
	}

	.intro__inner {
		position: relative;
		width: 100%;
		display: grid;
		/* Fixed column widths so the bento never stretches past the natural
		   Card max-width (350px × 2 + 3.5rem column-gap = 756px sketch,
		   510px hero, 3.5rem grid gap = 1322px total). The 1322 content
		   is centered inside the 1720 page container — no dead horizontal
		   space between the two masonry columns at wide viewports. */
		grid-template-columns: 756px 510px;
		justify-content: center;
		gap: 3.5rem;
		align-items: start;
		padding-block: clamp(2rem, 5vw, 4.5rem) 4rem;
		box-sizing: border-box;
		z-index: 1;
	}
	@media (max-width: 1719px) {
		.intro__inner {
			padding-inline: clamp(1rem, 2vw, 1.5rem);
		}
	}
	/* Hero column: scrolls naturally; the parallax lag is applied via
	   inline `transform` from the rAF scroll handler. `padding-top` pushes
	   the first elements down so the title sits roughly at viewport middle
	   on first paint, while the sketch on the left starts from the top —
	   the asymmetry frames the headline. */
	.intro__hero {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		min-width: 0;
		max-width: 510px;
		width: 100%;
		/* Push the headline toward the upper-third of the viewport so it
		   reads at glance, but keep enough space below for the column-lag
		   parallax to have a sizable `colDelta = sketchH − heroH` range. */
		padding-top: clamp(2rem, 14vh, 9rem);
		will-change: transform;
	}
	@media (prefers-reduced-motion: reduce) {
		.intro__hero {
			transform: none !important;
		}
	}
	.hero {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.95rem;
		min-width: 0;
	}
	.hero__logo {
		width: clamp(128px, 8vw, 160px);
		height: clamp(128px, 8vw, 160px);
		display: block;
		align-self: center;
		margin-bottom: 0.5rem;
	}
	/* The version chip should hug its own content rather than stretch to
	   the column's width (the column is now ~600-720px on wide desktops). */
	.hero > :global(.chip) {
		align-self: flex-start;
	}
	.hero::before {
		content: "";
		position: absolute;
		top: -0.5rem;
		left: -2rem;
		width: 80px;
		height: 80px;
		background-image: radial-gradient(
			rgb(var(--text) / 0.18) 1.4px,
			transparent 1.6px
		);
		background-size: 14px 14px;
		opacity: 0.5;
		pointer-events: none;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding-block: 0.5rem;
	}
	.info h2 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: rgb(var(--text));
	}
	.info p {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.5;
		color: rgb(var(--text) / 0.7);
	}
	.info code {
		font-family: var(--font-mono);
		font-size: 0.82em;
		padding: 0.05em 0.35em;
		border-radius: 5px;
		background: rgb(var(--gray-3));
		color: rgb(var(--text));
	}
	.bullets {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	.bullets li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		font-size: 0.88rem;
		color: rgb(var(--text) / 0.85);
	}
	.bullets li :global(svg) {
		color: rgb(var(--success));
		margin-top: 0.2rem;
		flex-shrink: 0;
	}
	.comp-chips {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.4rem 0.6rem;
		justify-items: start;
	}
	/* palette */
	.palette-row {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.swatch-dot {
		display: inline-block;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: rgb(var(--c));
		box-shadow: 0 0 0 2px rgb(var(--c) / 0.22);
	}

	/* stats */
	.stats {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem 1.25rem;
	}
	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		padding: 0.65rem 0.85rem;
		border-radius: 12px;
		background: rgb(var(--gray-2));
	}
	.stat strong {
		font-size: 1.4rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: rgb(var(--text));
		line-height: 1;
	}
	.stat .muted {
		font-size: 0.72rem;
		color: rgb(var(--text) / 0.55);
	}

	/* ── Sketch: static mosaic, scrolls with the rest of the page ─── */
	.intro__sketch {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		gap: 0;
		padding: 1rem 0;
		min-width: 0;
		width: 100%;
		/* Container query anchor — the mosaic re-tiers off this width,
		   independent of viewport, so the 2-col page layout survives off
		   itself and adapts to whatever column width it ends up with. */
		container-type: inline-size;
		container-name: sketch;
	}

	/* Masonry via CSS columns — capped at 2 cols. Column-gap matches the
	   page-level grid gap (3.5rem), and `margin-bottom` matches it too,
	   so every gap on the page — horizontal AND vertical — reads as the
	   same rhythm. Mosaic max-width = 2 × 350 (Card max) + 56 (column-gap)
	   = 756px, centered, so each column matches the natural Card width. */
	.mosaic {
		column-count: 2;
		column-gap: 3.5rem;
		max-width: 756px;
		width: 100%;
		min-width: 0;
		margin-inline: auto;
	}
	.mosaic > .bob {
		display: block;
		width: 100%;
		break-inside: avoid;
		margin-bottom: 3.5rem;
	}
	.mosaic > .bob:last-child {
		margin-bottom: 0;
	}
	/* No `overflow: hidden` on the tile — it clipped the hover-lift
	   transform and the card's own bottom content (e.g. the Sara card's
	   Message/Schedule action row). Cards manage their own border-radius
	   and image clipping internally. */

	/* Ambient float — every card bobs ±4px. Each card has a per-instance
	   `--delay` so neighbours are out of phase (looks alive, not like a
	   rigid slab). Amplitude is small enough that the worst-case visual
	   gap drift between two anti-phase neighbours is ~8px — visually
	   integrated as "breathing", not as uneven spacing. `translate` is a
	   pure visual transform so layout gaps remain a steady 1.75rem. */
	@keyframes mosaic-float {
		0%, 100% { translate: 0 -4px; }
		50%      { translate: 0  4px; }
	}
	.bob {
		transition: transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1);
		animation: mosaic-float 6s ease-in-out var(--delay, 0s) infinite;
	}
	.intro:has(.intro__hero :global(:is(button, a)):hover) .bob {
		transform: translate(var(--sx, 0), var(--sy, 0)) rotate(var(--sr, 0));
	}
	.bob:hover {
		animation-play-state: paused;
	}
	@media (prefers-reduced-motion: reduce) {
		.bob {
			animation: none;
		}
		.intro:has(.intro__hero :global(:is(button, a)):hover) .bob {
			transform: none;
		}
	}

	/* ── Tile shell ─────────────────────────────────────────────────── */
	.tile {
		filter: drop-shadow(
				0 10px 16px rgb(0 0 0 / calc(var(--shadow-opacity) * 1.2))
			)
			drop-shadow(
				0 2px 4px rgb(0 0 0 / calc(var(--shadow-opacity) * 0.85))
			);
		transition:
			transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
			filter 0.35s ease;
		position: relative;
	}
	.tile:hover {
		transform: translateY(-8px) scale(1.035);
		filter: drop-shadow(
				0 22px 38px rgb(0 0 0 / calc(var(--shadow-opacity) * 1.7))
			)
			drop-shadow(0 4px 8px rgb(0 0 0 / calc(var(--shadow-opacity) * 1)));
		z-index: 5;
	}
	.tile--bare {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tile--center {
		padding: 0.5rem 0;
	}

	/* ── shared atoms ───────────────────────────────────────────────── */
	.row-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.row-wrap {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
	.row-1 {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}
	.muted {
		color: rgb(var(--text) / 0.55);
		font-size: 0.72rem;
	}
	.muted.xs {
		font-size: 0.68rem;
	}
	.kv__title {
		font-size: 0.78rem;
		font-weight: 600;
		color: rgb(var(--text));
	}

	/* ── auth ───────────────────────────────────────────────────────── */
	.auth {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.85rem 0.85rem 0.8rem;
	}
	.auth__brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.2rem;
	}
	.auth__mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 8px;
		background: rgb(var(--primary) / 0.14);
		color: rgb(var(--primary));
	}
	.auth__brand strong {
		display: block;
		font-size: 0.82rem;
		font-weight: 700;
		color: rgb(var(--text));
		line-height: 1.1;
	}
	/* ── theme toggle row ───────────────────────────────────────────── */
	.cell {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.7rem 0.8rem;
	}
	.cell__text {
		display: flex;
		flex-direction: column;
		gap: 0.05rem;
	}
	.cell__text strong {
		font-size: 0.78rem;
		font-weight: 700;
	}
	.cell__mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 9px;
		background: rgb(var(--c) / 0.14);
		color: rgb(var(--c));
		flex-shrink: 0;
	}

	/* ── workspace centerpiece ──────────────────────────────────────── */
	.workspace {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 0.9rem 0.95rem 0.95rem;
	}
	.workspace__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.55rem;
	}
	.workspace__brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.workspace__mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border-radius: 8px;
		background: rgb(var(--primary) / 0.14);
		color: rgb(var(--primary));
	}
	.workspace__brand strong {
		font-size: 0.88rem;
		font-weight: 700;
	}
	.workspace__rows {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}
	/* ── search ─────────────────────────────────────────────────────── */
	.search {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.75rem 0.8rem;
	}

	/* ── sprint ─────────────────────────────────────────────────────── */
	.sprint {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.85rem 0.85rem;
	}
	.sprint header strong {
		font-size: 0.88rem;
		font-weight: 700;
	}
	.sprint__foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	/* ── coverage ───────────────────────────────────────────────────── */
	.coverage {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.8rem 0.85rem;
	}
	.coverage__text strong {
		display: block;
		font-size: 0.85rem;
		font-weight: 700;
	}

	/* ── connect ────────────────────────────────────────────────────── */
	.connect {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.85rem 0.85rem;
	}
	.connect__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.connect__lhs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.78rem;
		min-width: 0;
	}
	.connect__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border-radius: 7px;
		flex-shrink: 0;
	}
	.connect__icon--primary {
		background: rgb(var(--primary) / 0.14);
		color: rgb(var(--primary));
	}
	.connect__icon--success {
		background: rgb(var(--success) / 0.14);
		color: rgb(var(--success));
	}
	.connect__icon--warn {
		background: rgb(var(--warn) / 0.14);
		color: rgb(var(--warn));
	}

	/* ── plan ───────────────────────────────────────────────────────── */
	.plan {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.9rem 0.9rem 0.95rem;
	}
	.plan__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.plan__head strong {
		font-size: 1rem;
		font-weight: 700;
	}
	.plan__price {
		display: flex;
		align-items: baseline;
		gap: 0.3rem;
		padding: 0.2rem 0;
	}
	.plan__amount {
		font-size: 1.65rem;
		font-weight: 800;
		color: rgb(var(--primary));
		letter-spacing: -0.02em;
		line-height: 1;
	}
	.plan__period {
		font-size: 0.72rem;
		color: rgb(var(--text) / 0.55);
	}
	.plan__feats {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.72rem;
	}
	.plan__feats li {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: rgb(var(--text) / 0.85);
	}
	.plan__feats li :global(svg) {
		color: rgb(var(--success));
		flex-shrink: 0;
	}

	/* ── activity feed ──────────────────────────────────────────────── */
	.feed {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.8rem 0.85rem;
	}
	.feed__row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}
	.feed__row > div {
		display: flex;
		flex-direction: column;
		gap: 0.05rem;
		min-width: 0;
	}
	.feed__row strong {
		font-size: 0.76rem;
		font-weight: 600;
	}

	/* ── event ──────────────────────────────────────────────────────── */
	.event {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 0.75rem 0.85rem;
	}
	.event__head {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}
	.event__date {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		border-radius: 10px;
		background: rgb(var(--primary) / 0.14);
		color: rgb(var(--primary));
		flex-shrink: 0;
	}
	.event__day {
		font-size: 0.95rem;
		font-weight: 800;
		line-height: 1;
	}
	.event__mo {
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.event__text {
		display: flex;
		flex-direction: column;
		gap: 0.05rem;
		min-width: 0;
	}
	.event__text strong {
		font-size: 0.85rem;
		font-weight: 600;
	}
	.event__foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	/* ── player ─────────────────────────────────────────────────────── */
	.scrub {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		flex-wrap: nowrap;
	}
	.scrub :global(.slider) {
		flex: 1 1 auto;
		min-width: 0;
	}
	.player-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.3rem;
		width: 100%;
	}

	/* ── comment ────────────────────────────────────────────────────── */
	.comment-form {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		width: 100%;
	}
	.comment-form :global(.input) {
		flex: 1 1 auto;
		min-width: 0;
		margin: 0;
	}

	/* ── inputs (profile fields stack) ───────────────────────────────── */
	.fields {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 0.85rem 0.85rem;
	}

	/* shared row label stack (used inside workspace, cart, etc.) */
	.kv__row {
		display: flex;
		flex-direction: column;
		gap: 0.05rem;
		min-width: 0;
	}
	.kv__row strong {
		font-size: 0.82rem;
		font-weight: 600;
		color: rgb(var(--text));
	}

	/* ── cart (InputNumber + price + Add button) ─────────────────────── */
	.cart {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 0.85rem 0.85rem;
	}
	.cart__head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.cart__head strong {
		display: block;
		font-size: 0.92rem;
		font-weight: 700;
	}
	.cart__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.cart__foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.cart__price strong {
		font-size: 1.05rem;
		font-weight: 800;
		color: rgb(var(--primary));
		letter-spacing: -0.01em;
	}

	/* ── comment composer (Textarea) ─────────────────────────────────── */
	.composer {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 0.85rem 0.85rem;
	}
	.composer__head {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.composer__head strong {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
	}

	/* ── tabs card ───────────────────────────────────────────────────── */
	.tabs-card {
		padding: 0.55rem 0.7rem 0.7rem;
	}
	.tabs-card__panel {
		padding: 0.6rem 0.2rem 0.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.env-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.env-url {
		display: block;
		margin-top: 0.45rem;
		padding: 0.5rem 0.6rem;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: rgb(var(--text));
		word-break: break-all;
	}

	/* ── survey (Radio group) ────────────────────────────────────────── */
	.survey {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.85rem 0.85rem;
	}
	.survey__opts {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	/* ── auth additions ──────────────────────────────────────────────── */
	.auth__remember {
		padding: 0.1rem 0.05rem;
	}
	.auth__forgot {
		font-size: 0.72rem;
		color: rgb(var(--primary));
		text-decoration: none;
		font-weight: 600;
	}
	.auth__forgot:hover {
		text-decoration: underline;
	}

	/* ── liked ──────────────────────────────────────────────────────── */
	.liked {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.7rem 0.8rem;
	}
	.liked__text {
		display: flex;
		flex-direction: column;
		gap: 0.05rem;
		flex: 1;
		min-width: 0;
	}
	.liked__text strong {
		font-size: 0.8rem;
		font-weight: 600;
	}

	/* ── kv (generic) ───────────────────────────────────────────────── */
	.kv {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		padding: 0.75rem 0.85rem;
	}
	/* ── hero ───────────────────────────────────────────────────────── */
	.intro__title {
		margin: 0;
		font-size: clamp(1.75rem, 2.6vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: -0.02em;
		font-weight: 750;
		color: rgb(var(--text));
	}
	.intro__title em {
		font-style: normal;
		background: linear-gradient(
			120deg,
			rgb(var(--primary)) 0%,
			rgb(var(--primary) / 0.7) 50%,
			rgb(var(--success) / 0.85) 100%
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}
	.intro__title .brand {
		text-decoration: underline;
		text-decoration-color: rgb(var(--primary));
		text-decoration-thickness: 4px;
		text-underline-offset: 6px;
	}
	.intro__lede {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
		color: rgb(var(--text) / 0.72);
	}
	.intro__actions {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem;
		margin-top: 0.25rem;
	}
	.intro__meta {
		display: grid;
		/* Three pills when there's room; reflow to 2 then 1 if not. */
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 0.6rem;
		width: 100%;
		min-width: 0;
	}
	.intro__meta :global(.card) {
		max-width: none;
		margin: 0;
	}

	/* ── responsive ─────────────────────────────────────────────────── */
	/* The mosaic re-tiers on the SKETCH's own width via container queries
	   (no viewport-coupling). The 2-col page layout (sketch | hero) is
	   preserved down to ~640px, where it finally stacks. */

	/* On narrow phones the 2-col masonry falls to 1. */
	@container sketch (max-width: 460px) {
		.mosaic { column-count: 1; }
	}

	/* Page-level: 2-col layout below 1360px would push the fixed
	   756+56+510 = 1322 content past a comfortable viewport. Stack —
	   sketch on top (3 featured cards only), hero below. */
	@media (max-width: 1359px) {
		.intro__inner {
			grid-template-columns: 1fr;
			gap: 2.25rem;
			padding-block: 1.5rem 3rem;
			padding-inline: clamp(0.75rem, 2vw, 1.5rem);
			justify-content: stretch;
		}
		.intro__hero {
			order: 2;
			max-width: 100%;
			gap: 1.75rem;
			padding-top: 0;
			will-change: auto;
			transform: none !important;
		}
		.intro__sketch {
			order: 1;
			height: auto;
			padding: 0;
		}
		/* Trim the sketch to 3 hand-picked feature cards in stacked mode.
		   `.is-stack` marks the visible three; everything else is hidden. */
		.intro__sketch .mosaic > .bob:not(.is-stack) {
			display: none;
		}
	}

	/* Mobile (≤640px): tighten paddings, full-width hero actions, no hover
	   lift on tiles, smaller title. */
	@media (max-width: 640px) {
		.intro__inner {
			gap: 1.5rem;
			padding-block: 1rem 2rem;
			padding-inline: 0.85rem;
		}
		.intro__hero {
			gap: 1.5rem;
		}
		.hero::before {
			display: none;
		}
		.intro__title {
			font-size: clamp(1.65rem, 8vw, 2.1rem);
		}
		.intro__lede {
			font-size: 0.95rem;
		}
		.intro__actions {
			width: 100%;
			gap: 0.5rem;
		}
		.intro__actions :global(> *) {
			flex: 1 1 auto;
			justify-content: center;
		}
		.tile:hover {
			transform: none;
		}
	}

	/* Hero meta + chips collapse on the narrowest phones. */
	@media (max-width: 480px) {
		.intro__meta {
			grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		}
		.comp-chips {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 360px) {
		.comp-chips {
			grid-template-columns: 1fr;
		}
	}
</style>
