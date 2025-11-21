import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Wireframe Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore different responsive layouts and design patterns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Dashboard
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Browse Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Layout Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dashboard", desc: "Grid-based analytics layout", href: "/dashboard" },
              { title: "Blog", desc: "Card-based article layout", href: "/blog" },
              { title: "Portfolio", desc: "Masonry gallery layout", href: "/portfolio" },
              { title: "About", desc: "Sidebar content layout", href: "/about" },
              { title: "Contact", desc: "Form-centered layout", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-6 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">Wireframe Lab - Responsive Layout Demonstrations</p>
        </div>
      </footer>
    </div>
  );
}

