export type Categories = 'statement|camp'

export type Post = {
	title: string
	slug: string
	date: string
	description: string
	categories: Categories[]
	published: boolean
}

export type Page = {
	title: string
	slug: string
	layout: string
	content: string
	published: boolean
}

export type Event = {
	title: string
	slug: string
	update_date: string
	img_path: string
	description: string
	published: string
}