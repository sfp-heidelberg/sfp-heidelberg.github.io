<script lang="ts">
	import * as config from '$lib/config'
	import InfoCard from '$lib/components/EventCard.svelte';

	export let data
</script>

<svelte:head>
	<title>{config.EventsTitle}</title>
</svelte:head>

<section>
	<InfoCard events={data.events}/>
</section>

