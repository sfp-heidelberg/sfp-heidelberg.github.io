import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const event = await import(`$lib/content/de/events/${params.slug}.md`)
		return {
			content: event.default,
			meta: event.metadata
		}
	} catch (e) {
		console.log(e)
		throw error(404, `Could not find ${params.slug}`)
	}
}
