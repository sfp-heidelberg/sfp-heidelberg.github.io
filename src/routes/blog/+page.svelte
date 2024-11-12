<script lang="ts">
	import * as config from '$lib/config'
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let data
</script>

<svelte:head>
	<title>{config.BlogTitle}</title>

</svelte:head>

<section>
<BlogCard posts={data.posts}/>
</section>