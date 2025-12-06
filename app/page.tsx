import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import SizingGuide from '@/components/SizingGuide'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <SizingGuide />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

