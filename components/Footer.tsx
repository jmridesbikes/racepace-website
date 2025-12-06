export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RacePace</h3>
            <p className="text-gray-400">
              Fast, reliable, high quality active wear. Race Your Game, Pace Your Game, Ace Your Game.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Unit F5 Prime Park</p>
            <p className="text-gray-400 mb-2">Mocke Rd Diepriver</p>
            <p className="text-gray-400">Tel: (021) 705 1014</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RacePace Sportswear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

