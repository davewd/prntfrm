export default function Products() {
  const products = [
    {
      icon: '🧸',
      title: 'Toys',
      description: 'Fun, safe, and durable 3D printed toys. Perfect for gifts and collectors.',
    },
    {
      icon: '🏺',
      title: 'Vases',
      description: 'Modern decorative vases in unique geometric designs for any space.',
    },
    {
      icon: '🪑',
      title: 'Furniture',
      description: 'Modular furniture pieces and accessories. Functional and stylish.',
    },
  ]

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Quality 3D printed products crafted with care
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-accent transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <span className="text-6xl mb-4 block" aria-hidden="true">
                {product.icon}
              </span>
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

