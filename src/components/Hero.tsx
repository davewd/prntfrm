export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-accent">Small Print Farm</span>
          <br />
          Based in Australia
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
          We're a small, passionate print farm creating quality 3D printed products right here in Australia. 
          Supporting local communities with unique, locally-made items.
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent hover:bg-accent-hover text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-light"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

