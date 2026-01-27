export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About PRNTFRM</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A small print farm dedicated to quality and local manufacturing
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-gray-300 space-y-4 text-lg">
            <p>
              We're a small print farm based in Australia, passionate about creating quality 3D printed products. 
              As a local business, we take pride in supporting Australian communities and providing unique, 
              locally-made items.
            </p>
            <p>
              Our focus is on craftsmanship, attention to detail, and building relationships with our customers. 
              We believe in the power of small businesses to make a big impact.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">🇦🇺 Made in Australia</h3>
              <p className="text-gray-400">Designed and manufactured locally, supporting Australian businesses.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">⚡ Fast & Reliable</h3>
              <p className="text-gray-400">Quick turnaround times with local shipping and personal service.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">🎯 Quality First</h3>
              <p className="text-gray-400">Premium materials and meticulous attention to every detail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

