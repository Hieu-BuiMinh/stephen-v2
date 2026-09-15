import dayjs from 'dayjs'

export function formatAlbumDate(date: string) {
	return dayjs(date).format('DD MMM YYYY')
}
