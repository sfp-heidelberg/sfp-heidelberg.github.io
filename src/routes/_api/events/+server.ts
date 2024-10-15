import { json } from '@sveltejs/kit'
import type { Event} from '$lib/types'

async function getEvents(){
    let events: Event[] = []


	const paths = import.meta.glob('$lib/content/de/events/*.md', {
		eager: true
	})

    for (const path in paths) {
        const file = paths[path]

        if (file && typeof file === 'object' && 'metadata' in file){
            const metadata: any = file.metadata
            const slug = metadata['slug']
            const event = { ... metadata, slug } satisfies Event
            event.published && events.push(event)
        }
    }

    events = events.sort(
        (first, second) => new Date(second.update_date).getTime() - new Date(first.update_date).getTime()
    )

    return events
}

export async function GET() {
    const events = await getEvents()
    return json(events)
}