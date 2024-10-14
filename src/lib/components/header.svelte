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
			<a href="/about"><button>About</button></a>
		</li>
		<li>
			<a href="/events"><button>Events</button></a>
		</li>
		<li>
			<a href="/blog"><button>Blog</button></a>
		</li>
		<li>
			<a href="/palestine_101"><button>Palestine 101</button></a>
		</li>
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
	button {
  	color: var(--text-1);
	background-color: var(--surface-3);
	font-weight: var(--font-weight-4);

	&:hover {
		color: var(--text-2);
		background-color: var(--surface-4);
		box-shadow: var(--shadow-1);
	}
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
