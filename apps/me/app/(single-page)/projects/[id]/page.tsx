import { projectPost } from '@repo/stephen-v2-contents'

import ProjectDetailPageView from '@/view/projects/pages/project-detail.page'

export const dynamic = 'force-static'

interface IProjectPageProps {
	params: Promise<{ id: string }>
}

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
	return projectPost.map((post) => ({
		id: post.id,
	}))
}

function ProjectDetailPage({ params }: IProjectPageProps) {
	return <ProjectDetailPageView params={params} />
}

export default ProjectDetailPage
