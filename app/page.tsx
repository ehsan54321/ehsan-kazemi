import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'

const Home = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}

export default Home
