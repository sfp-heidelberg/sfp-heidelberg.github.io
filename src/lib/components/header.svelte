<script lang="ts">
	import * as config from '$lib/config'
    import Toggle from './toggle.svelte';
</script>

<nav>

	<a href="/" class="title">
		<b>{config.main_title}</b>
	</a>

	<ul class="nav-links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/events">Events</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/palestine_101">Palestine 101</a>
		</li>
		<li class="toggle-btn">
			<Toggle/>
		</li>
	</ul>
</nav>

<style>
	.nav-links {
		margin-top: var(--size-6);
	}

	.toggle-btn{
		align-self: center;
	}
	nav {
		padding-block: var(--size-7);
		flex-direction: column;
		align-items: center;
		display: flex;
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
	
	.nav-links a {
		color: var(--text-1);
		background-color: inherit;
		font-weight: var(--font-weight-5);
		padding: var(--size-2);
		border-radius: var(--radius-3);


	&:hover {
		color: var(--text-2);
		background-color: var(--surface-4);
		box-shadow: var(--shadow-1);
	}
	}
	@media (min-width: 768px) {
		.title {
			font-size: var(--font-size-fluid-2);
		}
		nav {
			display: flex;
			justify-content: space-between;
		}
		.nav-links {
			display: flex;
			gap: var(--size-7);
		}
	}
</style>
