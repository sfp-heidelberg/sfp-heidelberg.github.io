<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<a class="card" href="/blog/{post.slug}">
				<li class="post">
					<h2 class="title">{post.title}</h2>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			</a>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
        font-family: var(--font-sans-content);
	}
	.card {
		background-color: var(--surface-4-dark);
		border-radius: var(--radius-2);
		padding: var(--size-fluid-3);
		box-shadow: var(--shadow-2);
		text-decoration: none;

		&:hover {
			box-shadow: var(--shadow-4);
		}

		@media (--motionOK) {
			animation: var(--animation-fade-in);
		}
	}
</style>
