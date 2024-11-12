import { error } from '@sveltejs/kit'

export async function load({ route }) {
	try {
		const Impressum = await import(`$lib/content/de/pages/${route.id.split('/')[1]}.md`)
		return {
			content: Impressum.default,
			meta: Impressum.metadata
		}
	} catch (e) {
		console.log(e)
		throw error(404, `Could not find it`)
	}
}
