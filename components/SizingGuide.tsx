export default function SizingGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to choose your size?
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Making sure that your kit fits you is very important. Below is a shirt sizing chart that will help you choose the correct size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start by:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Place your current cycle shirt on a flat surface</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Measuring under the arms left to right</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Then down the middle of your chest</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">And lastly your sleeve</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              If you are unsure of what to do, have a look at the red arrows in the diagram to see what we mean.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              {/* Shirt Diagram Placeholder */}
              <div className="aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <svg className="w-32 h-32 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500">Sizing Diagram</p>
                  <p className="text-sm text-gray-400 mt-2">Visual guide with measurement arrows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

