export default function PortfolioPage() {
  const projects = [
    { id: 1, title: "E-Commerce Platform", category: "Web App", aspect: "wide" },
    { id: 2, title: "Mobile Banking App", category: "Mobile", aspect: "tall" },
    { id: 3, title: "Design System", category: "Design", aspect: "square" },
    { id: 4, title: "Analytics Dashboard", category: "Web App", aspect: "wide" },
    { id: 5, title: "Brand Identity", category: "Branding", aspect: "square" },
    { id: 6, title: "Social Media Platform", category: "Web App", aspect: "tall" },
    { id: 7, title: "Product Landing Page", category: "Web", aspect: "wide" },
    { id: 8, title: "Mobile Game UI", category: "Mobile", aspect: "square" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-gray-600">A collection of projects and case studies</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {["All", "Web App", "Mobile", "Design", "Branding", "Web"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project) => {
            const heightClass =
              project.aspect === "tall"
                ? "h-96"
                : project.aspect === "wide"
                ? "h-64"
                : "h-80";

            return (
              <div
                key={project.id}
                className={`${heightClass} bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 hover:shadow-xl transition-all cursor-pointer group`}
              >
                <div className="h-3/4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <div className="p-4 h-1/4 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

