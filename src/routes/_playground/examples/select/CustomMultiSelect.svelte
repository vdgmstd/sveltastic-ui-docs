<script lang="ts">
	import { Select } from 'sveltastic-ui';
	import {
		CheckIcon,
		StarIcon,
		XIcon,
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

	let value = $state<string[]>(['mango', 'cherry']);

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

<Select.Root type="multiple" bind:value items={richItems} placeholder="Pick toppings">
	<Select.Trigger>
		<Select.Value>
			<Select.Chip>
				{#snippet children({ item, remove })}
					{@const meta = lookup.get(item.value as string)}
					<span class="rich-chip">
						{#if meta}
							<span class="rich-chip__icon" style:background={meta.tone}>
								<meta.Icon size={10} weight="fill" color="#fff" />
							</span>
							<span class="rich-chip__label">{meta.label}</span>
						{:else}
							<span class="rich-chip__label">{item.label}</span>
						{/if}
						<button
							type="button"
							class="rich-chip__close"
							aria-label="Remove"
							onclick={(e) => {
								e.stopPropagation();
								remove();
							}}
						>
							<XIcon size={9} weight="bold" />
						</button>
					</span>
				{/snippet}
			</Select.Chip>
		</Select.Value>
	</Select.Trigger>
	<Select.Content>
		{#each richItems as group (group.title)}
			<Select.Group>
				<Select.GroupHeading>{group.title}</Select.GroupHeading>
				{#each group.items as meta (meta.value)}
					{@const isSel = value.includes(meta.value)}
					<Select.Item value={meta.value} label={meta.label}>
						<div class="rich-row" class:rich-row--selected={isSel}>
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
						</div>
					</Select.Item>
				{/each}
			</Select.Group>
		{/each}
	</Select.Content>
</Select.Root>

<style>
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
	}
	.rich-row__hint {
		font-size: 0.7rem;
		opacity: 0.55;
		line-height: 1.2;
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
	.rich-chip {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 3px 4px;
		background: rgb(var(--c) / 0.12);
		color: rgb(var(--c));
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.1;
	}
	.rich-chip__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.rich-chip__close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 14px;
		height: 14px;
		padding: 0;
		background: rgb(var(--c) / 0.18);
		border: 0;
		border-radius: 50%;
		color: inherit;
		cursor: pointer;
	}
	.rich-chip__close:hover {
		background: rgb(var(--c) / 0.32);
	}
</style>
