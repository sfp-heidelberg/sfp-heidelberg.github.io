import type { Post, Event } from '$lib/types'

// get only the top 6 posts
export async function load({ fetch }) {
	const response_posts = await fetch('_api/posts')
    const response_events = await fetch('_api/events')
	const posts: Post[] = await response_posts.json()
    const events: Event[] = await response_events.json()
    const topPosts = posts.slice(0,5)
    const topEvents = events.slice(0,5)
	return { topPosts, topEvents }
}

