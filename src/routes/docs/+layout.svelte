<script lang="ts">
	import { page } from "$app/state";
	import { ListIcon, XIcon } from "phosphor-svelte";
	import {
		componentLinks,
		guideLinks,
		helperLinks,
		type DocCategory,
	} from "./nav";

	let { children } = $props();
	let sidebarOpen = $state(false);

	function closeOnLinkClick(node: HTMLElement) {
		const handler = (e: MouseEvent): void => {
			if ((e.target as HTMLElement).closest("a")) sidebarOpen = false;
		};
		node.addEventListener("click", handler);
		return { destroy: () => node.removeEventListener("click", handler) };
	}

	const componentCategories: DocCategory[] = [
		"Form controls",
		"Display",
		"Overlays & feedback",
		"Composite",
	];
	const helperCategories: DocCategory[] = ["Styling", "Actions"];

	const componentsByCategory = $derived(
		componentCategories
			.map((cat) => ({
				cat,
				items: [
					...componentLinks.filter((l) => l.category === cat),
					...helperLinks.filter((l) => l.category === cat),
				],
			}))
			.filter((g) => g.items.length > 0),
	);

	const helpersByCategory = $derived(
		helperCategories
			.map((cat) => ({
				cat,
				items: helperLinks.filter((l) => l.category === cat),
			}))
			.filter((g) => g.items.length > 0),
	);

	function isActive(slug: string): boolean {
		return (
			page.url.pathname === `/docs/${slug}` ||
			page.url.pathname.startsWith(`/docs/${slug}/`)
		);
	}
</script>

<div class="docs" class:docs--sidebar-open={sidebarOpen}>
	<button
		type="button"
		class="docs__burger"
		aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
		aria-expanded={sidebarOpen}
		onclick={() => (sidebarOpen = !sidebarOpen)}
	>
		{#if sidebarOpen}
			<XIcon size={20} weight="bold" />
		{:else}
			<ListIcon size={20} weight="bold" />
		{/if}
	</button>

	{#if sidebarOpen}
		<div
			class="docs__backdrop"
			aria-hidden="true"
			role="presentation"
			onclick={() => (sidebarOpen = false)}
		></div>
	{/if}

	<aside
		class="docs__sidebar"
		aria-label="Documentation navigation"
		use:closeOnLinkClick
	>
		<nav class="docs__nav">
			<div class="docs__group">
				<a class="docs__brand" href="/docs">
					<strong>Sveltastic UI</strong>
					<span class="docs__brand-sub">docs</span>
				</a>

				<p class="docs__group-sub">
					Install the kit and ship your first component.
				</p>
				<ul class="docs__list">
					{#each guideLinks as link (link.slug)}
						<li>
							<a
								href="/docs/{link.slug}"
								class:docs__active={isActive(link.slug)}
							>
								<span>{link.name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="docs__group">
				<h2 class="docs__group-title">Components</h2>
				<p class="docs__group-sub">
					The kit's public component surface.
				</p>
				{#each componentsByCategory as group (group.cat)}
					<h3 class="docs__cat">{group.cat}</h3>
					<ul class="docs__list">
						{#each group.items as link (link.slug)}
							<li>
								<a
									href="/docs/{link.slug}"
									class:docs__active={isActive(link.slug)}
								>
									<span>{link.name}</span>
									{#if "source" in link}
										<span class="docs__src"
											>{link.source} {link.version}</span
										>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{/each}
			</div>

			<div class="docs__group">
				<h2 class="docs__group-title">Helpers</h2>
				<p class="docs__group-sub">
					Kit-only additions alongside the components.
				</p>
				{#each helpersByCategory as group (group.cat)}
					<h3 class="docs__cat">{group.cat}</h3>
					<ul class="docs__list">
						{#each group.items as link (link.slug)}
							<li>
								<a
									href="/docs/{link.slug}"
									class:docs__active={isActive(link.slug)}
								>
									<span>{link.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</nav>
	</aside>

	<section class="docs__content">
		{@render children()}
	</section>
</div>

<style>
	.docs {
		display: grid;
		grid-template-columns: 292px 1fr;
		gap: 0;
		min-height: calc(100vh - 56px);
	}
	/* Sticky (in-flow), not fixed: a fixed sidebar escapes to viewport-top and paints over the
	   previous page during SvelteKit's ~250ms teardown coexistence; in-flow it stays inside .docs. */
	.docs__sidebar {
		position: sticky;
		top: 56px;
		align-self: start;
		height: calc(100vh - 56px);
		box-sizing: border-box;
		overflow-y: auto;
		padding: 1rem 1rem 2rem;
		border-right: 1px solid rgb(var(--gray-3));
	}
	.docs__brand {
		display: inline-flex;
		align-items: baseline;
		gap: 0.4rem;
		color: inherit;
		text-decoration: none;
		margin-bottom: 1rem;
	}
	.docs__brand-sub {
		font-size: 0.7rem;
		opacity: 0.55;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.docs__nav {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.docs__group-title {
		margin: 0 0 0.25rem;
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.7;
	}
	.docs__group-sub {
		margin: 0 0 0.5rem;
		font-size: 0.72rem;
		opacity: 0.55;
		line-height: 1.35;
	}
	.docs__cat {
		margin: 0.6rem 0 0.25rem;
		font-size: 0.7rem;
		font-weight: 600;
		opacity: 0.8;
		letter-spacing: 0.04em;
	}
	.docs__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
	.docs__list a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.5rem;
		border-radius: 6px;
		color: inherit;
		text-decoration: none;
		font-size: 0.85rem;
	}
	.docs__list a:hover {
		background: rgb(var(--gray-2));
	}
	.docs__active {
		background: rgb(var(--gray-2));
		font-weight: 600;
	}
	.docs__src {
		font-size: 0.65rem;
		opacity: 0.55;
		font-family: var(--font-mono);
	}
	.docs__content {
		grid-column: 2;
		min-width: 0;
		padding: 1.5rem 2rem 4rem;
	}
	/* No SVG backdrop inside docs — clean. The page-level `.bg-backdrop`
	   (in the root layout) is hidden while this layout is mounted. */
	:global(.bg-backdrop) {
		display: none;
	}
	.docs__burger {
		display: none;
	}

	@media (max-width: 1024px) {
		.docs {
			grid-template-columns: 1fr;
		}
		.docs__content {
			grid-column: auto;
		}
		/* Shift the global app-header brand right so the burger fits inside the
		   header bar without overlapping. */
		:global(.app-header__title) {
			padding-left: 52px;
		}
		.docs__burger {
			display: inline-flex;
			position: fixed;
			top: 8px;
			left: 1.25rem;
			z-index: 60;
			width: 40px;
			height: 40px;
			align-items: center;
			justify-content: center;
			background: transparent;
			border: 1px solid rgb(var(--gray-3));
			border-radius: 8px;
			color: inherit;
			cursor: pointer;
			transition: background-color 160ms ease;
		}
		.docs__burger:hover {
			background: rgb(var(--gray-2));
		}
		.docs__sidebar {
			position: fixed;
			top: 56px;
			left: 0;
			bottom: 0;
			width: min(85vw, 320px);
			z-index: 55;
			background: rgb(var(--background));
			border-right: 1px solid rgb(var(--gray-3));
			box-shadow: 4px 0 30px rgb(0 0 0 / 0.18);
			max-height: none;
			overflow-y: auto;
			transform: translateX(-100%);
			transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
		}
		.docs--sidebar-open .docs__sidebar {
			transform: translateX(0);
		}
		.docs__backdrop {
			position: fixed;
			inset: 56px 0 0 0;
			background: rgb(0 0 0 / 0.4);
			backdrop-filter: blur(2px);
			z-index: 55;
		}
	}
	.docs__content :global(.block) {
		margin-bottom: 1.75rem;
	}
	.docs__content :global(.block > h3) {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.6;
	}
	.docs__content :global(.row) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
	}
	.docs__content :global(.col) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.docs__content :global(.muted) {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
	.docs__content :global(.dropdown-demo) {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.docs__content :global(.dropdown-demo button) {
		text-align: left;
		padding: 6px 10px;
		border: 0;
		background: transparent;
		border-radius: 6px;
		cursor: pointer;
	}
	.docs__content :global(.dropdown-demo button:hover) {
		background: rgb(var(--gray-2));
	}
</style>
