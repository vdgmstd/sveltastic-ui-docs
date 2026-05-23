<script lang="ts">
	import { ripple } from 'sveltastic-ui';
</script>

<button use:ripple>default (on-accent)</button>
<button use:ripple={{ textColor: 'primary' }}>textColor=primary</button>
<button use:ripple={{ textColor: '#ffffff' }}>textColor=#fff</button>
<button use:ripple={{ textColor: 'currentColor' }}>currentColor (off)</button>
