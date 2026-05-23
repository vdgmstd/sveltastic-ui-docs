<script lang="ts" module>
	export type ApiProp = {
		name: string;
		type: string;
		required: boolean;
		default: string | null;
		description: string | null;
	};

	export type ApiTableProps = {
		/** Component name shown as the table caption (e.g. `Button`). */
		title: string;
		/** Auto-generated props array, imported from the component's `*.api.json`. */
		api: ApiProp[];
		/** Free-form note rendered above the table (e.g. "Plus all `<button>` HTML attributes"). */
		hint?: string;
	};
</script>

<script lang="ts">
	let { title, api, hint }: ApiTableProps = $props();
</script>

<section class="api">
	<h3 class="api__title">{title} — Props</h3>
	{#if hint}
		<p class="api__hint">{hint}</p>
	{/if}
	<div class="api__scroll">
		<table class="api__table">
			<thead>
				<tr>
					<th class="api__col-name">Prop</th>
					<th class="api__col-type">Type</th>
					<th class="api__col-default">Default</th>
					<th class="api__col-desc">Description</th>
				</tr>
			</thead>
			<tbody>
				{#each api as p (p.name)}
					<tr>
						<td class="api__name">
							<code>{p.name}</code>{#if p.required}<span class="api__req" title="Required">*</span>{/if}
						</td>
						<td class="api__type"><code>{p.type}</code></td>
						<td class="api__default">
							{#if p.default !== null}
								<code>{p.default}</code>
							{:else}
								<span class="api__dash">—</span>
							{/if}
						</td>
						<td class="api__desc">{p.description ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.api {
		margin: 2.5rem 0;
		font-family: var(--font-sans);
	}

	.api__title {
		margin: 0 0 0.5rem;
		font-size: 1.05rem;
		font-weight: 600;
	}

	.api__hint {
		margin: 0 0 0.75rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}

	.api__scroll {
		overflow-x: auto;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 10px;
		background: rgb(var(--gray-1));
	}

	.api__table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.api__table th,
	.api__table td {
		padding: 0.55rem 0.85rem;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid rgb(var(--gray-3));
	}

	.api__table tbody tr:last-child td {
		border-bottom: 0;
	}

	.api__table th {
		background: rgb(var(--gray-2));
		font-weight: 600;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: rgb(var(--text) / 0.7);
	}

	.api__col-name { width: 18%; min-width: 9rem; }
	.api__col-type { width: 28%; min-width: 11rem; }
	.api__col-default { width: 14%; min-width: 7rem; }
	.api__col-desc { width: 40%; }

	.api__name code {
		font-weight: 600;
		color: rgb(var(--primary));
	}

	.api__req {
		margin-left: 0.15rem;
		color: rgb(var(--danger));
		font-weight: 700;
	}

	.api__type code,
	.api__default code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		background: rgb(var(--gray-3) / 0.6);
		padding: 0.05rem 0.4rem;
		border-radius: 4px;
		color: rgb(var(--text));
		white-space: pre-wrap;
		word-break: break-word;
	}

	.api__type code {
		color: rgb(var(--info));
	}

	.api__dash {
		opacity: 0.4;
	}

	.api__desc {
		font-size: 0.8rem;
		color: rgb(var(--text) / 0.85);
	}
</style>
