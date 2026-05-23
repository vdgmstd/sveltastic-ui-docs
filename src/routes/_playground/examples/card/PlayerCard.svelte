<script lang="ts">
	import { Card, Button, Slider } from 'sveltastic-ui';
	import {
		PlayIcon,
		SkipBackIcon,
		SkipForwardIcon,
		SpeakerHighIcon,
		HeartIcon
	} from 'phosphor-svelte';

	const src = '/card-demo/desk-workspace.jpg';
</script>

<Card imgInset>
	{#snippet img()}
		<img {src} alt="Album art" />
	{/snippet}
	{#snippet title()}
		<h3>Late night focus</h3>
	{/snippet}
	{#snippet body()}
		<p>Lo-fi study mix</p>
		<div class="scrub">
			<span>02:14</span>
			<Slider value={42} size="small" color="primary" />
			<span>04:38</span>
		</div>
	{/snippet}
	{#snippet buttons()}
		<div class="controls">
			<Button iconOnly variant="transparent" shape="circle" color="dark" aria-label="Volume">
				<SpeakerHighIcon size={18} weight="fill" />
			</Button>
			<Button iconOnly variant="transparent" shape="circle" color="dark" aria-label="Previous track">
				<SkipBackIcon size={22} weight="fill" />
			</Button>
			<Button iconOnly shape="circle" color="primary" size="large" aria-label="Play">
				<PlayIcon size={26} weight="fill" />
			</Button>
			<Button iconOnly variant="transparent" shape="circle" color="dark" aria-label="Next track">
				<SkipForwardIcon size={22} weight="fill" />
			</Button>
			<Button iconOnly variant="transparent" shape="circle" color="danger" aria-label="Favorite">
				<HeartIcon size={18} weight="fill" />
			</Button>
		</div>
	{/snippet}
</Card>

<style>
	.scrub {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: nowrap;
	}
	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
