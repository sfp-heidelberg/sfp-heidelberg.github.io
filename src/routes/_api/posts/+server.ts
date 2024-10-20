import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts = []

	const paths = import.meta.glob('$lib/content/de/posts/*.md', {
		eager: true
	})

	for (const path in paths) {
		const file = paths[path]

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata: any = file.metadata
			const slug = metadata['slug']
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
