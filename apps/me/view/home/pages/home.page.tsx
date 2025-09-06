import AboutSection from '@/view/home/components/about-section'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import LatestArticles from '@/view/home/components/latest-articles'
import HeroSection03 from '@/view/home/components/new-hero-03'
import ShortIntroSection from '@/view/home/components/short-intro-section'

function HomePageView() {
	return (
		<>
			<HeroSection03 />
			<PhotoGallery />
			<AboutSection />
			<LatestArticles />
			<ShortIntroSection />
		</>
	)
}

export default HomePageView
