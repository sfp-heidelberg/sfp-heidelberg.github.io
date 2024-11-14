<script lang="ts">
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Transition from '$lib/components/transition.svelte'
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'
	import * as config from '$lib/config'

	export let data

</script>
<svelte:head>
	<meta name="keywords" content={config.main_keywords}/>
</svelte:head>

<div class="layout">
	<Header />

	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
		
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-6);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
