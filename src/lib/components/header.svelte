<script lang="ts">
	import * as config from '$lib/config'
    import Toggle from './toggle.svelte';
	import { page } from '$app/stores'; // Import the page store to access current URL
	import {Menu} from 'lucide-svelte'
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const links = [
		{ href: '/about', name: 'About' },
		{ href: '/events', name: 'Events' },
		{ href: '/blog', name: 'Blog' },
		{href: '/palestine_101', name: 'Palestine 101'}
	];
	

	// Derive the current path from the page store
	$: currentPath = $page.url.pathname;

	let menuVisible = false;
	let isMobile = false

	  // Update on window resize
	  function checkMediaQuery() {
    	isMobile = window.matchMedia("(max-width: 768px)").matches; // Adjust breakpoint as needed
  	}

	onMount(() => {
		checkMediaQuery();
		window.addEventListener('resize', checkMediaQuery);
		return () => window.removeEventListener('resize', checkMediaQuery);
	});

  function toggleMenu() {
    if (isMobile) {
      menuVisible = !menuVisible;
    }
  }

</script>

<nav>

	<div class="mob-nav">
		<a href="/" class="title">
				<img src="/Logo_sfp_heidelberg.png" alt="Logo sfp Heidelberg">
				<b>{config.main_title}</b>
		</a>
		<button on:click={toggleMenu} type="button" class="nav-menu">
			<Menu class="nav-menu"/>
		</button>
	</div>
	{#if !isMobile}
	<ul
	class="nav-links"
	transition:fly={{ y: -20, duration: 300 }}
  >
	{#each links as { href, name }}
	  <li>
		<a href={href} class:active={currentPath.includes(href)}>
		  {name}
		</a>
	  </li>
	{/each}
	<li class="toggle-btn">
	  <Toggle />
	</li>
  </ul>
	{:else if menuVisible}
    <ul
      class="nav-links"
      transition:fly={{ y: -20, duration: 300 }}
    >
      {#each links as { href, name }}
        <li>
          <a href={href} class:active={currentPath.includes(href)} on:click={toggleMenu}>
            {name}
          </a>
        </li>
      {/each}
      <li class="toggle-btn">
        <Toggle />
      </li>
    </ul>
  {/if}
</nav>

<style>
	.nav-links {
		display: flex;
		gap: var(--size-7);
		z-index: 2;
	}

	.toggle-btn{
		align-self: center;
		padding-block: var(--size-2)
	}

	nav {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			padding-block: var(--size-7);
			
		}
	.nav-menu {
		display: none;
	}
    .title {
		font-size: var(--font-size-fluid-1);
		text-transform: capitalize;
        font-family: var(--font-sans-title);
		display: inline-flex;
		align-items: center;
	}
	.title img{
		max-width: 50px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	
	.nav-links a {
		color: var(--text-1);
		background-color: inherit;
		font-weight: var(--font-weight-5);
		padding: var(--size-3);
		border-radius: var(--radius-3);
		display: block;


	&:hover, &.active {
		color: var(--text-2);
		background-color: var(--surface-4);
		box-shadow: var(--shadow-1);
	}
	}
	.logo {
		display: inline-flex;
	}
	.logo img{
		max-width: 30px;
	}
	@media (max-width: 768px) {
		nav {
		align-items: left;
		display: flex;
		flex-direction: column;
		}
		.nav-links {
			margin-top: var(--size-6);
			gap: var(--size-3);
			flex-direction: column;
			background-color: var(--surface-2);
			border-radius: var(--radius-3);
			width: 100%;
			height: 100%;
			z-index: 5;

		}
		.nav-menu{
			display: block;
			box-shadow: none;
		}
		.mob-nav {
			display: inline-flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
