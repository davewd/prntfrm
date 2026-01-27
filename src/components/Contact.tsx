export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get in touch with our small print farm
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-2xl min-w-[2rem]" aria-hidden="true">
                  📧
                </span>
                <span>
                  Email:{" "}
                  <a
                    href="mailto:hello@prntfrm.com"
                    className="text-accent hover:text-accent-light"
                  >
                    hello@prntfrm.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-2xl min-w-[2rem]" aria-hidden="true">
                  📞
                </span>
                <span>
                  Phone:{" "}
                  <a
                    href="tel:+61400000000"
                    className="text-accent hover:text-accent-light"
                  >
                    +61 400 000 000
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-2xl min-w-[2rem]" aria-hidden="true">
                  📍
                </span>
                <span>Australia</span>
              </div>
            </div>
          </div>
          <form
            className="bg-gray-700/50 p-6 lg:p-8 rounded-2xl border border-gray-600"
            action="#"
            method="post"
            aria-label="Contact form"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-gray-900 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
