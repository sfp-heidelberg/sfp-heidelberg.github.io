<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="events">
		{#each data.events as event}
			<a class="card" href="/events/{event.slug}">
				<img src="{event.img_path}" alt=""/>
				<!-- <a class="post" href="/blog/{post.slug}"> -->
				<li>
					<h2 class="title">{event.title}</h2>
					<p class="date">{formatDate(event.update_date)} - {formatDate(event.update_date)}</p>
					<p class="description">{event.description}</p>
				</li>
			</a>

		{/each}
	</ul>
</section>

<style>
	.events {
		display: grid;
		justify-content: center;
		gap: var(--size-6);
	}

	/* .post {
		max-inline-size: var(--size-content-3);
	} */

	.card:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
		color: var(--text-2);
		
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
        font-family: var(--font-sans-content);
		color: var(--text-1);
		
	}
	
	img {
		max-width: var(--size-fluid-10);
		margin-bottom: var(--size-4);
	}
	.card {
		background-color: var(--surface-4);
		border-radius: var(--radius-2);
		padding: var(--size-fluid-3);
		box-shadow: var(--shadow-2);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-items: center;

		&:hover {
			box-shadow: var(--shadow-4);
		}

		@media (--motionOK) {
			animation: var(--animation-fade-in);
		}
	} 
</style>
