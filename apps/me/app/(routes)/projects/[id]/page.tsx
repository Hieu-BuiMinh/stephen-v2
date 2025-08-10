import ProjectDetailPageView from '@/view/projects/pages/project-detail.page'

interface IProjectPageProps {
	params: Promise<{ id: string }>
}

function ProjectDetailPage({ params }: IProjectPageProps) {
	return <ProjectDetailPageView params={params} />
}

export default ProjectDetailPage
