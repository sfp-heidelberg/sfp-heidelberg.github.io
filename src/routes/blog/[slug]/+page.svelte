<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<article>
	<hgroup>
		<h1 class="title">{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>
	<div class="tags">
		{#each data.meta.tags as tag}
			<span class="surface-4">&num;{tag}</span>
		{/each}
	</div>

	<div class="content prose">
		<svelte:component this={data.content} />
	</div>


</article>

<style>
    .title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
	}
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
        font-family: var(--font-sans-content);
	}

	h1 {
		text-transform: capitalize;

	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
	.content{
		margin-top: 1em;
		border-top: 15px solid transparent;
    	border-image: url('/4_.png'); /* source:  https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-wpwg5 */
		border-image-repeat: space;
		border-image-slice: 250;
		padding: var(--size-2)

	}
</style>
