import { error } from '@sveltejs/kit'

export async function load({ route }) {
	try {
		const aboutPage = await import(`$lib/content/de/pages/${route.id.split('/')[1]}.md`)
        console.log(aboutPage.default)
		return {
			content: aboutPage.default,
			meta: aboutPage.metadata
		}
	} catch (e) {
		console.log(e)
		throw error(404, `Could not find it`)
	}
}
