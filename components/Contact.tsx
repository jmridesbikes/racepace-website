'use client'

import { useState } from 'react'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your enquiry! We will get back to you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please leave your details and a short message about your enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Comment or Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Unit F5 Prime Park</p>
                    <p className="text-gray-700">Mocke Rd Diepriver</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FiPhone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <a href="tel:+27217051014" className="text-gray-700 hover:text-primary-600 transition">
                    (021) 705 1014
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

