export type PhotoItem = {
	id: string
	date: string // format: "YYYY-MM-DD"
	image: string
	note?: string
}

export const mockPhotoJournalData: PhotoItem[] = [
	{
		id: '71a4f0b2',
		date: '2026-01-02',
		image: 'https://i.ibb.co/pGfYmKw/2026-02-01.jpg',
	},
	{
		id: '82b5c1d3',
		date: '2026-03-14',
		image: '/assets/articles/other-topic/journaling/2026/1.a-trip-to-da-lat/03.png',
		note: 'Da Lat: A Journey Through Misty Mornings, Pine Forests, and Beautiful Silence',
	},
	{
		id: '93c6d2e4',
		date: '2025-11-15',
		image: '/assets/images/avt/me_10.png',
		note: 'First Trip to Da Lat 🌄',
	},
	{
		id: 'a4d7e3f5',
		date: '2025-05-15',
		image: '/assets/articles/other-topic/journaling/2025/2.a-trip-to-binh-hung-island/cover.png',
		note: 'A Beautiful Escape to Bình Hưng Island',
	},
	{
		id: 'b5e8f4a6',
		date: '2025-12-18',
		image: '/assets/articles/retro/2025/my-dream-pc.png',
		note: 'My Dream PC Setup 💻',
	},
	{
		id: 'c6f9a5b7',
		date: '2025-05-01',
		image: '/assets/articles/retro/2025/new-company-2025.png',
		note: 'New Job, New Beginnings 🚀',
	},
	{
		id: 'd7a0b6c8',
		date: '2018-09-03',
		image: '/assets/articles/retro/2018/father-took-me-to-school.png',
		note: 'Dad took me to school',
	},
	{
		id: 'e8b1c7d9',
		date: '2018-09-04',
		image: '/assets/articles/retro/2018/ueh.png',
		note: 'Entered UEH, A New Beginning 📚',
	},
]
