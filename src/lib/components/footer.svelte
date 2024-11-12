<script lang="ts">
	import * as config from '$lib/config'
	import { Dot } from 'lucide-svelte';

	// const repetition = document.getElementById("repetition") as HTMLInputElement;

// repetition.addEventListener("change", (evt: Event) => {
//   const target = evt.target as HTMLInputElement;
//   document.getElementById("bordered")!.style.borderImageRepeat = target.value;
// });

</script>

<footer>
	<p>{config.main_title} &copy {new Date().getFullYear()}</p>
	<div class="footer-links">
		<a href="mailto:{config.email}">Email</a> •
		<a href="https://www.instagram.com/{config.instagram_username}">Instagram</a> •
		<a href="/impressum">Impressum</a>
	</div>

</footer>

<style>
	footer {
		padding-block: var(--size-7);
		margin-top: 1em;
		border-top: 20px solid transparent;
    	border-image: url('/4_.png');
		border-image-repeat: space;
		border-image-slice: 250;
		padding: var(--size-2);
		display: flexbox;
	}
	.footer-links {
		justify-self: center;
	}

	p {
		color: var(--text-2);
	}

</style>
