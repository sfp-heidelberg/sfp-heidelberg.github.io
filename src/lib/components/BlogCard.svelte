<script lang='ts'>
    import type { Post } from "$lib/types";
    import { formatDate } from "$lib/utils";
    export let posts:Post[];
</script>
<ul class="posts">
    {#each posts as post}
        <a class="card" href="/blog/{post.slug}">
            <li>
                <h2 class="title">{post.title}</h2>
                <p class="date">{formatDate(post.date)}</p>
                <p class="description">{post.description}</p>
                
            </li>
        </a>

    {/each}
</ul>
<style>
	.posts {
		display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
		justify-content: center;
		gap: var(--size-6);
	}

	/* .post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	} */

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
		color: var(--text-1);
		
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
		
	}
	
	
	.card {
		background-color: inherit;
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
    
    @media(max-width: 768px){
        .posts {
		display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
		justify-content: center;
		gap: var(--size-6);
	}
    }
</style>
