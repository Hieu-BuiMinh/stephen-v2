export type Connection = {
	name: string
	profile_picture: string
	socialLink?: string
	isConnected: boolean
	connectedDate?: string
}

export const MyConnections: Connection[] = [
	{
		name: 'Dao Nguyen',
		profile_picture: '/assets/images/connections/dao-nguyen.png',
		connectedDate: '02/26/2022',
		socialLink: 'https://github.com/daonguyendev',
		isConnected: true,
	},
	{
		name: 'Trang Alice',
		profile_picture: '/assets/images/connections/trang-alice.png',
		connectedDate: '04/15/2023',
		socialLink: 'https://github.com/maitnt',
		isConnected: true,
	},
	{
		name: 'Hoang Bao Vu',
		profile_picture: '/assets/images/connections/hoang-bao-vu.png',
		connectedDate: '02/26/2023',
		socialLink: 'https://github.com/hoangbaovu',
		isConnected: true,
	},
	{
		name: 'Phuc Mai',
		profile_picture: '/assets/images/connections/phuc-mai.png',
		connectedDate: '08/02/2024',
		socialLink: 'https://github.com/Phucmh98',
		isConnected: false,
	},
	{
		name: 'Braydon Coyer',
		profile_picture: '/assets/images/connections/braydon-coyer.png',
		socialLink: 'https://github.com/braydoncoyer',
		isConnected: false,
	},
	{
		name: 'Keanu Reeves',
		profile_picture: '/assets/images/connections/keanu-reeves.png',
		isConnected: false,
	},
	{
		name: 'Hoang Nam Tien',
		profile_picture: '/assets/images/connections/hoang-nam-tien.png',
		isConnected: false,
	},
	{
		name: 'Le Tham Duong',
		profile_picture: '/assets/images/connections/le-tham-duong.png',
		isConnected: false,
	},
]
