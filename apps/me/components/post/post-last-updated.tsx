'use client'

import { formatDate } from '@repo/stephen-v2-utils'

interface IPostLastUpdated {
	date: string
}

function PostLastUpdated({ date }: IPostLastUpdated) {
	return (
		<>
			{date && (
				<div className="py-10 text-xs text-muted-foreground underline">
					Last updated:&nbsp;{formatDate(date, 'MMMM D, YYYY')}
				</div>
			)}
		</>
	)
}

export default PostLastUpdated
