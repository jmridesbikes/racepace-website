export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            RacePace
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-4 text-primary-100">
            Ace your Game
          </p>
          <p className="text-xl md:text-2xl mb-8 text-primary-200">
            Race Your Game • Pace Your Game • Ace Your Game
          </p>
          <p className="text-lg md:text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Fast, reliable, high quality active wear
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get a Quote
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="mt-8">
            <p className="text-primary-200 text-sm">#rideracepace</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

