import type { Event } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('_api/events')
	const events: Event[] = await response.json()
	return { events }
}
