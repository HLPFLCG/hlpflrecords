import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gold">
            HLPFL Records
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            World-Class Record Label & Artist Development
          </p>
          <div className="space-x-4">
            <Link 
              href="/artists"
              className="bg-gold text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Our Artists
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-dark transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold">Artist Development</h3>
              <p className="text-gray-300">
                Comprehensive artist development programs to nurture talent and build successful careers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold">Music Production</h3>
              <p className="text-gray-300">
                State-of-the-art production facilities with world-class producers and engineers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold">Global Distribution</h3>
              <p className="text-gray-300">
                Worldwide distribution network to get your music to every major platform globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gold">
            About HLPFL Records
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. 
            With decades of combined experience in the music industry, our team provides comprehensive support for artists at every stage of their career.
          </p>
          <Link 
            href="/about"
            className="bg-gold text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gold">HLPFL Records</h3>
          <p className="text-gray-400 mb-8">
            Elevating artists to global recognition
          </p>
          <div className="text-gray-500">
            © 2024 HLPFL Records. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}