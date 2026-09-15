export type AlbumMediaBase = {
	id: string
	date: string
	description?: string
	location?: string
	width: number
	height: number
}

export type AlbumPhoto = AlbumMediaBase & {
	type: 'photo'
	src: string
	alt: string
}

export type AlbumVideo = AlbumMediaBase & {
	type: 'video'
	src: string
	poster: string
	duration?: string
}

export type AlbumMedia = AlbumPhoto | AlbumVideo
export type AlbumArchive = Record<number, AlbumMedia[]>

export const albumArchive: AlbumArchive = {
	2026: [
		{
			id: '72a4f0b3',
			type: 'photo',
			date: '2026-05-14',
			src: '/assets/articles/other-topic/journaling/2026/2026-05-14-tea-with-master-giac-nguyen/tea-with-master-giac-nguyen.png',
			width: 2160,
			height: 2160,
			description: 'A Tea Session with Master Giac Nguyen',
			alt: 'A tea session with Master Giac Nguyen',
		},
		{
			id: '82b5c1d3',
			type: 'photo',
			date: '2026-03-14',
			src: '/assets/articles/other-topic/journaling/2026/1.a-trip-to-da-lat/03.png',
			width: 6144,
			height: 6144,
			description: 'Misty mornings and beautiful silence',
			location: 'Da Lat, Vietnam',
			alt: 'A quiet moment during my trip to Da Lat',
		},
		{
			id: '71a4f0b2',
			type: 'photo',
			date: '2026-01-02',
			src: 'https://i.ibb.co/pGfYmKw/2026-02-01.jpg',
			width: 865,
			height: 1545,
			alt: 'A personal memory from January 2026',
		},
	],
	2025: [
		{
			id: 'b5e8f4a6',
			type: 'photo',
			date: '2025-12-18',
			src: '/assets/articles/retro/2025/my-dream-pc.png',
			width: 2560,
			height: 2069,
			description: 'My Dream PC Setup 💻',
			alt: 'My dream PC setup',
		},
		{
			id: '93c6d2e4',
			type: 'photo',
			date: '2025-11-15',
			src: '/assets/images/avt/me_10.png',
			width: 1333,
			height: 2000,
			description: 'First Trip to Da Lat 🌄',
			alt: 'A memory from my first trip to Da Lat',
		},
		{
			id: 'a4d7e3f5',
			type: 'photo',
			date: '2025-05-15',
			src: '/assets/articles/other-topic/journaling/2025/2.a-trip-to-binh-hung-island/cover.png',
			width: 6144,
			height: 6144,
			description: 'A Beautiful Escape to Bình Hưng Island',
			alt: 'A trip to Bình Hưng Island',
		},
		{
			id: 'c6f9a5b7',
			type: 'photo',
			date: '2025-05-01',
			src: '/assets/articles/retro/2025/new-company-2025.png',
			width: 3000,
			height: 2000,
			description: 'New Job, New Beginnings 🚀',
			alt: 'A memory from starting a new job in 2025',
		},
	],
	2018: [
		{
			id: 'e8b1c7d9',
			type: 'photo',
			date: '2018-09-04',
			src: '/assets/articles/retro/2018/ueh.png',
			width: 680,
			height: 510,
			description: 'Entered UEH, A New Beginning 📚',
			alt: 'My first days at UEH',
		},
		{
			id: 'd7a0b6c8',
			type: 'photo',
			date: '2018-09-03',
			src: '/assets/articles/retro/2018/father-took-me-to-school.png',
			width: 1080,
			height: 1080,
			description: 'Dad took me to school',
			alt: 'My father taking me to school',
		},
	],
}
