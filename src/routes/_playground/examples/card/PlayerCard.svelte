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

<Card.Root imgInset>
	<Card.Media>
		<Card.Image>
			<img {src} alt="Album art" />
		</Card.Image>
	</Card.Media>
	<Card.Body>
		<Card.Header><h3>Late night focus</h3></Card.Header>
		<p>Lo-fi study mix</p>
		<div class="scrub">
			<span>02:14</span>
			<Slider.Root value={42} size="small" color="primary" />
			<span>04:38</span>
		</div>
	</Card.Body>
	<Card.Footer>
		<div class="controls">
			<Button.Root iconOnly variant="transparent" shape="circle" color="dark" aria-label="Volume">
				<SpeakerHighIcon size={18} weight="fill" />
			</Button.Root>
			<Button.Root iconOnly variant="transparent" shape="circle" color="dark" aria-label="Previous track">
				<SkipBackIcon size={22} weight="fill" />
			</Button.Root>
			<Button.Root iconOnly shape="circle" color="primary" size="large" aria-label="Play">
				<PlayIcon size={26} weight="fill" />
			</Button.Root>
			<Button.Root iconOnly variant="transparent" shape="circle" color="dark" aria-label="Next track">
				<SkipForwardIcon size={22} weight="fill" />
			</Button.Root>
			<Button.Root iconOnly variant="transparent" shape="circle" color="danger" aria-label="Favorite">
				<HeartIcon size={18} weight="fill" />
			</Button.Root>
		</div>
	</Card.Footer>
</Card.Root>

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
