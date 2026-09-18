import { DividerSlash } from '@repo/stephen-v2-ui/shadcn'

import AboutSection from '@/view/home/components/about-section'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import GithubContributionsSection from '@/view/home/components/github-contributions-section'
import LatestArticles from '@/view/home/components/latest-articles'
import LoadingLayer from '@/view/home/components/loading-layer'
import HeroSection04 from '@/view/home/components/new-hero-04'
import TestimonialSection from '@/view/home/components/testimonial-section'

function HomePageView() {
	return (
		<LoadingLayer>
			<HeroSection04 />
			<DividerSlash />

			<PhotoGallery />
			<DividerSlash />

			<AboutSection />
			<DividerSlash />

			<LatestArticles />
			<DividerSlash />

			<TestimonialSection />
			<DividerSlash />

			<GithubContributionsSection />
		</LoadingLayer>
	)
}

export default HomePageView
