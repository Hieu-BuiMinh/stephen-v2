import AboutSection from '@/view/home/components/about-section'
import PhotoGallery from '@/view/home/components/gallery-section/photo-gallery'
import LatestArticles from '@/view/home/components/latest-articles'
import NewHeroSection from '@/view/home/components/new-hero'
import ShortIntroSection from '@/view/home/components/short-intro-section'

function HomePageView() {
	return (
		<>
			<NewHeroSection />
			<PhotoGallery />
			<AboutSection />
			<LatestArticles />
			<ShortIntroSection />
		</>
	)
}

export default HomePageView
