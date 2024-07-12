<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    export let data
</script>

<article>
    <hgroup>
        <h1 class="title">{data.meta.title}</h1>
    </hgroup>

    <div class="prose">
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

</style>