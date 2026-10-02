import { DividerSlash } from '@repo/stephen-v2-ui/shadcn'

import AboutSection from '@/view/home/components/about-section'
import FloatingMediaCollage from '@/view/home/components/floating-media-collage'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import GithubContributionsSection from '@/view/home/components/github-contributions-section'
import LatestArticles from '@/view/home/components/latest-articles'
import HeroSection05 from '@/view/home/components/new-hero-05'
import TestimonialSection from '@/view/home/components/testimonial-section'

function HomePageView() {
	return (
		<>
			<HeroSection05 />
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
			<DividerSlash />

			<FloatingMediaCollage />
		</>
	)
}

export default HomePageView
