<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';

	let open = $state(false);
</script>

<!-- Native trigger: Dialog.Trigger renders its OWN <button>, styled directly via class — no `child` snippet. -->
<Dialog.Root bind:open>
	<Dialog.Trigger
		class="inline-flex cursor-pointer items-center rounded-[12px] border-0 bg-[rgb(var(--primary))] px-4 py-2 font-medium text-white"
	>
		Open (native trigger)
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Close />
		<Dialog.Title>Native trigger</Dialog.Title>
		<Dialog.Body>
			<p>
				This trigger is <code>Dialog.Trigger</code>'s own native button, styled with classes — no
				<code>child</code> snippet. Compare with the "Basic" example above, which wraps our
				<code>&lt;Button&gt;</code> via the <code>child</code> snippet.
			</p>
		</Dialog.Body>
		<Dialog.Footer>
			<Button.Root variant="flat" onclick={() => (open = false)}>Close</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
