<script lang="ts">
	import { ripple } from 'sveltastic-ui';
</script>

<button use:ripple={{ color: 'primary' }}>primary</button>
<button use:ripple={{ color: 'success' }}>success</button>
<button use:ripple={{ color: 'danger' }}>danger</button>
<button use:ripple={{ color: 'warn' }}>warn</button>
<button use:ripple={{ color: '#9C27B0' }}>#9C27B0</button>
