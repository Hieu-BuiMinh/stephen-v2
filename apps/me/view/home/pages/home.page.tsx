import { DividerSlash } from '@repo/stephen-v2-ui/shadcn'

import AboutSection from '@/view/home/components/about-section'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import GithubContributionsSection from '@/view/home/components/github-contributions-section'
import LatestArticles from '@/view/home/components/latest-articles'
import HeroSection03 from '@/view/home/components/new-hero-03'

function HomePageView() {
	return (
		<>
			<HeroSection03 />
			<DividerSlash />

			<PhotoGallery />
			<DividerSlash />

			<AboutSection />
			<DividerSlash />

			<LatestArticles />
			<DividerSlash />

			<GithubContributionsSection />
		</>
	)
}

export default HomePageView
