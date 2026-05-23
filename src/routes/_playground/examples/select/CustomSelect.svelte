<script lang="ts">
	import { Select } from 'sveltastic-ui';
	import {
		CheckIcon,
		StarIcon,
		AppleLogoIcon,
		OrangeIcon,
		CherriesIcon,
		CarrotIcon,
		PlantIcon
	} from 'phosphor-svelte';

	type RichItem = {
		value: string;
		label: string;
		hint: string;
		tag: string;
		tone: string;
		Icon: typeof AppleLogoIcon;
	};

	let value = $state<string | undefined>('mango');

	const richItems: { title: string; items: RichItem[] }[] = [
		{
			title: 'Fruits',
			items: [
				{ value: 'mango', label: 'Mango', hint: 'Sweet, tropical', tag: '4.9', tone: '#f59e0b', Icon: OrangeIcon },
				{ value: 'cherry', label: 'Cherry', hint: 'Tart, summery', tag: '4.8', tone: '#ef4444', Icon: CherriesIcon },
				{ value: 'apple', label: 'Apple', hint: 'Crisp, classic', tag: '4.7', tone: '#22c55e', Icon: AppleLogoIcon }
			]
		},
		{
			title: 'Veggies',
			items: [
				{ value: 'carrot', label: 'Carrot', hint: 'Crunchy, root', tag: '4.6', tone: '#fb923c', Icon: CarrotIcon },
				{ value: 'spinach', label: 'Spinach', hint: 'Leafy, mineral', tag: '4.3', tone: '#16a34a', Icon: PlantIcon }
			]
		}
	];

	const lookup = new Map<string, RichItem>();
	for (const g of richItems) for (const it of g.items) lookup.set(it.value, it);
</script>

<Select bind:value items={richItems} placeholder="Pick a topping">
	{#snippet selected(item)}
		{@const meta = lookup.get(item.value as string)}
		{#if meta}
			<span class="rich-trigger">
				<span class="rich-trigger__icon" style:background={meta.tone}>
					<meta.Icon size={14} weight="fill" color="#fff" />
				</span>
				<span class="rich-trigger__label">{meta.label}</span>
			</span>
		{:else}
			{item.label}
		{/if}
	{/snippet}

	{#snippet groupTitle(title)}
		<div class="rich-group">{title}</div>
	{/snippet}

	{#snippet option(item, isSel)}
		{@const meta = lookup.get(item.value as string)}
		<div class="rich-row" class:rich-row--selected={isSel}>
			{#if meta}
				<span class="rich-row__icon" style:background={meta.tone}>
					<meta.Icon size={14} weight="fill" color="#fff" />
				</span>
				<span class="rich-row__main">
					<span class="rich-row__title">{meta.label}</span>
					<span class="rich-row__hint">{meta.hint}</span>
				</span>
				<span class="rich-row__indicator">
					{#if isSel}
						<span class="rich-row__check">
							<CheckIcon size={11} weight="bold" />
						</span>
					{:else}
						<span class="rich-row__tag">
							<StarIcon size={9} weight="fill" />
							{meta.tag}
						</span>
					{/if}
				</span>
			{/if}
		</div>
	{/snippet}
</Select>

<style>
	.rich-trigger {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 0.85rem;
		min-width: 0;
	}
	.rich-trigger__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		border-radius: 6px;
		flex-shrink: 0;
	}
	.rich-group {
		padding: 8px 10px 4px;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
		opacity: 0.5;
	}
	.rich-row {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		min-width: 0;
	}
	.rich-row__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border-radius: 7px;
		flex-shrink: 0;
	}
	.rich-row__main {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		gap: 1px;
	}
	.rich-row__title {
		font-size: 0.82rem;
		font-weight: 500;
		line-height: 1.15;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.rich-row__hint {
		font-size: 0.7rem;
		opacity: 0.55;
		line-height: 1.2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.rich-row__indicator {
		display: grid;
		place-items: center end;
		min-width: 36px;
		height: 18px;
		flex-shrink: 0;
	}
	.rich-row__indicator > * {
		grid-area: 1 / 1;
	}
	.rich-row__tag {
		display: inline-flex;
		align-items: center;
		gap: 2px;
		padding: 2px 6px;
		background: rgb(var(--text) / 0.06);
		border-radius: 999px;
		font-size: 0.65rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		opacity: 0.8;
	}
	.rich-row__check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		border-radius: 999px;
		background: rgb(var(--c) / 0.14);
		color: rgb(var(--c));
	}
	.rich-row--selected .rich-row__title {
		color: rgb(var(--c));
		font-weight: 600;
	}
</style>
