export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                <nav className="space-y-2">
                  {["Overview", "Team", "Mission", "Values", "History"].map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Contact</h3>
                <p className="text-sm text-gray-600 mb-2">hello@wireframelab.com</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
              <p className="text-lg text-gray-600">
                We create beautiful, responsive web experiences that work seamlessly across all devices.
              </p>
            </div>

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Wireframe Lab is a demonstration platform showcasing various responsive layout patterns
                  and design approaches. Our goal is to provide clear examples of how different layouts
                  can be implemented effectively across different screen sizes.
                </p>
                <p className="text-gray-700">
                  Each page in this application demonstrates a unique layout style, from dashboard grids
                  to blog card layouts, portfolio galleries, and more. All layouts are fully responsive
                  and optimized for mobile, tablet, and desktop viewing.
                </p>
              </div>
            </section>

            <section id="team" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Alex Johnson", role: "Design Lead" },
                  { name: "Sam Chen", role: "Frontend Developer" },
                  { name: "Jordan Taylor", role: "UX Researcher" },
                  { name: "Casey Martinez", role: "Product Manager" },
                ].map((member) => (
                  <div
                    key={member.name}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mb-4"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="mission" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-700">
                Our mission is to demonstrate best practices in responsive web design through practical,
                real-world examples. We believe that great design should be accessible, functional, and
                beautiful across all devices and screen sizes.
              </p>
            </section>

            <section id="values" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Accessibility", desc: "Design for everyone" },
                  { title: "Performance", desc: "Fast and efficient" },
                  { title: "Innovation", desc: "Pushing boundaries" },
                ].map((value) => (
                  <div key={value.title} className="p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

