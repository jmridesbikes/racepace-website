'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary-600">
              RacePace
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

