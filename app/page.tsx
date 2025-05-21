export default function Home() {
  const products = [
    {
      name: "Custom Pistol Engraving",
      image: "https://via.placeholder.com/300x200?text=Pistol",
      description: "Intricate designs on handgun slides and frames.",
      link: "https://yourcheckoutlink.com/pistol",
    },
    {
      name: "AR-15 Engraving",
      image: "https://via.placeholder.com/300x200?text=AR-15",
      description: "Tactical engravings for AR lower receivers and accessories.",
      link: "https://yourcheckoutlink.com/ar15",
    },
    {
      name: "Knife & Accessory Engraving",
      image: "https://via.placeholder.com/300x200?text=Knife",
      description: "Custom patterns on knives, grips, and more.",
      link: "https://yourcheckoutlink.com/knife",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Gun Engraving Store</h1>
        <p className="text-lg text-gray-600">
          High-precision custom firearm engravings. Veteran-owned. Fast turnaround.
        </p>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4 mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mb-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 p-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gun Engraving Store. All rights reserved.
      </footer>
    </main>
  );
}
