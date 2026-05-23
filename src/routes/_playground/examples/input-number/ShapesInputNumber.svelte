<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';
</script>

<InputNumber value={1} shape="default" />
<span class="muted">default</span>
<InputNumber value={1} shape="square" color="danger" />
<span class="muted">square</span>
<InputNumber value={1} shape="circle" color="success" />
<span class="muted">circle</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
