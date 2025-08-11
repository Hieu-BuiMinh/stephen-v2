'use client'

import { formatDate } from '@repo/stephen-v2-utils'

interface IPostLastUpdated {
	date: string
}

function PostLastUpdated({ date }: IPostLastUpdated) {
	return (
		<>
			{date && (
				<div className="py-10 text-right text-sm">Last updated:&nbsp;{formatDate(date, 'MMMM D, YYYY')}</div>
			)}
		</>
	)
}

export default PostLastUpdated
