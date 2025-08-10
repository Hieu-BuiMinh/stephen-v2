import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import ProjectCollectionsPageView from '@/view/projects/pages/project-collections.page'

function ProjectsPage() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title="Projects" description="Showcase of my projects that I'm proud of." />
				<ProjectCollectionsPageView />
			</div>
		</>
	)
}

export default ProjectsPage
