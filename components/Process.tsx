import { FiFileText, FiPenTool, FiPackage, FiTruck } from 'react-icons/fi'

const steps = [
  {
    icon: FiFileText,
    title: 'Quote',
    description: 'If you enquire about using Racepace Sportswear you will receive a free quotation containing the amount, sizing, and trims of the garments you have selected.',
  },
  {
    icon: FiPenTool,
    title: 'Design',
    description: 'Once you have chosen to use Racepace we will begin the design process. Depending on your quantities you will receive a full design and 10 design alterations free of charge.',
  },
  {
    icon: FiPackage,
    title: 'Produce',
    description: 'All our production takes place in-house to ensure the cheapest price possible for you.',
  },
  {
    icon: FiTruck,
    title: 'Deliver',
    description: 'Once you have paid in full we will deliver your items to you wherever you are.',
  },
]

export default function Process() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary-100 p-4 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-6 text-primary-600 font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

