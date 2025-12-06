'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

// Placeholder image URLs - replace with actual product images
const galleryItems = [
  { id: 1, title: 'Greyvensteins SLEEVED Trisuit Draft1A', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=800&fit=crop' },
  { id: 2, title: 'Greyvensteins Cycle Shirt Draft1A', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 3, title: 'Felco Cycle Shirt Draft1C', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop' },
  { id: 4, title: 'Felco Cycle Shirt Draft1B', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop' },
  { id: 5, title: 'Felco Cycle Shirt Draft1A', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop' },
  { id: 6, title: 'Famous Brands Cycle Shirt Draft 1A', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 7, title: 'Famous Brands Cycle Shirt Draft 1C', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 8, title: 'Famous Brands Cycle Shirt Draft 1B', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 9, title: 'Embark Tri Top Draft1B', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=800&fit=crop' },
  { id: 10, title: 'Bok Radio EPIC Cycle Shirt Draft1A', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 11, title: 'CT Giants Cycle shirt Draft 1A', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
  { id: 12, title: 'Dan Willment Cycle Shirt Draft1B', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Check out our work
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4 font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              >
                <FiX size={32} />
              </button>
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt={galleryItems.find(item => item.id === selectedImage)?.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {galleryItems.find(item => item.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

