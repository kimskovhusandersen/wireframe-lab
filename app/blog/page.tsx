export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding Responsive Design",
      excerpt: "Learn the fundamentals of creating layouts that work across all devices.",
      date: "March 15, 2024",
      category: "Design",
    },
    {
      id: 2,
      title: "Modern CSS Grid Techniques",
      excerpt: "Explore advanced grid layouts and how to implement them effectively.",
      date: "March 10, 2024",
      category: "Development",
    },
    {
      id: 3,
      title: "Wireframing Best Practices",
      excerpt: "A comprehensive guide to creating effective wireframes for web projects.",
      date: "March 5, 2024",
      category: "Design",
    },
    {
      id: 4,
      title: "Building Accessible Interfaces",
      excerpt: "How to ensure your designs are usable by everyone, regardless of ability.",
      date: "February 28, 2024",
      category: "Accessibility",
    },
    {
      id: 5,
      title: "Performance Optimization Tips",
      excerpt: "Strategies for making your web applications faster and more efficient.",
      date: "February 20, 2024",
      category: "Development",
    },
    {
      id: 6,
      title: "Typography in Web Design",
      excerpt: "The art and science of choosing and using fonts effectively online.",
      date: "February 15, 2024",
      category: "Design",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-600">Articles and insights on web design and development</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {["All", "Design", "Development", "Accessibility"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors text-gray-900 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-gray-900 font-semibold hover:underline">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

