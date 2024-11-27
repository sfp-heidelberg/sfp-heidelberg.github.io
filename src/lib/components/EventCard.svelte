<script lang="ts">
    import type { Event } from "$lib/types";
    import { formatDate } from "$lib/utils";
    export let events:Event[];

</script>

	<ul class="events">
		{#each events as event}
			<a class="card" href="/events/{event.slug}">
				<img src="{event.img_path}" alt=""/>
				<!-- <a class="post" href="/blog/{post.slug}"> -->
				<li>
					<h2 class="title">{event.title}</h2>
					<p class="date">{formatDate(event.update_date)}</p>
					<p class="description">{event.description}</p>
				</li>
			</a>

		{/each}
	</ul>


<style>
	.events {
		display: grid;
		justify-content: center;
		gap: var(--size-6);
	}



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
		font-size: var(--font-size-0);
		padding-block: var(--size-1);
	}
	
	.description {
		margin-top: var(--size-3);
        font-family: var(--font-sans-content);
		color: var(--text-1);
		font-size: var(--font-size-3);
		
	}
	
	img {
		max-width: var(--size-fluid-9);
		margin-bottom: var(--size-4);
	}
	.card {
		/* background-color: var(--surface-4); */
		background-color: inherit;
		border-radius: var(--radius-2);
		padding: var(--size-3);
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
