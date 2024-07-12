<script lang="ts">
	import * as config from '$lib/config'
    import Toggle from './toggle.svelte';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/events">Events</a>
		</li>
		<li><a href="/blog">Blog</a></li>
	</ul>
    <Toggle/>
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}
    .title {
		font-size: var(--font-size-fluid-1);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}
		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
