import AboutSection from '@/view/home/components/about-section'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import HeroSection from '@/view/home/components/hero-section'
import LatestArticles from '@/view/home/components/latest-articles'
import ShortIntroSection from '@/view/home/components/short-intro-section'

function HomePageView() {
	return (
		<>
			<HeroSection />
			<PhotoGallery />
			<AboutSection />
			<LatestArticles />
			<ShortIntroSection />
		</>
	)
}

export default HomePageView
