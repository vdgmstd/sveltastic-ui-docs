<script lang="ts">
	import { Upload } from 'sveltastic-ui';

	let files = $state<File[]>([]);
</script>

<div class="frame">
	<Upload bind:files multiple clearable color="primary" label="Mobile" sublabel="add more" />
</div>

<style>
	.frame {
		width: 280px;
	}
</style>
