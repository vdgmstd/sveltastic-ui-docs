<script lang="ts">
	import { Card, Button } from 'sveltastic-ui';

	const src = '/card-demo/avatar-portrait.jpg';
</script>

<Card.Root variant="compact">
	<Card.Media>
		<Card.Image>
			<img {src} alt="Portrait of Sara Lindqvist" />
		</Card.Image>
		<Card.Overlay>3</Card.Overlay>
	</Card.Media>
	<Card.Body>
		<Card.Header><h4>Sara Lindqvist</h4></Card.Header>
		<p>Invited you to collaborate on the VGStudio design system.</p>
	</Card.Body>
	<Card.Footer floating>
		<div class="flex w-full">
			<Button.Root color="success">Accept</Button.Root>
			<Button.Root variant="shadow" color="danger">Decline</Button.Root>
		</div>
	</Card.Footer>
</Card.Root>
