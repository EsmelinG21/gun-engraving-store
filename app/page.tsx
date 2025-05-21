import Head from "next/head";

export default function Home() {
  const products = [
    {
      name: "Custom Pistol Engraving",
      image: "/image/pistol.png",
      description: "Intricate designs on handgun slides and frames.",
      link: "https://yourcheckoutlink.com/pistol",
    },
    {
      name: "AR-15 Engraving",
      image: "/image/ar15.png",
      description: "Tactical engravings for AR lower receivers and accessories.",
      link: "https://yourcheckoutlink.com/ar15",
    },
    {
      name: "Knife & Accessory Engraving",
      image: "/image/knife.png",
      description: "Custom patterns on knives, grips, and more.",
      link: "https://yourcheckoutlink.com/knife",
    },
  ];

  return (
    <>
      <Head>
        <title>Gun Engraving Store | Custom Firearm Engraving</title>
        <meta
          name="description"
          content="Veteran-owned gun engraving shop offering custom pistol, AR-15, and knife engravings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-100 px-4 sm:px-10 py-10">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Gun Engraving Store
          </h1>
          <p className="text-lg text-gray-600">
            High-precision custom firearm engravings. Veteran-owned. Fast
            turnaround.
          </p>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mb-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 p-3 rounded"
              required
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
    </>
  );
}
