<script lang="ts">
	import * as config from '$lib/config'
	import { Mail, Instagram } from 'lucide-svelte';

	// const repetition = document.getElementById("repetition") as HTMLInputElement;

// repetition.addEventListener("change", (evt: Event) => {
//   const target = evt.target as HTMLInputElement;
//   document.getElementById("bordered")!.style.borderImageRepeat = target.value;
// });

</script>

<footer>
	<p>{config.main_title} &copy {new Date().getFullYear()}</p>
	<button><a href="mailto:{config.email}"><Mail/></a></button>
	<button><a href="https://www.instagram.com/{config.instagram_username}"><Instagram/></a></button>
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

	p {
		color: var(--text-2);
	}

</style>
