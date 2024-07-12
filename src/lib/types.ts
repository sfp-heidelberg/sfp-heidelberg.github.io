export type Categories = 'statement'

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