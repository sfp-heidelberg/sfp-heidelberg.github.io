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
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<button><a href="mailto:{config.email}"><Mail/></a></button>
	<button><a href="https://www.instagram.com/{config.instagram_username}"><Instagram/></a></button>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		display: flexbox;
	}

	p {
		color: var(--text-2);
	}
</style>
