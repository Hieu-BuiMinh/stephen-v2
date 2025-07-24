import AboutSection from '@/view/marketing/components/about-section'
import PhotoGallery from '@/view/marketing/components/gallery-section/photo-gallery'
import HeroSection from '@/view/marketing/components/hero-section'
import ShortIntroSection from '@/view/marketing/components/short-intro-section'

function HomePageView() {
	return (
		<>
			<HeroSection />
			<PhotoGallery />
			<AboutSection />
			<ShortIntroSection />
		</>
	)
}

export default HomePageView
